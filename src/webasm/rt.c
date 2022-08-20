
#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

#define integer_size(x) ((int)(floor(log10(abs(x))) + 1))

typedef struct vec3_s
{
    double x, y, z; // rgb
} vec3_t;

typedef struct sphere_s
{
    vec3_t center, color;
    double radius;
} sphere_t;

typedef struct scene_s
{
    int pixel_height, pixel_width;
    vec3_t camera;
    int n_spheres;
    sphere_t *spheres;
} scene_t;

static char *base64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
static char base64_padding = '=';

int base64(int n, char msg[n], char e[])
{
    char *overlap_free = malloc((strlen(msg)*4 / 3) + 2);

    for (int i = 0; i <= (n-1) / 3; ++i)
    {
        overlap_free[4*i] = base64_table[(uint8_t)msg[3*i] / 4];
        overlap_free[4*i + 1] = base64_table[((uint8_t)msg[3*i] % 4)*16 + (uint8_t)msg[3*i + 1]/16];
        overlap_free[4*i + 2] = base64_table[((uint8_t)msg[3*i + 1] % 16)*4 + (uint8_t)msg[3*i + 2]/64];
        overlap_free[4*i + 3] = base64_table[(uint8_t)msg[3*i + 2] % 64];
    }

    if (n % 3 == 1) overlap_free[4*((n-1)/3) + 2] = base64_padding;
    if (n % 3 == 1 || n % 3 == 2) overlap_free[4*((n-1)/3) + 3] = base64_padding;
    overlap_free[4*((n-1)/3) + 4] = '\0';

    memcpy(e, overlap_free, 4*((n-1)/3) + 5);
    return 4*((n-1)/3) + 4;
}

char *bmp(const scene_t scene, vec3_t **pixels)
{
    int d, n = 26 + (scene.pixel_width * scene.pixel_height * 3);
    char file[n];
    unsigned short s;

    memcpy(&file[0], "BM", 2);
    d = n;
    memcpy(&file[2], &d, 4);
    d = 0;
    memcpy(&file[6], &d, 4);
    d = 26;
    memcpy(&file[10], &d, 4);

    d = 12;
    memcpy(&file[14], &d, 4);
    s = scene.pixel_width;
    memcpy(&file[18], &s, 2);
    s = scene.pixel_height;
    memcpy(&file[20], &s, 2);
    s = 1;
    memcpy(&file[22], &s, 2);
    s = 24;
    memcpy(&file[24], &s, 2);

    for (int y = 0; y < scene.pixel_height; ++y)
    {
        for (int x = 0; x < scene.pixel_width; ++x)
        {
            int color = (int)(255.99 * pixels[y][x].x) * pow(16, 4)
                    + (int)(255.99 * pixels[y][x].y) * pow(16, 2)
                    + (int)(255.99 * pixels[y][x].z);
            memcpy(&file[26 + ((y * scene.pixel_width + x) * 3)], &color, 3);
        }
    }

#ifdef MAIN
    FILE *fp = fopen("./image.bmp", "w");
    fwrite(file, 1, n, fp);
    fclose(fp);
    return NULL;
#else
    char *base64_encrypted = malloc((n*4 / 3) + 2);
    base64(n, file, base64_encrypted);
    return base64_encrypted;
#endif
}

vec3_t vec3_sub(const vec3_t a, const vec3_t b)
{
    return (vec3_t) { a.x - b.x, a.y - b.y, a.z - b.z };
}

double vec3_dot(const vec3_t a, const vec3_t b)
{
    return a.x * b.x + a.y * b.y + a.z * b.z;
}

double vec3_squared_norm(const vec3_t a)
{
    return pow(a.x, 2) + pow(a.y, 2) + pow(a.z, 2);
}

void vec3_print(const vec3_t a, const char *name, const char *line_prefix)
{
    printf("%s%s:\n", line_prefix, name);
    printf("%s\tx: %f\n", line_prefix, a.x);
    printf("%s\ty: %f\n", line_prefix, a.y);
    printf("%s\tz: %f\n", line_prefix, a.z);
}

int ray_sphere_intersect(const sphere_t sphere, const vec3_t camera, const vec3_t ray)
{
    vec3_t tmp = vec3_sub(camera, sphere.center);
    double a = vec3_squared_norm(ray);
    double b = 2 * vec3_dot(ray, tmp);
    double c = vec3_squared_norm(tmp) - pow(sphere.radius, 2);

    return pow(b, 2) - 4 * a * c > 0;
}

void sphere_print(const sphere_t sphere, const char *line_prefix)
{
    vec3_print(sphere.center, "center", line_prefix);
    vec3_print(sphere.color, "color", line_prefix);
    printf("%sradius: %f\n", line_prefix, sphere.radius);
}

int double_size(const char *unparsed_scene)
{
    int i = 0;

    while ((unparsed_scene[i] >= '0' && unparsed_scene[i] <= '9') || unparsed_scene[i] == '.' || unparsed_scene[i] == '-')
        ++i;

    return i;
}

const char *vec3_parser(const char *unparsed_scene, vec3_t *vec)
{
    unparsed_scene += 5;
    // printf("unparsed_scene: '%s'\n", unparsed_scene);
    vec->x = atof(unparsed_scene);

    unparsed_scene += double_size(unparsed_scene) + 5;
    // printf("unparsed_scene: '%s'\n", unparsed_scene);
    vec->y = atof(unparsed_scene);

    unparsed_scene += double_size(unparsed_scene) + 5;
    // printf("unparsed_scene: '%s'\n", unparsed_scene);
    vec->z = atof(unparsed_scene);
    unparsed_scene += double_size(unparsed_scene) + 1;

    return unparsed_scene;
}

int scene_parser(const char *unparsed_scene, scene_t *scene)
{
    char *tmp;

    unparsed_scene += 15;
    scene->pixel_height = atoi(unparsed_scene);

    unparsed_scene += integer_size(scene->pixel_height) + 14;
    scene->pixel_width = atoi(unparsed_scene);

    unparsed_scene += integer_size(scene->pixel_width) + 10;
    unparsed_scene = vec3_parser(unparsed_scene, &scene->camera);

    unparsed_scene += 12;
    scene->n_spheres = atoi(unparsed_scene);

    unparsed_scene += integer_size(scene->n_spheres) + 12;
    // printf("unparsed_scene: '%s'\n", unparsed_scene);
    scene->spheres = malloc(scene->n_spheres * sizeof (sphere_t));
    for (int i = 0; i < scene->n_spheres; ++i)
    {
        unparsed_scene += 10;
        // printf("unparsed_scene: '%s'\n", unparsed_scene);
        unparsed_scene = vec3_parser(unparsed_scene, &scene->spheres[i].center);
        
        unparsed_scene += 9;
        // printf("unparsed_scene: '%s'\n", unparsed_scene);
        unparsed_scene = vec3_parser(unparsed_scene, &scene->spheres[i].color);

        unparsed_scene += 10;
        // printf("unparsed_scene: '%s'\n", unparsed_scene);
        scene->spheres[i].radius = atoi(unparsed_scene);
        unparsed_scene += integer_size(scene->pixel_height) + 2;
    }

    return 0;
}

void scene_print(const scene_t scene)
{
    printf("scene:\n");
    printf("\tpixel_height: %d\n", scene.pixel_height);
    printf("\tpixel_width: %d\n", scene.pixel_width);
    vec3_print(scene.camera, "camera", "\t");
    printf("\tn_spheres: %d\n", scene.n_spheres);
    printf("\tspheres:\n");
    for (int i = 0; i < scene.n_spheres; ++i)
    {
        sphere_print(scene.spheres[i], "\t\t");
    }
}

char* rt(char *unparsed_scene)
{
    scene_t scene;

    scene_parser(unparsed_scene, &scene);

    // scene_print(scene);

    vec3_t **pixels = malloc(scene.pixel_height * sizeof (vec3_t *));

    for (int y = 0; y < scene.pixel_height; ++y)
    {
        pixels[y] = malloc(scene.pixel_width * sizeof (vec3_t));
        for (int x = 0; x < scene.pixel_width; ++x)
        {
            vec3_t ray = vec3_sub((vec3_t) { x - scene.pixel_width / 2, y - scene.pixel_height / 2, 0. }, scene.camera);
            pixels[y][x] = (vec3_t) { .0, .0, .0 };
            
            for (int i = 0; i < scene.n_spheres; ++i)
            {
                if (ray_sphere_intersect(scene.spheres[i], scene.camera, ray))
                {
                    pixels[y][x] = scene.spheres[i].color;
                }
            }
        }
    }

    return bmp(scene, pixels);

    for (int y = 0; y < scene.pixel_height; ++y)
        free(pixels[y]);
    free(pixels);

    return 0;
}

char *create_buffer(int n)
{
  return malloc(n * sizeof (char));
}

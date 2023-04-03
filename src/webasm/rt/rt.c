
#include "./rt.h"

static char *base64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
static char base64_padding = '=';

static int base64(int n, char msg[n], char e[])
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

static char *saver(const scene_t scene, vec3_t **pixels)
{
    int d, n = 26 + (scene.pixel_width * scene.pixel_height * 3);
    char *file = malloc(n);
    unsigned short s;

    memcpy(&file[0], "BM", 2);

    d = n, memcpy(&file[2], &d, 4);
    d = 0, memcpy(&file[6], &d, 4);
    d = 26, memcpy(&file[10], &d, 4);

    d = 12, memcpy(&file[14], &d, 4);
    s = scene.pixel_width, memcpy(&file[18], &s, 2);
    s = scene.pixel_height, memcpy(&file[20], &s, 2);
    s = 1, memcpy(&file[22], &s, 2);
    s = 24, memcpy(&file[24], &s, 2);

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
    free(file);
    return NULL;
#else
    char *base64_encrypted = malloc((n*4 / 3) + 2);
    base64(n, file, base64_encrypted);
    free(file);
    return base64_encrypted;
#endif
}

char* rt(char *unparsed_scene)
{
    if (unparsed_scene == NULL) return NULL;
    
    scene_t scene = scene_parser(unparsed_scene);
    vec3_t **pixels = malloc(scene.pixel_height * sizeof (vec3_t *));
    camera_t camera = camera_init(scene.camera, (vec3_t) { 0, 0, 1 }, (vec3_t) { 0, 1, 0 }, 90, scene.pixel_height * scene.antialiasing, scene.pixel_width * scene.antialiasing);

    // scene_print(scene);

    for (int y = 0; y < scene.pixel_height; ++y)
    {
        pixels[y] = malloc(scene.pixel_width * sizeof (vec3_t));
        for (int x = 0; x < scene.pixel_width; ++x)
        {
            pixels[y][x] = (vec3_t) { .0, .0, .0 };
            for (int ny = 0; ny < scene.antialiasing; ++ny)
            {
                for (int nx = 0; nx < scene.antialiasing; ++nx)
                {
                    vec3_t ray = camera_get_ray(
                        camera,
                        y * scene.antialiasing + ny,
                        x * scene.antialiasing + nx
                    );

                    double dist_min = INFINITY;
                    vec3_t color = { 0, 0, 0};

                    for (int i = 0; i < scene.n_spheres; ++i)
                    {
                        inter_t inter = sphere_intersect(scene.spheres[i], scene.camera, ray);
                        if (inter.did_intersected && inter.distance < dist_min)
                        {
                            dist_min = inter.distance;
                            color = vec3_mult(
                                scene.spheres[i].color,
                                fabs(cos(inter.angle)) / pow(scene.antialiasing, 2)
                            );
                        }
                    }
                    pixels[y][x] = vec3_add(pixels[y][x], color);
                }
            }
        }
    }

    char *base64_encrypted = saver(scene, pixels);

    for (int y = 0; y < scene.pixel_height; ++y)
        free(pixels[y]);
    free(pixels);

    return base64_encrypted;
}

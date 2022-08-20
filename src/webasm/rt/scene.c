
#include "./rt.h"

scene_t scene_parser(const char *unparsed_scene)
{
    scene_t scene;

    unparsed_scene += 15;
    scene.pixel_height = atoi(unparsed_scene);

    unparsed_scene += integer_size(scene.pixel_height) + 14;
    scene.pixel_width = atoi(unparsed_scene);

    unparsed_scene += integer_size(scene.pixel_width) + 16;
    scene.antialiasing = atoi(unparsed_scene);

    unparsed_scene += integer_size(scene.pixel_width) + 10;
    unparsed_scene = vec3_parser(unparsed_scene, &scene.camera);

    unparsed_scene += 12;
    scene.n_spheres = atoi(unparsed_scene);

    unparsed_scene += integer_size(scene.n_spheres) + 12;
    scene.spheres = malloc(scene.n_spheres * sizeof (sphere_t));

    for (int i = 0; i < scene.n_spheres; ++i)
    {
        unparsed_scene += 10;
        unparsed_scene = vec3_parser(unparsed_scene, &scene.spheres[i].center);
        
        unparsed_scene += 9;
        unparsed_scene = vec3_parser(unparsed_scene, &scene.spheres[i].color);

        unparsed_scene += 10;
        scene.spheres[i].radius = atoi(unparsed_scene);
        unparsed_scene += integer_size(scene.pixel_height) + 2;
    }

    return scene;
}

void scene_print(const scene_t scene)
{
    printf("scene:\n");
    printf("\tpixel_height: %d\n", scene.pixel_height);
    printf("\tpixel_width: %d\n", scene.pixel_width);
    printf("\tantialiasing: %d\n", scene.antialiasing);
    vec3_print(scene.camera, "camera", "\t");
    printf("\tn_spheres: %d\n", scene.n_spheres);
    printf("\tspheres:\n");
    for (int i = 0; i < scene.n_spheres; ++i)
    {
        sphere_print(scene.spheres[i], "\t\t");
    }
}

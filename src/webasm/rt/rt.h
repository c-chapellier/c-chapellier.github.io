#pragma once

#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

#define integer_size(x) ((int)(floor(log10(abs(x))) + 1))
#define DEGREE_TO_RADIAN(n) ((n) * (M_PI / 180))
#define RADIAN_TO_DEGREE(n) ((n) * (180 / M_PI))

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
    int antialiasing;
    vec3_t camera;
    int n_spheres;
    sphere_t *spheres;
} scene_t;

typedef struct camera_s
{
    vec3_t screen_center, u, v;
    vec3_t position;
    int height, width;
} camera_t;

typedef struct inter_s
{
    int did_intersected;
    double distance, angle;
} inter_t;

int double_size(const char *unparsed_scene);

vec3_t vec3_add(const vec3_t a, const vec3_t b);
vec3_t vec3_sub(const vec3_t a, const vec3_t b);
vec3_t vec3_mult(const vec3_t a, double b);
vec3_t vec3_div(const vec3_t a, double b);
double vec3_dot(const vec3_t a, const vec3_t b);
double vec3_norm(const vec3_t a);
double vec3_squared_norm(const vec3_t a);
vec3_t vec3_cross(const vec3_t a, const vec3_t b);
vec3_t vec3_unit(const vec3_t a);
double vec3_is_null(const vec3_t a);
void vec3_print(const vec3_t a, const char *name, const char *line_prefix);
const char *vec3_parser(const char *unparsed_scene, vec3_t *vec);

inter_t sphere_intersect(const sphere_t sphere, const vec3_t camera, const vec3_t ray);
void sphere_print(const sphere_t sphere, const char *line_prefix);

scene_t scene_parser(const char *unparsed_scene);
void scene_print(const scene_t scene);

camera_t camera_init(vec3_t coordinates, vec3_t direction, vec3_t up, double angle, int height, int width);
vec3_t camera_get_ray(camera_t camera, int y, int x);

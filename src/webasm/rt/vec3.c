
#include "./rt.h"

vec3_t vec3_add(const vec3_t a, const vec3_t b)
{
    return (vec3_t) { a.x + b.x, a.y + b.y, a.z + b.z };
}

vec3_t vec3_sub(const vec3_t a, const vec3_t b)
{
    return (vec3_t) { a.x - b.x, a.y - b.y, a.z - b.z };
}

vec3_t vec3_mult(const vec3_t a, double b)
{
    return (vec3_t) { a.x * b, a.y * b, a.z * b };
}

vec3_t vec3_div(const vec3_t a, double b)
{
    return (vec3_t) { a.x / b, a.y / b, a.z / b };
}

double vec3_dot(const vec3_t a, const vec3_t b)
{
    return a.x * b.x + a.y * b.y + a.z * b.z;
}

double vec3_norm(const vec3_t a)
{
    return sqrt(pow(a.x, 2) + pow(a.y, 2) + pow(a.z, 2));
}

double vec3_squared_norm(const vec3_t a)
{
    return pow(a.x, 2) + pow(a.y, 2) + pow(a.z, 2);
}

vec3_t vec3_cross(const vec3_t a, const vec3_t b)
{
    return (vec3_t) {
        a.y * b.z - a.z * b.y,
        a.z * b.x - a.x * b.z,
        a.x * b.y - a.y * b.x
    };
}

vec3_t vec3_unit(const vec3_t a)
{
    return vec3_div(a, vec3_norm(a));
}

double vec3_is_null(const vec3_t a)
{
    return a.x == 0. && a.y == 0. && a.z == 0.;
}

void vec3_print(const vec3_t a, const char *name, const char *line_prefix)
{
    printf("%s%s:\n", line_prefix, name);
    printf("%s\tx: %f\n", line_prefix, a.x);
    printf("%s\ty: %f\n", line_prefix, a.y);
    printf("%s\tz: %f\n", line_prefix, a.z);
}

const char *vec3_parser(const char *unparsed_scene, vec3_t *vec)
{
    unparsed_scene += 5;
    vec->x = atof(unparsed_scene);

    unparsed_scene += double_size(unparsed_scene) + 5;
    vec->y = atof(unparsed_scene);

    unparsed_scene += double_size(unparsed_scene) + 5;
    vec->z = atof(unparsed_scene);

    return unparsed_scene + double_size(unparsed_scene) + 1;
}


#include "./rt.h"

inter_t sphere_intersect(const sphere_t sphere, const vec3_t camera, const vec3_t ray)
{
    vec3_t tmp = vec3_sub(camera, sphere.center);
    double a = 2 * vec3_squared_norm(ray);
    double b = 2 * vec3_dot(ray, tmp);
    double c = vec3_squared_norm(tmp) - pow(sphere.radius, 2);
    double d = pow(b, 2) - 2 * a * c;

    if (d > 0)
    {
        double t = (-b + sqrt(d)) / a;
        vec3_t inter = vec3_add(camera, vec3_mult(ray, t));
        double dist = vec3_norm(vec3_sub(inter, camera));

        t = (-b - sqrt(d)) / a;
        vec3_t inter2 = vec3_add(camera, vec3_mult(ray, t));
        double dist2 = vec3_norm(vec3_sub(inter2, camera));

        if (dist2 < dist)
        {
            dist = dist2;
            inter = inter2;
        }

        vec3_t center_intersection = vec3_sub(inter, sphere.center);
        double angle = acos(
            (vec3_dot(center_intersection, ray)) / (vec3_norm(center_intersection) * vec3_norm(ray))
        );
        return (inter_t) { 2, dist, angle };
    }

    return (inter_t) { 0, 0., 0. };
}

void sphere_print(const sphere_t sphere, const char *line_prefix)
{
    vec3_print(sphere.center, "center", line_prefix);
    vec3_print(sphere.color, "color", line_prefix);
    printf("%sradius: %f\n", line_prefix, sphere.radius);
}

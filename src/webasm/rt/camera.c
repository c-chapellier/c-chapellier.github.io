
#include "./rt.h"

camera_t camera_init(vec3_t coordinates, vec3_t direction, vec3_t up, double angle, int height, int width)
{
    if (vec3_is_null(direction)) printf("The camera vector can not be the null vector\n"), exit(1);
    if (vec3_is_null(up)) printf("The camera vector can not be the null vector\n"), exit(1);
    if (angle < 60 || angle > 120) printf("Bad angle for camera\n"), exit(1);

    direction = vec3_unit(direction);
    up = vec3_unit(up);

    vec3_t u = vec3_mult(vec3_unit(vec3_cross(up, direction)), -1);
    vec3_t v = vec3_unit(vec3_cross(u, direction));
    
    vec3_t screen_center = vec3_add(
        coordinates,
        vec3_mult(
            direction,
            width / tan(DEGREE_TO_RADIAN(angle / 2))
        )
    );

    return (camera_t) { screen_center, u, v, coordinates, height, width };
}

vec3_t camera_get_ray(camera_t camera, int y, int x)
{
    vec3_t ray = vec3_add(camera.position, camera.screen_center);
    ray = vec3_add(ray, vec3_mult(camera.v, y - camera.height/2));
    ray = vec3_add(ray, vec3_mult(camera.u, x - camera.width/2));
    return ray;
}

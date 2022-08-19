
#define MAIN

#include "rt.c"

int main()
{
    printf("%s", rt("{\"pixelHeight\":400,\"pixelWidth\":400,\"camera\":{\"x\":0,\"y\":0,\"z\":-70},\"nSpheres\":1,\"spheres\":[{\"center\":{\"x\":0,\"y\":0,\"z\":0},\"color\":{\"x\":0,\"y\":0,\"z\":30},\"radius\":50}]}"));
    return 0;
}

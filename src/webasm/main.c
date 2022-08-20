
#define MAIN

#include "rt.c"

int main()
{

    FILE *fp;
    char buffer[1000];

    fp = fopen("scene.txt", "r");

    fseek(fp, 0L, SEEK_END);
    int sz = ftell(fp);
    fseek(fp, 0L, SEEK_SET);

    fread(buffer, sz+1, 1, fp);
    fclose(fp);

    printf("%s", rt(buffer));
    return 0;
}

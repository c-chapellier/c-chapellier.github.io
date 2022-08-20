
#include "./rt.h"

int double_size(const char *unparsed_scene)
{
    int i = 0;

    while ((unparsed_scene[i] >= '0' && unparsed_scene[i] <= '9') || unparsed_scene[i] == '.' || unparsed_scene[i] == '-')
        ++i;

    return i;
}


#include <stdlib.h>

char *create_buffer(int n)
{
  return malloc(n * sizeof (char));
}

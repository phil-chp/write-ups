// 4a 4d 7a 4a 37 57 4d 37 55 3b 56 59 3b 5e 3c 51 56 20 4e 59 27 4e 26 49 59 28 5f 58 32 56 5b 4b 37 58 5c 5a 5f 40 3d 40 3f 47 24 43 26 4c 43 25 49 47 2c 44 31 50 56 5b 55 32 43 38 5b 5f 2a 2d 2c 2f 72

#include <stdio.h>
#include <stdlib.h>
#include <stdint.h>

int main(void) {
    char encTrueChristmasSecret[] = "JMzJ7WM7U;VY;^<QV NY'N&IY(_X2V[K7X\\Z_@=@?G$C&LC%IG,D1PV[U2C8[_*-,/r";
    char *res = (char *)malloc(sizeof(char) * 270);

    for (size_t i = 0; i < 0x43; ++i) {
        res[i] = encTrueChristmasSecret[i];
        printf("i=%d, i*4=%d, i<<2=%d, res=%c\n", i, i*4, i<<2, res[i << 2]);
    }
    printf("%s\n", res);
    return 0;
}

#include <stdio.h>
#include <stdlib.h>

#include "emu.h"

void __attribute__((constructor)) setup(void)
{
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stdin, NULL, _IONBF, 0);
}

static size_t read_long(void)
{
    char buf[0x20] = { 0 };
    fgets(buf, sizeof(buf) - 1, stdin);
    return strtoul(buf, NULL, 10);
}

int main(int argc, char *argv[]) {
    printf("Ho ho ho! Welcome to the GCI (Gift Control Interface)\n");
    printf("You can write your gift list here and I will execute it for you\n");

    printf("Code length (%d max): ", CODE_SIZE);
    size_t code_len = read_long();

    void *code = malloc(code_len);
    if (!code) {
        fputs("Failed to allocate memory\n", stderr);
        return 1;
    }

    printf("Enter your code: ");
    fread(code, 1, code_len, stdin);

    printf("Executing your code...\n");

    return emu_launch(code, code_len);
}

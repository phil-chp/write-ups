#ifndef __EMU_H__
#define __EMU_H__

#include <stdlib.h>

#define PAGE_SIZE 0x1000

#define STACK_START 0xf0000000
#define STACK_SIZE  0x10000

#define CODE_START  0X100000
#define CODE_SIZE (PAGE_SIZE * 4)

int emu_launch(void *code, size_t code_len);

#endif
#include <unicorn/unicorn.h>

#include <emu.h>
#include <gci.h>

static bool emu_init(uc_engine **uc, void *code, size_t code_len)
{
    uc_engine *_uc;
    uc_err err;
    
    if ((err = uc_open(UC_ARCH_X86, UC_MODE_64, &_uc)) != UC_ERR_OK) {
        *uc = NULL;
        return false;
    }

    // Map stack
    uc_mem_map(_uc, STACK_START, STACK_SIZE, UC_PROT_READ | UC_PROT_WRITE);
    uc_reg_write(_uc, UC_X86_REG_RSP, &(uint64_t) { STACK_START + STACK_SIZE });

    // Map code
    uc_mem_map(_uc, CODE_START, CODE_SIZE, UC_PROT_ALL);
    uc_mem_write(_uc, CODE_START, code, code_len);

    // Setup MMIO
    uc_mmio_map(_uc, GCI_START, PAGE_SIZE, gci_read, NULL, gci_write, NULL);
    uc_mmio_map(_uc, OUTPUT_START, OUTPUT_SIZE, NULL, NULL, gci_write, NULL);  // Map output region

    *uc = _uc;

    return true;
}

int emu_launch(void *code, size_t code_len)
{
    uc_engine *uc = NULL;
    uc_err err;
    if (!emu_init(&uc, code, code_len)) {
        return 1;
    }

    free(code);

    err = uc_emu_start(uc, CODE_START, CODE_START + code_len, 0, 0);

    return 0;
}
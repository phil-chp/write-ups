#ifndef __GCI_H__
#define __GCI_H__

#include <stdlib.h>
#include <sys/types.h>

#include "unicorn/unicorn.h"

// Gift Control Interface

#define GCI_START         0xcafe0000

#define GCI_CTRL_GIFT     0x00
#define GCI_CTRL_GIFT_MAX 0x08
#define GCI_CTRL_GIFT_IDX 0x10
#define GCI_CTRL_CMD      0x18

#define GCI_CMD_INIT      0x1337
#define GCI_CMD_ADD_GIFT  0x1338
#define GCI_CMD_GET_GIFT  0x1339
#define GCI_CMD_EDIT_GIFT 0x1340
#define GCI_CMD_SUBMIT    0x1341

#define OUTPUT_START      0xbabe0000
#define OUTPUT_SIZE       0x1000

typedef uint32_t gift;

typedef struct gci_context
{
    size_t gift_count;
    size_t gift_max;
    size_t gift_idx;
    gift *gift_list;
    gift gift_to_get;
    gift gift_to_add;
} gci_context;

uint64_t gci_read(
    uc_engine *uc,
    uint64_t offset,
    unsigned size,
    void *user_data
);

void gci_write(
    uc_engine *uc,
    uint64_t offset,
    unsigned size,
    uint64_t value,
    void *user_data
);

void gci_print_list(void);

#endif

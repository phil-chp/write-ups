#include <gci.h>
#include <unicorn/unicorn.h>
#include <stdio.h>

static gci_context gci_ctx;

// static void gci_handle_command(uc_engine *uc, uint64_t command)
// {
//     switch (command) {
//     case GCI_CMD_INIT:
//         if (gci_ctx.gift_list)
//             free(gci_ctx.gift_list);

//         gci_ctx.gift_list = malloc(gci_ctx.gift_max * sizeof(gift));
//         gci_ctx.gift_count = 0;
//         break;
//     case GCI_CMD_ADD_GIFT:
//         if (gci_ctx.gift_list && gci_ctx.gift_count < gci_ctx.gift_max) {
//             gci_ctx.gift_list[gci_ctx.gift_count++] = gci_ctx.gift_to_add;
//         }
//         break;
//     case GCI_CMD_GET_GIFT:
//         if (gci_ctx.gift_list && gci_ctx.gift_idx < gci_ctx.gift_max) {
//             gci_ctx.gift_to_get = gci_ctx.gift_list[gci_ctx.gift_idx];
//         }
//         break;
//     case GCI_CMD_EDIT_GIFT:
//         if (gci_ctx.gift_list && gci_ctx.gift_idx < gci_ctx.gift_max) {
//             gci_ctx.gift_list[gci_ctx.gift_idx] = gci_ctx.gift_to_add;
//         }
//         break;
//     case GCI_CMD_SUBMIT:
//         if (gci_ctx.gift_list == NULL || gci_ctx.gift_count == 0) 
//             break;

//         printf("Your gift list has been submitted to santa !\n");

//         printf("Gifts:\n");
//         for (size_t i = 0; i < gci_ctx.gift_count; i++) {
//             printf("#%lu: %#x\n", i, gci_ctx.gift_list[i]);
//         }

//         uc_emu_stop(uc);
//         break;
//     default:
//         break;
//     }
// }

static void gci_handle_command(uc_engine *uc, uint64_t command)
{
    printf("Handling command: %#lx\n", command);  // Debug output

    switch (command) {
    case GCI_CMD_INIT:
        if (gci_ctx.gift_list)
            free(gci_ctx.gift_list);

        gci_ctx.gift_list = malloc(gci_ctx.gift_max * sizeof(gift));
        gci_ctx.gift_count = 0;
        printf("GCI initialized with max gifts: %lu\n", gci_ctx.gift_max);  // Debug output
        break;
    case GCI_CMD_ADD_GIFT:
        if (gci_ctx.gift_list && gci_ctx.gift_count < gci_ctx.gift_max) {
            gci_ctx.gift_list[gci_ctx.gift_count++] = gci_ctx.gift_to_add;
            printf("Added gift: %#x\n", gci_ctx.gift_to_add);  // Debug output
        }
        break;
    case GCI_CMD_GET_GIFT:
        if (gci_ctx.gift_list && gci_ctx.gift_idx < gci_ctx.gift_max) {
            gci_ctx.gift_to_get = gci_ctx.gift_list[gci_ctx.gift_idx];
            printf("Got gift: %#x\n", gci_ctx.gift_to_get);  // Debug output
        }
        break;
    case GCI_CMD_EDIT_GIFT:
        if (gci_ctx.gift_list && gci_ctx.gift_idx < gci_ctx.gift_max) {
            gci_ctx.gift_list[gci_ctx.gift_idx] = gci_ctx.gift_to_add;
            printf("Edited gift at index %lu: %#x\n", gci_ctx.gift_idx, gci_ctx.gift_to_add);  // Debug output
        }
        break;
    case GCI_CMD_SUBMIT:
        if (gci_ctx.gift_list == NULL || gci_ctx.gift_count == 0) 
            break;

        printf("Your gift list has been submitted to santa!\n");

        printf("Gifts:\n");
        for (size_t i = 0; i < gci_ctx.gift_count; i++) {
            printf("#%lu: %#x\n", i, gci_ctx.gift_list[i]);
        }

        uc_emu_stop(uc);
        break;
    default:
        printf("Unknown command: %#lx\n", command);  // Debug output
        break;
    }
}

uint64_t gci_read(uc_engine *uc, uint64_t offset, unsigned size, void *user_data)
{
    switch (offset) {
    case GCI_CTRL_GIFT:
        return gci_ctx.gift_to_get;
    case GCI_CTRL_GIFT_MAX:
        return gci_ctx.gift_max;
    case GCI_CTRL_GIFT_IDX:
        return gci_ctx.gift_idx;
    case GCI_CTRL_CMD:
    default:
        return 0;
    }
}

void gci_write(uc_engine *uc, uint64_t offset, unsigned size, uint64_t value, void *user_data)
{
    switch (offset) {
    case GCI_CTRL_GIFT:
        gci_ctx.gift_to_add = value;
        break;
    case GCI_CTRL_GIFT_MAX:
        gci_ctx.gift_max = value;
        break;
    case GCI_CTRL_GIFT_IDX:
        gci_ctx.gift_idx = value;
        break;
    case GCI_CTRL_CMD:
        gci_handle_command(uc, value);
        break;
    case OUTPUT_START:
        printf("%c", (char)value);  // Capture output
        break;
    default:
        break;
    }
}
%define GCI_START         0xcafe0000

%define GCI_CTRL_GIFT     0x00
%define GCI_CTRL_GIFT_MAX 0x08
%define GCI_CTRL_GIFT_IDX 0x10
%define GCI_CTRL_CMD      0x18

%define GCI_CMD_INIT      0x1337
%define GCI_CMD_ADD_GIFT  0x1338
%define GCI_CMD_GET_GIFT  0x1339
%define GCI_CMD_EDIT_GIFT 0x1340
%define GCI_CMD_SUBMIT    0x1341

%define OUTPUT_START      0xbabe0000
%define OUTPUT_SIZE       0x1000
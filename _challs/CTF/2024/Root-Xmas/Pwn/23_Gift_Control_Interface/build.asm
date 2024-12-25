BITS 64
%include "gci.inc"

section .data
    gift_value dd 0xdeadbeef  ; Example gift value
    message db 'Hello, World!', 0

section .text
    global _start

_start:
    ; Initialize GCI
    mov rax, GCI_CMD_INIT
    mov rdi, GCI_CTRL_CMD
    mov rsi, 8
    mov rdx, rax
    syscall

    ; Set gift_max to 1
    mov rax, 1
    mov rdi, GCI_CTRL_GIFT_MAX
    mov rsi, 8
    mov rdx, rax
    syscall

    ; Add a gift
    mov rax, [gift_value]
    mov rdi, GCI_CTRL_GIFT
    mov rsi, 8
    mov rdx, rax
    syscall

    mov rax, GCI_CMD_ADD_GIFT
    mov rdi, GCI_CTRL_CMD
    mov rsi, 8
    mov rdx, rax
    syscall

    ; Submit the gift list
    mov rax, GCI_CMD_SUBMIT
    mov rdi, GCI_CTRL_CMD
    mov rsi, 8
    mov rdx, rax
    syscall

    ; Output message
    mov rsi, message
output_loop:
    lodsb
    test al, al
    jz output_done
    mov rdi, OUTPUT_START
    movzx rax, al
    syscall
    jmp output_loop
output_done:

    ; Exit
    mov rax, 60
    xor rdi, rdi
    syscall
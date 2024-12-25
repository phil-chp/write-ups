import sys
import os

def bin_to_hex(file_path):
    with open(file_path, 'rb') as f:
        buffer = f.read().hex()
    return bytearray.fromhex(buffer).decode('latin1')

def get_shellcode(asm_payload):
    os.system(f'nasm -f bin -o build.bin {asm_payload}')
    return bin_to_hex('build.bin')


def main():
    if len(sys.argv) != 3:
        print(f"Usage: {sys.argv[0]} <code_size> <code_asm>") #<bin_to_attack> 
        sys.exit(1)

    # bin_to_attack = sys.argv[1]
    code_size = sys.argv[1]
    code_asm = sys.argv[2]

    shellcode = get_shellcode(code_asm)

    # print(f"{shellcode}", end='')
    with open('payload.bin', 'w') as f:
        f.write(shellcode)


if __name__ == '__main__':
    main()
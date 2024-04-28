# Harry Sauers
# rc4.py
# demo of RC4 encryption algorithm
from sys import argv

def key_scheduling(key):
    sched = [i for i in range(0, 256)]

    i = 0
    for j in range(0, 256):
        i = (i + sched[j] + key[j % len(key)]) % 256

        tmp = sched[j]
        sched[j] = sched[i]
        sched[i] = tmp

    return sched


def stream_generation(sched):
    stream = []
    i = 0
    j = 0
    while True:
        i = (1 + i) % 256
        j = (sched[i] + j) % 256

        tmp = sched[j]
        sched[j] = sched[i]
        sched[i] = tmp

        yield sched[(sched[i] + sched[j]) % 256]


def encrypt(text, key):
    text = [ord(char) for char in text]
    key = [ord(char) for char in key]

    sched = key_scheduling(key)
    key_stream = stream_generation(sched)

    ciphertext = ''
    for char in text:
        enc = str(hex(char ^ next(key_stream))).upper()
        ciphertext += (enc)

    return ciphertext


def decrypt(ciphertext, key):
    ciphertext = ciphertext.split('0X')[1:]
    ciphertext = [int('0x' + c.lower(), 0) for c in ciphertext]
    key = [ord(char) for char in key]

    sched = key_scheduling(key)
    key_stream = stream_generation(sched)

    plaintext = ''
    for char in ciphertext:
        dec = str(chr(char ^ next(key_stream)))
        plaintext += dec

    return plaintext

if __name__ == '__main__':
    # ed = input('Enter E for Encrypt, or D for Decrypt: ').upper()
    # if ed == 'E':
    #     plaintext = input('Enter your plaintext: ')
    #     key = input('Enter your secret key: ')
    #     result = encrypt(plaintext, key)
    #     print('Result: ')
    #     print(result)
    # elif ed == 'D':
    # ciphertext = input('Enter your ciphertext: ')
    ciphertext = "0X570X6A0XC50X5F0XDE0XC60X2D0XED0X7A0XF0XD90X850XBD0XC40X2A0XD60XE00X6E0X8A0XCC0X660XDB0XDE0X570X430XD20XB10X700XAC0X200X4A0XE30X4E0X620X5B0XBD0XF60X140XDD0X900XD50X2E0XF00XF90X260X6D0X490X830XAB0X310XAA0X3A0XD10X2A0X490X850X5E0X900XCE0X530X3B0XF40X480XAD0X640X540X550X330X530XF70X6A0XB80XE7"
    # key = input('Enter your secret key: ')
    key = 1708172370

    while True:
        result = decrypt(ciphertext, str(key))
        # if key > 1708173370:
        #     break
        if 'secret' in result:
            print(result)
            break
        key += 1
    # print('Result: ')
    # print(result)
    # else:
    #     print('Error in input - try again.')

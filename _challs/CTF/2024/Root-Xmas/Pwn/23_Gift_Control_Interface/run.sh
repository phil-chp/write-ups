#!/bin/bash

if [ $# -ne 3 ]; then
    echo "Usage: $0 <file> <output> <string>"
    exit 1
fi

nasm -f bin -o build.bin $1

rm -f $2

echo -en "$3\n" > $2
dd if=build.bin of=$2 conv=notrunc oflag=append bs=1
echo -en "\n" | dd of=$2 conv=notrunc oflag=append bs=1

echo
xxd $2
echo

printf "$3" | ./gci

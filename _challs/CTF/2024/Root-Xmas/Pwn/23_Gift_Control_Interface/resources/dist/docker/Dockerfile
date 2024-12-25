FROM ubuntu:24.04

RUN apt-get update && apt-get install -y \
    socat

# Command used to compile the Unicorn library

# RUN git clone https://github.com/unicorn-engine/unicorn /tmp/unicorn \
#     && cd /tmp/unicorn \
#     && git checkout d568885d64c89db5b9a722f0c1bef05aa92f84ca \
#     && mkdir build && cd build \
#     && cmake .. -DCMAKE_BUILD_TYPE=Release -DUNICORN_ARCH=x86 \
#     && make -j4 && make install\
#     && cd / \
#     && rm -rf /tmp/unicorn

# Precompiled version of Unicorn
COPY src/lib/libunicorn.so* /usr/lib/
COPY src/bin/gci /home/user/

RUN useradd -m -s /bin/bash user

USER user

COPY docker/flag.txt /home/user/

CMD cd /home/user && socat TCP-LISTEN:1337,reuseaddr,fork EXEC:/home/user/gci

CC=gcc
OBJ_DIR=obj
BIN_DIR=bin
SOURCES=main.c emu.c gci.c
OBJECTS=$(patsubst %.c,$(OBJ_DIR)/%.o,$(SOURCES))
BIN=gci
LDFLAGS=-lunicorn
CFLAGS=-Iinclude/ -g3

all: $(BIN)

$(OBJ_DIR)/$(notdir %.o): %.c
	$(CC) $(CFLAGS) -c -o $@ $<

$(BIN): $(OBJECTS)
	$(CC) -o bin/$@ $^ $(LDFLAGS)
	# patchelf --replace-needed libunicorn.so.2 /path/to/libunicorn.so.2 $(BIN_DIR)/$(BIN)

.PHONY: clean
clean:
	rm -f $(OBJ_DIR)/*.o $(BIN_DIR)/*

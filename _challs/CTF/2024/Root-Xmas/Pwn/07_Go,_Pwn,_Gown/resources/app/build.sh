#!/bin/bash -x

go fmt main.go
CGO_ENABLED=1 CGO_CFLAGS="-Wstringop-overflow=0 -fno-stack-protector -D_FORTIFY_SOURCE=0" go build -ldflags "-linkmode external -extldflags '-no-pie'" -o gown main.go

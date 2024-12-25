package main

import (
	"C"
	"fmt"
	"log"
	"net/http"
	"os"
	"strings"
	"unsafe"
)

/*
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <unistd.h>

void unsafeFunction(char *gown) {
    char buffer[64];
    memcpy(buffer, gown, 128); // UTF8 AMIRIGHT ?!
    printf("Received: %s\n", buffer);
}

void laluBackdoor() {
    char *bash_path = "/bin/bash";
    extern char **environ;
    execle(bash_path, bash_path, "-c", "echo $(${GOWN})", NULL, environ);
}
*/
import "C"

func handleRequest(w http.ResponseWriter, r *http.Request) {
	log.Println("Calling handleRequest")
	defer func() {
		log.Println(r.URL.Path)
		gown := r.URL.Query().Get("gown")
		if gown == "" {
			http.Error(w, "Gown parameter is missing", http.StatusBadRequest)
			return
		}

		cGown := C.CString(gown)
		if i := strings.IndexByte(gown, '\x00'); i != -1 {
			gown = gown[:i]
		}
		os.Setenv("GOWN", string(gown))
		fmt.Println("Getenv(GOWN) = ", os.Getenv("GOWN"))
		defer C.free(unsafe.Pointer(cGown))

		C.unsafeFunction(cGown)
		// C.laluBackdoor()
		w.Write([]byte("Request handled\n"))
	}()
}
func handleOK(w http.ResponseWriter, r *http.Request) {
	log.Println("Calling handleOK")
	defer func() {
		log.Println(r.URL.Path)
		w.Write([]byte("OK Annie?!\n"))
	}()
}

func main() {
	http.HandleFunc("/", handleRequest)
	http.HandleFunc("/areyou", handleOK)
	http.ListenAndServe(":3000", nil)
}

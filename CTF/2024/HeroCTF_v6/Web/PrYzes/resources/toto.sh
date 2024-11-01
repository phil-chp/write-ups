#!/bin/bash
docker rm -f pryzes
sudo docker build --no-cache --tag=pryzes .
sudo docker run -p 8081:5000 --rm --name=pryzes -it pryzes

FROM golang:1.20-buster
RUN apt-get update && apt-get install -y supervisor
ADD ./app /app
WORKDIR /app
RUN bash -x build.sh
RUN useradd -m -s /bin/bash app
EXPOSE 3000
WORKDIR /tmp
CMD ["supervisord", "-c", "/app/supervisord.conf"]
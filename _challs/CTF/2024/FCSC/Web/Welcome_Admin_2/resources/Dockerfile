FROM alpine:3.19
WORKDIR /app
RUN apk add --update --no-cache                            \
        python3~=3                                         \
        python3-dev~=3                                     \
        musl-dev~=1.2                                      \
        postgresql16-dev~=16                               \
        py3-pip~=23                                     && \
    pip install --no-cache-dir --break-system-packages     \
        flask==3.0.2                                       \
        gunicorn                                           \
        psycopg2==2.9.9
COPY ./src/ /app/
EXPOSE 8000
ENV FIRST_FLAG=FCSC{flag_placeholder}
ENV SECOND_FLAG=FCSC{flag_placeholder}
# CMD ["python3", "/app/welcomeadmin.py"]
CMD ["gunicorn", "-w", "4", "-b", ":8000", "'welcomeadmin:app'", "--timeout", "90"]

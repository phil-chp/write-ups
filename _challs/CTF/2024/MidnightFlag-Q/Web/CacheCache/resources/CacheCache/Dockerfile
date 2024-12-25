FROM alpine:3.19
WORKDIR /usr/app
COPY ./src/requirements.txt .
RUN apk add --update --no-cache                           \
    python3~=3.11                                         \
    py3-pip~=23                                           \
    chromium-chromedriver~=124                         && \
    pip install --no-cache-dir --break-system-packages    \
        -r requirements.txt                            && \
    rm requirements.txt
USER guest
ENV PYTHONUNBUFFERED=1
COPY ./src/ .
ENV FLAG="MCTF{fake_flag}"
CMD ["/usr/bin/python3", "-u", "/usr/app/app.py"]

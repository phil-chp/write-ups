FROM python:3.12-alpine


WORKDIR /app

COPY requirements.txt /app

RUN --mount=type=cache,target=/root/.cache/pip \
    pip3 install -r requirements.txt

COPY . /app

EXPOSE 8080

CMD ["flask", "--app", "app", "--debug", "run", "--host", "0.0.0.0", "--port", "8080"]

FROM python:alpine

RUN apk update && apk add bash firefox

RUN pip install debugpy

WORKDIR /code

COPY ./app/requirements.txt /code/app/
COPY ./admin-simulation/requirements.txt /code/admin-simulation/

RUN --mount=type=cache,target=/root/.cache/pip \
    pip3 install -r app/requirements.txt -r admin-simulation/requirements.txt

COPY . /code

# Make port 5000 available to the world outside this container
EXPOSE 8080

ENV FLAG=REDACTED

CMD ["bash", "wrapper-entrypoint.sh"]

# Particle Ploy

## Production

    docker build -t particle-ploy . && docker run --rm -p 127.0.0.1:8080:8080 particle-ploy

## Development

### Webserver

        cd app
        python -m pip install -r requirements.txt
        python -m flask --app app --debug run

OR

        docker compose up --build

### Admin checker

        cd admin-simulation
        python -m pip install -r requirements.txt
        python main.py

#!/usr/bin/env bash

set -x

python3 ./app/initialize_db.py # CHATGPT: This was added for local use
mv ./app.sqlite3 ./app/app.sqlite3 # CHATGPT: This was added for local use

# Start the first process
cd app || exit
waitress-serve --call app:create_app &
# gunicorn -w 4 'app:create_app()' &

# Start the second process
cd ../admin-simulation || exit
python -m debugpy --listen 0.0.0.0:5678 --wait-for-client main.py &

# Wait for any process to exit
wait -n


# Exit with status of process that exited first
exit $?
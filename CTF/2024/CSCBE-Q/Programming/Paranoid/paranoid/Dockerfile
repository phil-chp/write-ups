# Use an official Python runtime as a parent image
FROM python:3.11-alpine

RUN pip install debugpy

# Set the working directory to /app
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY src /app

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 80
EXPOSE 5678

# Define environment variable
ENV FLASK_APP=flask_server.py

# Run app.py when the container launches
CMD ["flask", "run", "--host=0.0.0.0", "--port=80"]

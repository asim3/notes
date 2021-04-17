## Deploying with Docker
[docs](https://devcenter.heroku.com/articles/container-registry-and-runtime)


## login
```bash
# run docker as user
sudo usermod -aG docker $USER
# logout then login

heroku login

# log in to Heroku Container Registry
heroku container:login
```


## copy `hello world `
```bash
heroku create asim3-docker

git clone https://github.com/heroku/alpinehelloworld.git && cd alpinehelloworld
|
├── Dockerfile
└── webapp
    ├── app.py
    ├── requirements.txt
    ├── tests.py
    └── wsgi.py
```


## build Dockerfile
```bash
# Building Dockerfile, then push to Heroku Container Registry
heroku container:push web -a asim3-docker

heroku container:release web -a asim3-docker
```


## open
```bash
curl https://asim3-docker.herokuapp.com/
# Hello world!
```


## Dockerfile
```dockerfile
#Grab the latest alpine image
FROM alpine:latest

# Install python and pip
RUN apk add --no-cache --update python3 py3-pip bash
ADD ./webapp/requirements.txt /tmp/requirements.txt

# Install dependencies
RUN pip3 install --no-cache-dir -q -r /tmp/requirements.txt

# Add our code
ADD ./webapp /opt/webapp/
WORKDIR /opt/webapp

# Expose is NOT supported by Heroku
# EXPOSE 5000 		

# Run the image as a non-root user
RUN adduser -D myuser
USER myuser

# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku			
CMD gunicorn --bind 0.0.0.0:$PORT wsgi 
```

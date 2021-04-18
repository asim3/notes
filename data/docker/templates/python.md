## python
```bash
git clone https://github.com/heroku/alpinehelloworld.git && cd alpinehelloworld

sed -i -e 's/$PORT/5000/' Dockerfile 

docker image build -t asim3/python_test .

docker run -p 8000:5000 asim3/python_test

curl http://localhost:8000
# Hello world!
```


`cat Dockerfile`
```dockerfile
FROM alpine:latest

RUN apk add --no-cache --update python3 py3-pip bash

COPY ./webapp/requirements.txt /tmp/requirements.txt

RUN pip3 install --no-cache-dir -q -r /tmp/requirements.txt

COPY ./webapp /opt/webapp/

WORKDIR /opt/webapp

RUN adduser -D myuser

USER myuser

CMD gunicorn --workers 3 --bind 0.0.0.0:5000 wsgi 
```

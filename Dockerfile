FROM nginx:stable-alpine3.17-slim

RUN apk add bash

COPY . /usr/share/nginx/html

RUN cd /usr/share/nginx/html && ./scripts/update.sh

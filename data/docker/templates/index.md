## non root
`docker image build -t asim3/non_root_test - <<eof && docker run -it asim3/non_root_test`
```dockerfile
FROM alpine:latest

RUN apk add --no-cache --update bash

# Add new user: Don't assign a password
RUN adduser -D sami

# Run the image as a non-root user
USER sami

WORKDIR /tmp/

# Run the app.  CMD is required to run on Heroku
# $PORT is set by Heroku			
CMD /bin/bash
```

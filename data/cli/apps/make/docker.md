## Django

`nano makefile`
```makefile
SHELL=/bin/bash

main: version build shell


version:
	docker version


build:
	docker image build -t asim3/my_php_test:v1.0.2 .


push:
	docker push asim3/my_php_test:v1.0.2


shell:
	docker container run -it --entrypoint=/bin/sh   alpine
```

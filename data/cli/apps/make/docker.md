## Docker
`nano makefile`
```makefile
SHELL=/bin/bash

DOCKER_IMAGE=asim3/my-project-name
DOCKER_TAG=latest

main: version build shell


version:
	docker version


build:
	docker image build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .


shell:
	docker container run -it --entrypoint=/bin/sh   ${DOCKER_IMAGE}:${DOCKER_TAG}


# make push DOCKER_TAG=v1.2.3
push: build
	docker push ${DOCKER_IMAGE}:${DOCKER_TAG}
```
`sed -i -e 's/    /\t/' ./makefile`

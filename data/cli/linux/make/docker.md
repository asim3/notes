## Docker
`nano makefile`
```makefile
SHELL=/bin/bash


DOCKER_USER?=asim3
DOCKER_IMAGE?=my-project-name
DOCKER_TAG?=latest


main: build shell


build:
	@ docker image build -t ${DOCKER_USER}/${DOCKER_IMAGE}:${DOCKER_TAG} .


build-shell: build
	@ docker container run -it --entrypoint=/bin/sh ${DOCKER_USER}/${DOCKER_IMAGE}:${DOCKER_TAG}


# make push DOCKER_TAG=v1.2.3
push: build
	@ docker push ${DOCKER_USER}/${DOCKER_IMAGE}:${DOCKER_TAG}


# make kube DEPLOY_NAME=my-deploy-name DOCKER_TAG=v1.2.3
kube:
	@ kubectl set image deploy/${DEPLOY_NAME} my-container=${DOCKER_USER}/${DOCKER_IMAGE}:${DOCKER_TAG}
```
`sed -i -e 's/    /\t/' ./makefile`

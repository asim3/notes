## Docker
`nano makefile`
```makefile
SHELL=/bin/bash


DOCKER_USER?=asim3
DOCKER_IMAGE?=my-project-name
DOCKER_TAG?=latest


main: version build shell


version:
	docker version


build:
	echo ${DOCKER_TAG}
	docker image build -t ${DOCKER_USER}/${DOCKER_IMAGE}:${DOCKER_TAG} .


shell:
	docker container run -it --entrypoint=/bin/sh ${DOCKER_USER}/${DOCKER_IMAGE}:${DOCKER_TAG}


# make push DOCKER_TAG=v1.2.3
push: build
	echo ${DOCKER_TAG}
	docker push ${DOCKER_USER}/${DOCKER_IMAGE}:${DOCKER_TAG}


# make kube DEPLOY_NAME=my-deploy-name DOCKER_TAG=v1.2.3
kube:
	echo ${DOCKER_TAG}
	kubectl set image deploy/${DEPLOY_NAME} my-container=${DOCKER_USER}/${DOCKER_IMAGE}:${DOCKER_TAG}
```
`sed -i -e 's/    /\t/' ./makefile`

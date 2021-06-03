## Docker
`nano makefile`
```makefile
SHELL=/bin/bash


clean:
	sudo docker-compose rm --stop -v --force
	sudo rm -rf data
	- docker image rm my-project-name_django-compose
	- docker network rm my-project-name_default


compose: clean
	sudo docker-compose up --build
```
`sed -i -e 's/    /\t/' ./makefile`

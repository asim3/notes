## Django

`nano makefile`
```makefile
SHELL=/bin/bash

ACTIVATE=source ./.venv/bin/activate &&

CD=${ACTIVATE} cd ./my-project-name &&


main: run


venv:
	if [ ! -d ./.venv ]; then python3 -m venv ./.venv; fi;


install: venv
	${ACTIVATE} pip3 install -r ./requirements.txt
	${CD} python3 manage.py makemigrations
	${CD} python3 manage.py migrate
	- ${CD} python3 manage.py collectstatic --noinput


# make test args=my_app
test:
	${CD} python3 manage.py test ${args};


# make new name=my_app
new:
	${CD} python3 manage.py startapp ${name};


user:
	${CD} python3 manage.py createsuperuser;


tra:
	${CD} if [ ! -d ./locale ]; then mkdir locale; fi;
	${CD} python3 manage.py makemessages -l ar
	${CD} python3 manage.py compilemessages


run:
	${CD} python3 manage.py runserver


shell:
	${CD} python3 manage.py shell
```
`sed -i -e 's/    /\t/' ./makefile`

## Django


```makefile
SHELL=/bin/bash

CD=cd my-project


venv:
	if [ ! -d ./venv ]; then 
		python3 -m venv ./venv
	fi;


activate: 
	source ./venv/bin/activate


install: venv activate
	pip3 install -r ./requirements.txt
	${CD} python3 manage.py makemigrations
	${CD} python3 manage.py migrate
	${CD} python3 manage.py collectstatic --noinput


test: activate
	${CD} python3 manage.py test $2;


run: activate
	${CD} python3 manage.py runserver


shell: activate
	${CD} python3 manage.py shell
```

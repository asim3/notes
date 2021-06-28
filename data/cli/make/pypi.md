## PyPI
`nano makefile`
```makefile
SHELL=/bin/bash

ACTIVATE=source ./.venv/bin/activate &&


py-build:
	${ACTIVATE} pip install --upgrade wheel setuptools
	${ACTIVATE} python setup.py bdist_wheel


py-install: py-clean
	python3 -m venv .t_venv
	. .t_venv/bin/activate && pip install --upgrade wheel setuptools
	. .t_venv/bin/activate && python3 setup.py bdist_wheel
	. .t_venv/bin/activate && pip install dist/$$(ls -rXA ./dist | head -n 1)
	ls -al .t_venv/lib/$$(ls .t_venv/lib/)/site-packages/
	ls -al .t_venv/lib/$$(ls .t_venv/lib/)/site-packages/kubehelm/
	ls -al .t_venv/lib64/$$(ls .t_venv/lib/)/site-packages/kubehelm/


py-test: py-install
	. .t_venv/bin/activate && kubehelm install whoami -n default -a test3
	. .t_venv/bin/activate && kubehelm update  whoami -n default -a test3
	. .t_venv/bin/activate && kubehelm list    whoami -n default -a test3
	. .t_venv/bin/activate && kubehelm delete  whoami -n default -a test3


py-clean:
	- rm -r ./.t_venv 
	- rm -r ./build 
	- rm -r ./dist 
	- rm -r ./kubehelm.egg-info 


py-push: py-build
	${ACTIVATE} pip install --upgrade twine
	${ACTIVATE} python3 -m twine check dist/*
	${ACTIVATE} python3 -m twine upload --non-interactive -u asim3 -p ${PYPI_TOKEN} dist/*


update-version:
	awk -F '.' '{ print $$1"."$$2"."$$3+1 "\"" }' kubehelm/__init__.py > kubehelm/temp.txt
	mv kubehelm/temp.txt kubehelm/__init__.py
```

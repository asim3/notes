## Test Coverage
[docs](https://coverage.readthedocs.io/en/stable/install.html)


## Installation
```bash
sudo apt-get install python3-dev gcc

pip install coverage

coverage --version
# Coverage.py, version 7.1.0 with C extension
```


## run
```bash
coverage run --source='.' manage.py test

coverage report

coverage html

coverage erase
```


### `.coveragerc`
```ini
[run]
omit =
    app_name/wsgi.py
    app_name/settings/production.py
    app_name/tests/data.py

[report]
exclude_lines =
    if settings.DEBUG:
```


## Git Ignore
```txt
htmlcov/
.coverage
.coverage.*
coverage.xml
*.cover
```

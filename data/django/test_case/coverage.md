## Test Coverage
[docs](https://coverage.readthedocs.io/en/stable/install.html)


## Installation
```bash
sudo apt-get install python3-dev gcc

pip install coverage

coverage --version
# Coverage.py, version 7.1.0 with C extension
# Documentation at https://coverage.readthedocs.io/en/7.1.0
```


## configuration
```ini
[coverage:run]
source = .
```


## Git Ignore
```txt
htmlcov/
.coverage
.coverage.*
coverage.xml
*.cover
```


## run
```bash
# Remove any coverage data from previous runs
coverage erase

# Run the full test suite
coverage run manage.py test

# Report on which files are covered
coverage report
```

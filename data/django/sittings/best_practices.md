## File structure
```text
project/
├── apps/
├── all_settings/
│   ├── __init__.py
│   ├── django.py
│   ├── project.py
│   └── third_party.py
└── manage.py
```


`project/settings.py`
```text
from all_settings import *
```


`all_settings/__init__.py`
```text
# All Django related settings
from .django import *

# Celery, Django REST Framework & other 3rd parties
from .third_party import *

# You custom settings
from .project import *
```


`all_settings/django.py`
```text
from django.conf import settings

DEBUG = True

INSTALLED_APPS = [
    *settings.INSTALLED_APPS,
    'users',
]
```


`all_settings/project.py`
```text
MY_TIMEOUT = 30
```


`all_settings/third_party.py`
```text
REST_FRAMEWORK = {
    # ...
}
```

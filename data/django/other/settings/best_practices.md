## best practices
```bash
cd __project__
mkdir settings    
mv settings.py settings/base.py

echo 'from .development import *' >  ./settings/__init__.py

echo 'from .base import *' > ./settings/test.py
echo 'from .base import *' > ./settings/development.py
echo 'from .base import *' > ./settings/production.py
```


`settings/base.py`
```py
import os
from django.core.management.utils import get_random_secret_key

from .rest_framework import *
from .aws import *
from .other import *

# go up one directory
BASE_DIR = Path(__file__).resolve().parent.parent.parent


SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', get_random_secret_key())

DEBUG = os.getenv('DJANGO_DEBUG', False) in (True, 'True')
```

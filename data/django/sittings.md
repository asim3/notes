## import settings
```python
from django.conf import settings

settings.DEBUG
settings.STATIC_URL
settings.NEWS_API_KEY
```


## settings
```python
STATIC_URL = '/static/'

STATIC_ROOT = os.path.join(BASE_DIR, "static_collect_folder")

STATICFILES_DIRS = (os.path.join(BASE_DIR , 'static_root_folder'), )

MEDIA_URL = '/media/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media_root_folder')
```


```python
LOGIN_REDIRECT_URL = '/home/'

CRISPY_TEMPLATE_PACK = 'bootstrap4'

TIME_ZONE = 'Asia/Riyadh'
```



## LANGUAGES
```python
LANGUAGE_CODE = 'en-us'
LANGUAGE_CODE = 'ar-sa'
LANGUAGES = [('ar',)]
TIME_ZONE = 'Asia/Riyadh'
```


## TIME
```python
DATE_FORMAT = 'Y / m / d'
DATETIME_FORMAT = 'Y / m / d P'
```


## Heroku
```python
import django_heroku
django_heroku.settings(locals())
```


## local_settings
```python
try:
    from .local_settings import *
except:
    print("\nlocal_settings not found!\n")
```


## local_settings.py
```python
DEBUG = True

ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

STATIC_URL = '/static/'

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

DEFAULT_FILE_STORAGE = 'django.core.files.storage.FileSystemStorage'
```


## environment variables
```python
import os

os.environ.get('HOME')
```

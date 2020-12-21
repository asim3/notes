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

STATIC_ROOT = os.path.join(BASE_DIR, "static_root_folder")

STATICFILES_DIRS = (os.path.join(BASE_DIR , 'copy_this_dir_to_root_folder'), )

MEDIA_URL = '/media/'

MEDIA_ROOT = os.path.join(BASE_DIR, 'media_root_folder')
```

## Login Logout
```python
LOGIN_URL = reverse_lazy('login')

LOGIN_REDIRECT_URL = reverse_lazy('pledge')

LOGOUT_REDIRECT_URL = reverse_lazy('home')
```



## LANGUAGES
```python
from django.utils.translation import gettext_lazy as _

LANGUAGE_CODE = 'ar-sa'

LANGUAGE_CODE = 'en-us'

LANGUAGES = [
    ('ar', _('Arabic')),
    ('en', _('English')),
]

LOCALE_PATHS = (
    os.path.join(BASE_DIR, 'locale'),
)
```


## TIME
```python
TIME_ZONE = 'Asia/Riyadh'

DATE_FORMAT = 'Y / m / d'

DATETIME_FORMAT = 'Y / m / d P'
```


## Heroku
```python
import django_heroku


CRISPY_TEMPLATE_PACK = 'bootstrap4'

django_heroku.settings(locals())
```


## local_settings
```python
try:
    from .local_settings import *
except:
    print("local_settings not found!")
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
from django.core.management.utils import get_random_secret_key


os.environ.get('HOME')

os.getenv('HOME', 'my home')

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', get_random_secret_key())

DEBUG = os.getenv('DJANGO_DEBUG', False) in (True, 'True')
```

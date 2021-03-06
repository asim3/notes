## import settings
```python
from django.conf import settings

settings.DEBUG
settings.STATIC_URL
settings.NEWS_API_KEY
```


## settings
> when you run `collectstatic`, django will 
> copy all files in `STATICFILES_DIRS` to `STATIC_ROOT`
```python
STATIC_URL = '/static/'

STATIC_ROOT = BASE_DIR / 'static'

STATICFILES_DIRS = [ BASE_DIR / 'static_resources' ]
STATICFILES_DIRS = [ BASE_DIR / "copy_all_files_to_STATIC_ROOT" ]

MEDIA_URL = '/media/'

MEDIA_ROOT = [ BASE_DIR / 'media' ]
```


## Login Logout
```python
LOGIN_URL = reverse_lazy('login')

LOGIN_REDIRECT_URL = reverse_lazy('pledge')

LOGOUT_REDIRECT_URL = reverse_lazy('home')
```


## LANGUAGES
```python
LANGUAGE_CODE = 'ar-sa'

LANGUAGE_CODE = 'en-us'

LANGUAGES = [
    ('ar', 'العربية'),
    ('en', 'English'),
]

LOCALE_PATHS = (
    ( BASE_DIR / 'locale' ),
)
```


## TIME
```python
TIME_ZONE = 'Asia/Riyadh'

DATE_FORMAT = 'Y / m / d'

DATETIME_FORMAT = 'Y / m / d P'
```


## database
```py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'my_database',
        'USER': 'postgres',
        'PASSWORD': 'topsecret',
        'HOST': '127.0.0.1',
        'PORT': '8001',
    }
}
```


## environment variables
```python
import os


os.environ.get('HOME')

os.getenv('HOME', 'my home')
```


## Heroku
```python
import django_heroku


django_heroku.settings(locals())
```

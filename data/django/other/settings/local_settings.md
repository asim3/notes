## local_settings
```py
try:
    from .local_settings import *
except:
    print("local_settings not found!")
```


`nano local_settings.py`
```py
DEBUG = True

ALLOWED_HOSTS = ['127.0.0.1', 'localhost']

STATIC_URL = '/static/'

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

DEFAULT_FILE_STORAGE = 'django.core.files.storage.FileSystemStorage'
```

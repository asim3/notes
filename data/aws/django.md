..sub_title..
Installation

```text
pip install boto3
pip install django-storages
```

..text..
settings.py

```python
INSTALLED_APPS = [
  # ...
  'storages',
]
```



..sub_title..
public and private

..text..
storage_backends.py
```python
from storages.backends.s3boto3 import S3Boto3Storage


class PublicMediaStorage(S3Boto3Storage):
  location = 'media/public'
  file_overwrite = False


class FontMediaStorage(S3Boto3Storage):
  location = 'media/font'
  file_overwrite = True


class PrivateMediaStorage(S3Boto3Storage):
  location = 'media/private'
  default_acl = 'private'
  file_overwrite = False
  custom_domain = False
  signature_version = 's3v4'
```

..text..
settings.py
```python
# AWS Storage
AWS_ACCESS_KEY_ID = os.getenv('AWS_ACCESS_KEY_ID')
AWS_SECRET_ACCESS_KEY = os.getenv('AWS_SECRET_ACCESS_KEY')
AWS_S3_OBJECT_PARAMETERS = {'CacheControl': 'max-age=86400',}
AWS_DEFAULT_ACL = 'public-read'

AWS_LOCATION = 'static'
AWS_STORAGE_BUCKET_NAME = 'test2-brandat'
AWS_S3_REGION_NAME = 'eu-central-1'

AWS_S3_CUSTOM_DOMAIN = '%s.s3.%s.amazonaws.com' % (AWS_STORAGE_BUCKET_NAME, AWS_S3_REGION_NAME)
STATIC_URL = "https://%s/%s/" % (AWS_S3_CUSTOM_DOMAIN, AWS_LOCATION)

STATICFILES_STORAGE = 'storages.backends.s3boto3.S3Boto3Storage'
DEFAULT_FILE_STORAGE = 'brandat_ux.storage_backends.PublicMediaStorage'
# end: AWS Storage

```


..text..
models.py
```python
from mysite.storage_backends import PrivateMediaStorage

class PrivateDocument(models.Model):
  upload = models.FileField(storage=PrivateMediaStorage())
```

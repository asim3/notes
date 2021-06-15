## Simple JWT
[docs](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)

## install
```python
pip install djangorestframework_simplejwt
```


## settings
```py
REST_FRAMEWORK = {
    # ...
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework_simplejwt.authentication.JWTAuthentication',
    )
}
```

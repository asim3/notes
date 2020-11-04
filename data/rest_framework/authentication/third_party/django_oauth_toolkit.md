## Django OAuth Toolkit
[docs](https://django-oauth-toolkit.readthedocs.io/en/latest/rest-framework/getting_started.html)


## install
```txt
pip install django-oauth-toolkit
```


## settings
```py
INSTALLED_APPS = [
    # ...
    'oauth2_provider',
]


REST_FRAMEWORK = {
    # ...
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'oauth2_provider.contrib.rest_framework.OAuth2Authentication',
    ]
}
```

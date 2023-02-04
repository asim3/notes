[Django OAuth docs](https://django-oauth-toolkit.readthedocs.io/en/latest/rest-framework/getting_started.html)


## install
```bash
pip install django-oauth-toolkit
```


## settings
> Make sure to run `manage.py migrate` after changing your settings.
```py
INSTALLED_APPS = [
    # ...
    'rest_framework',
    'oauth2_provider',
]

REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': (
        # ...
        'oauth2_provider.contrib.rest_framework.OAuth2Authentication',
    ),
}
```

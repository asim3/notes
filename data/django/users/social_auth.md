# Social Auth
[all auth](https://django-allauth.readthedocs.io/en/latest/installation.html)


## setup
```bash
python3 -m venv .venv \
  && source ./.venv/bin/activate \
  && pip install django gunicorn \
  && django-admin startproject my_project


# add allauth
pip install django-allauth
```

## settings
`nano ./my_project/my_project/settings.py`
```py
INSTALLED_APPS = [
    # ...
    'django.contrib.auth',
    'django.contrib.messages',
    'django.contrib.sites',

    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.google',
]
```


`nano ./my_project/my_project/settings.py`
```py
AUTHENTICATION_BACKENDS = [
    # ...
    # Needed to login by username in Django admin, regardless of `allauth`
    'django.contrib.auth.backends.ModelBackend',

    # `allauth` specific authentication methods, such as login by e-mail
    'allauth.account.auth_backends.AuthenticationBackend',
    ...
]


SITE_ID = 1
```


## URLs
`nano ./my_project/my_project/urls.py`
```py
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
]
```


## migrate
```bash
cd ./my_project/
./manage.py migrate

./manage.py runserver


# django normal login
http://localhost:8000/accounts/login/

# django normal signup
http://localhost:8000/accounts/signup/

# Google login
http://localhost:8000/accounts/google/login/
```


## config social application
```bash
./manage.py createsuperuser
./manage.py runserver


# Home › Social Accounts › Social applications 
http://localhost:8000/admin/socialaccount/socialapp/

# Add social application
Provider: Google
Name: My Demo Google
Client id: 123
Secret key: 123
Key: 
Sites: example.com
```

[Create a Google Cloud project](https://console.cloud.google.com/)

### IAM & Admin > Create a Project

- Project name: My Project 81866
- Location: No organization

### APIs & Services > Library

- search: gmail api 

- ENABLE: Gmail API

### APIs & Services > Credentials

- CREATE CREDENTIALS > OAuth client ID

Name: My web client
URIs: http://localhost:8000

redirect URIs: http://localhost:8000/accounts/google/login/callback/

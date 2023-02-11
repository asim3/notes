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


## tests
```py
from user.tests import BaseTestCase
from django.contrib.auth.models import User
from django.urls import reverse
from allauth.socialaccount.tests import OAuth2TestsMixin
from allauth.socialaccount.providers.google.provider import GoogleProvider
from allauth.socialaccount.providers.apple.client import jwt_encode
from datetime import datetime, timedelta
from rest_framework.status import HTTP_302_FOUND

import json


class UserGoogleTestCase(OAuth2TestsMixin, BaseTestCase):
    provider_id = GoogleProvider.id

    def setUp(self):
        super().setUp()
        self.email = "success_google@signup.com"
        self.identity_overwrites = {}

    def get_google_id_token_payload(self):
        now = datetime.utcnow()
        client_id = "app123id"  # Matches `setup_app`
        payload = {
            "iss": "https://accounts.google.com",
            "azp": client_id,
            "aud": client_id,
            "sub": "108204268033311374519",
            "hd": "asimt.sa",
            "email": self.email,
            "email_verified": True,
            "at_hash": "HK6E_P6Dh8Y93mRNtsDB1Q",
            "name": "My_name M. My_family",
            "picture": "https://lh5.googleusercontent.com/photo.jpg",
            "given_name": "My_name",
            "family_name": "My_family",
            "locale": "en",
            "iat": now,
            "exp": now + timedelta(hours=1),
        }
        payload.update(self.identity_overwrites)
        return payload

    def get_login_response_json(self, with_refresh_token=True):
        data = {
            "access_token": "testac",
            "expires_in": 3600,
            "scope": "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile openid",
            "token_type": "Bearer",
            "id_token": jwt_encode(self.get_google_id_token_payload(), "secret"),
        }
        return json.dumps(data)

    def test_google_success_signup(self):
        self.assertEqual(User.objects.count(), 0)
        response = self.login(resp_mock=None)
        self.assertEqual(response.status_code, HTTP_302_FOUND)
        self.assertEqual(response.url, reverse('user-info'))
        self.assertEqual(User.objects.count(), 1)
        new_user = User.objects.first()
        self.assertEqual(new_user.email, "success_google@signup.com")
        self.assertEqual(new_user.username, "my_name")
        self.assertEqual(new_user.first_name, "My_name")
        self.assertEqual(new_user.last_name, "My_family")
```

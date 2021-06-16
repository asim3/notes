## Authentication
[docs](https://www.django-rest-framework.org/api-guide/authentication/)
[GitHub](https://github.com/encode/django-rest-framework/blob/master/rest_framework/authentication.py)

[Django OAuth docs](https://django-oauth-toolkit.readthedocs.io/en/latest/rest-framework/getting_started.html)

## install
```bash
# Django OAuth Toolkit
pip install django-oauth-toolkit
```


## settings
> Make sure to run `manage.py migrate` after changing your settings.
```py
INSTALLED_APPS = [
    # ...
    'rest_framework',
    'rest_framework.authtoken',

    # Django OAuth Toolkit
    'oauth2_provider',

]

REST_FRAMEWORK = {
    # ...
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'rest_framework.authentication.SessionAuthentication',
        'rest_framework.authentication.TokenAuthentication',
        'rest_framework.authentication.BasicAuthentication',
        
        # Django OAuth Toolkit
        'oauth2_provider.contrib.rest_framework.OAuth2Authentication',
    ),
    'DEFAULT_PERMISSION_CLASSES': (
        'rest_framework.permissions.AllowAny',
        'rest_framework.permissions.IsAuthenticated',
        'rest_framework.permissions.IsAuthenticatedOrReadOnly',
        'rest_framework.permissions.IsAdminUser',
        'rest_framework.permissions.DjangoModelPermissions',
        'rest_framework.permissions.DjangoObjectPermissions',
    ),
}
```


## BasicAuthentication
generally only appropriate for testing.

## SessionAuthentication
appropriate for AJAX clients that are running in the same 
session context as your website.

## TokenAuthentication
appropriate for client-server setups, 
such as native desktop and mobile clients.

## RemoteUserAuthentication
allows you to delegate authentication to your web server, 
which sets the REMOTE_USER environment variable.


# third party
## Django OAuth Toolkit
The Django OAuth Toolkit package provides OAuth 2.0 support and works 
with Python 3.4+. The package is maintained by Evonove and uses the 
excellent OAuthLib. The package is well documented, and well supported 
and is currently the `Django REST framework` recommended package for 
OAuth 2.0 support.


# third party
## Simple JWT
JSON Web Token is a fairly new standard which can be used for token-based
authentication. Unlike the built-in TokenAuthentication scheme, JWT 
Authentication doesn't need to use a database to validate a token. A 
package for JWT authentication is djangorestframework-simplejwt which 
provides some features as well as a pluggable token blacklist app.

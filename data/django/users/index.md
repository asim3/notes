[@GitHub](https://github.com/django/django/blob/master/django/contrib/auth/views.py)


```py
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, logout


def login(request, user, backend=None):
    """
    Persist a user id and a backend in the request. This way a user doesn't
    have to reauthenticate on every request. Note that data set during
    the anonymous session is retained when the user logs in.
    """
    pass


def logout(request):
    """
    Remove the authenticated user's ID from the request and flush their session
    data.
    """
    pass
```

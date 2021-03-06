## Middleware Class
```python
from django.conf import settings

class ClassName:

  def __init__(self, get_response):
    self.get_response = get_response

  def __call__(self, request):
    response = self.get_response(request)
    return response

  def process_view(self, request, view_func, view_args, view_kwargs):
    return None
```


## Settings
```python
MIDDLEWARE = [
    ...
    'base.middleware.ClassName',
]
```


## Login Middleware
```python
import re

from django.conf import settings
from django.urls import reverse
from django.shortcuts import redirect

EXEMPT_URLS = []
if hasattr(settings, 'LOGIN_EXEMPT_URLS'):
    EXEMPT_URLS += [re.compile(url) for url in settings.LOGIN_EXEMPT_URLS]

class ClassName:

    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        response = self.get_response(request)
        return response

    def process_view(self, request, view_func, view_args, view_kwargs):
        assert hasattr(request, 'user')
        path = request.path_info.lstrip('/') # remove first "/" from the string
        url_is_exempt = any(url.match(path) for url in EXEMPT_URLS)

        if request.user.is_authenticated and url_is_exempt:
            return redirect(settings.LOGIN_REDIRECT_URL)
        elif request.user.is_authenticated or url_is_exempt:
            return None
        else:
            return redirect(reverse('login'))
```


## settings.py
```python
LOGIN_REDIRECT_URL = '/'

LOGIN_EXEMPT_URLS = [
    'login/',
]
```

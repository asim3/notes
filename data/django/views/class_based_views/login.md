[@GitHub](https://github.com/django/django/blob/master/django/contrib/auth/views.py)

## Redirect Login View
```py
from django.contrib.auth.views import LoginView
from django.http import HttpResponseRedirect, HttpResponseBadRequest
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

class UserLoginView(LoginView):
    redirect_authenticated_user = True
    
    @method_decorator(ensure_csrf_cookie)
    def get(self, request, *args, **kwargs):
        return HttpResponseRedirect(self.get_redirect_url())

    def form_invalid(self, form):
        return HttpResponseBadRequest(
            '{"username": "cc"}',
            content_type="application/json"
        )

    def get_redirect_url(self):
        return "/api/auth/"
```


## Redirect Logout View
```py
from django.contrib.auth.views import LogoutView

class UserLogoutView(LogoutView):
    next_page = "/api/auth/"
```
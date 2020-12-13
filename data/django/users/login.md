## Redirect Login View
```py
from django.contrib.auth.views import LoginView
from django.contrib.auth.forms import AuthenticationForm


class UserLoginView(LoginView):
    template_name = 'users/login.html'
    form_class = AuthenticationForm
    redirect_authenticated_user = True
```


## settings
to redirect_authenticated_user
```py
LOGIN_REDIRECT_URL = "/users/home/"
```

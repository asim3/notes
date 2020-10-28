## Redirect Login View
```py
from django.contrib.auth.views import LoginView
from django.urls import reverse_lazy
from .forms import UserRegisterForm, UserLoginForm


class UserLoginView(LoginView):
    template_name = 'users/login.html'
    form_class = UserLoginForm
    redirect_authenticated_user = True

    def form_valid(self, form):
        """If the form is valid, """
        response = super().form_valid(form)
        print("user id:", self.request.user.id)
        return response
```


## form
```py
from django.contrib.auth.forms import AuthenticationForm


class UserLoginForm(AuthenticationForm):
    pass

```


## settings
to redirect_authenticated_user
```py
LOGIN_REDIRECT_URL = "/users/home/"
```

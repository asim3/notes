## forms
```py
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm


class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email', 'first_name']
```


## views
```py
from django.urls import reverse_lazy
from django.views.generic.edit import CreateView
from django.contrib.messages.views import SuccessMessageMixin
from .forms import UserRegisterForm


class SignUpView(SuccessMessageMixin, CreateView):
    template_name = 'users/register.html'
    success_url = reverse_lazy('my-home')
    form_class = UserRegisterForm
    success_message = "Your profile was created successfully"
```


## template
```html
{% load static %}
<html>
<body>
    <form method="POST">
    {% csrf_token %}
    {{ form }}
    <input type="submit" />
    </form>
</body>
</html>
```


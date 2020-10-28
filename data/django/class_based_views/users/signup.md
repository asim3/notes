## views
```py
from django.views.generic.edit import CreateView
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse_lazy
from .forms import UserRegisterForm


class RegisterView(SuccessMessageMixin, CreateView):
    template_name = 'users/register.html'
    success_url = reverse_lazy('my-home')
    form_class = UserRegisterForm
    success_message = "Your profile was created successfully"

    def form_valid(self, form):
        response = super().form_valid(form)
        print("user id:", self.object.id)
        return response
```


## forms whith email
```py
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django import forms


class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()

    class Meta:
        model = User
        fields = ['username', 'email', 'first_name']
```


## forms whith password2
```py
from django.contrib.auth.forms import UserCreationForm


class UserRegisterForm(UserCreationForm):
    password2 = None

    def clean_password2(self):
        return self.cleaned_data.get("password1")

```

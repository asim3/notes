## views
```py
from django.views.generic.edit import CreateView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.contrib.messages.views import SuccessMessageMixin
from django.urls import reverse_lazy


class RegisterView(SuccessMessageMixin, CreateView):
    template_name = 'users/register.html'
    form_class = UserCreationForm
    success_url = reverse_lazy('my-home')
    success_message = "Your profile was created successfully"

    def form_valid(self, form):
        response = super().form_valid(form)
        login(self.request, self.object)
        return response
```


## form without password2
```py
from django.contrib.auth.forms import UserCreationForm


class UserRegisterForm(UserCreationForm):
    password2 = None

    def clean_password2(self):
        return self.cleaned_data.get("password1")
```


## form with email !!!
[confirmation-mail](https://simpleisbetterthancomplex.com/tutorial/2017/02/18/how-to-create-user-sign-up-view.html#sign-up-with-confirmation-mail)
```py
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm, UsernameField
from django.forms import EmailField, EmailInput


class UserRegisterForm(UserCreationForm):
    email = EmailField(
        label=_("Email"),
        max_length=254,
        widget=EmailInput(attrs={'autocomplete': 'email'})
    )

    class Meta:
        model = User
        fields = ('username', 'email', 'first_name',)
        field_classes = {'username': UsernameField}
```

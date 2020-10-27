## test Form
```py
from django.test import TestCase
from .forms import UserRegisterForm


class SignUpTestCase(TestCase):
    data = {
        "username": "test1",
        "email": "my-test1",
        "first_name": "my-test1",
        "password1": "my-test1",
        "password2": "my-test1",
    }

    def test_forms(self):
        form = UserRegisterForm(data=self.data)
        print(form.errors.items())
        self.assertTrue(form.is_valid())
```
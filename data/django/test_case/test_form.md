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

    def test_form_error(self):
        form = UserRegisterForm(data=self.data_error)
        self.assertFalse(form.is_valid())
        # errors
        msg_email = ['Enter a valid email address.']
        self.assertEqual(form.errors.get("email"), msg_email)
```

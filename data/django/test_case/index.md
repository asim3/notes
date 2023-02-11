## setup
```bash
python3 -m venv .venv \
  && source ./.venv/bin/activate \
  && pip install django gunicorn \
  && django-admin startproject my_project \
  && code . \
  && cd my_project \
  && ./manage.py startapp test_context 
```


## test URL & context
```py
from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse


class MyTestCase(TestCase):
    def test_url(self):
        expected = "/ar/school/my-ID/"
        actual = reverse("school", kwargs={"school": "my-ID"})
        self.assertEqual(expected, actual)

    def test_context(self):
        url = reverse("school", kwargs={"school": "my-ID"})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context.get("school"), "my-ID")
```


## setUp Super User
```py
from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse


class UserTests(TestCase):
    def setUp(self):
        User.objects.create_superuser("admin", "admin@test.com", "password")
        self.client.login(username="admin", password="password")

    def test_get_admin_page(self):
        response = self.client.get(reverse("admin:index"))
        self.assertEqual(response.status_code, 200)
```


## test post
```py
from django.test import TestCase
from django.urls import reverse
from django.contrib.staticfiles import finders
from io import BytesIO


class LoginTestCase(TestCase):

    def test_post_empty(self):
        response = self.client.post(
            reverse("admin:login"), username="", password="")
        self.assertEqual(response.status_code, 200)
        self.assertIn("username", response.context.get('form').errors)
        self.assertIn("password", response.context.get('form').errors)

    def test_post_file(self):
        my_file = BytesIO(b'bbbbbbbbbbbb')
        my_file.name = 'my-excel.xlsx'
        response = self.client.post(
            reverse("control"), data={"file": my_file})
        self.assertEqual(response.status_code, 302)

    def test_post_static_file(self):
        file_path = finders.find('admin/css/rtl.css')
        with open(file_path, "rb") as my_file:
            response = self.client.post(
                reverse("control"), data={"file": my_file})
            self.assertEqual(response.status_code, 302)
```


## test form
```py
from django.test import TestCase
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class FormTestCase(TestCase):

    def test_empty(self):
        form = UserCreationForm(data={})
        self.assertIn("username", form.errors)
        self.assertIn("password1", form.errors)
        self.assertIn("password2", form.errors)

        self.assertFalse(form.is_valid())

        user_error_list = ['This field is required.']
        self.assertEqual(form.errors.get("username"), user_error_list)

    def test_save(self):
        form = UserCreationForm(data={
            "username": "aaaaaaaaaaaa",
            "password1": "@BcD37J0",
            "password2": "@BcD37J0",
        })

        self.assertTrue(form.is_valid())
        self.assertEqual(User.objects.count(), 0)

        self.assertTrue(form.save())
        self.assertEqual(User.objects.count(), 1)
```


## test email
Django’s test runner automatically uses `In-memory` backend for testing.
```py
EMAIL_BACKEND = 'django.core.mail.backends.locmem.EmailBackend'

from django.core import mail


self.assertEqual(len(mail.outbox), 1)
self.assertEqual(_("Password reset on"), mail.outbox[0].subject)
self.assertEqual("info@gmail.com", mail.outbox[0].from_email)
self.assertEqual(['test@user.com'], mail.outbox[0].recipients())


# ===============================================================
from django.core import mail
from django.test.utils import override_settings


class EmailTestCase(TestCase):
    def test_send_email(self):
        mail.send_mail(
            "Subject here", 
            "Here is the message.",
            "from@example.com", 
            ["to@example.com"],
            fail_silently=False,
        )

        self.assertEqual(len(mail.outbox), 1)
        self.assertEqual(mail.outbox[0].subject, 'Subject here')
```


## test cookie
```py
from django.test import TestCase
from django.urls import reverse


class CookieTestCase(TestCase):

    def test_cookie(self):
        response = self.client.get(reverse("admin:login"))
        self.assertIn("csrftoken", self.client.cookies.keys())

        expected = "my-ID"
        actual = self.client.cookies["csrftoken"].value
        self.assertEqual(expected, actual)
```


## test Raised Errors
```py
from django.utils.translation import gettext as _
from django.urls import reverse
from django.forms import ValidationError


class BannerAPITests(TestCase):
    def test_login_by_government_id(self):
        error_massage = _("aaa")
        with self.assertRaisesMessage(ValidationError, error_massage):
            raise ValidationError('aaa')
```


## fix test list
fix test list by sorting all the lists
```py
from django.test import TestCase


class MyListTestCase(TestCase):
    
    def test_my_lists(self):
        my_list_1 = sorted(response_list, key=lambda i: i['first_name'])
        my_list_2 = sorted(my__data_list, key=lambda i: i['first_name'])

        self.assertListEqual(my_list_1, my_list_2)
```

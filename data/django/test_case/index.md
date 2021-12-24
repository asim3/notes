## basic test
```py
from django.test import TestCase
from django.contrib.auth.models import User
from django.urls import reverse


class My__TestCase(TestCase):
    def test_school_url(self):
        expected = "/ar/school/my-ID/"
        actual = reverse("school", kwargs={"school": "my-ID"})
        self.assertEqual(expected, actual)

    def test_school_context(self):
        url = reverse("school", kwargs={"school": "my-ID"})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.context.get("school"), "my-ID")
    
    # cookie
    def test_school_cookie(self):
        url = reverse("school", kwargs={"school": "my-ID"})
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(self.client.cookies["school"].value, "my-ID")
```


## test with setUp
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


class MySetUpTestCase(TestCase):
    data = "my_name_1"

    def setUp(self):
        self.data = "my_name_2"

    def test_my_data(self):
        self.assertEqual(self.data, "my_name_2")
        self.assertNotEqual(11, 22)
```


## test Errors
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


## test list
```py
from django.test import TestCase


class MyListTestCase(TestCase):
    
    def test_my_lists(self):
        my_list_1 = sorted(response_list, key=lambda i: i['first_name'])
        my_list_2 = sorted(my__data_list, key=lambda i: i['first_name'])

        self.assertListEqual(my_list_1, my_list_2)
```

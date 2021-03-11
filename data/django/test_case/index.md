## basic test
```py
from django.test import TestCase


class AsimTestCase(TestCase):
    data = "asim"

    def test_my_data(self):
        self.assertEqual(self.data, "asim")
        self.assertIsInstance(self.data, str)
```


## test with setUp
```py
from django.test import TestCase


class AsimTestCase(TestCase):
    data = "asim"

    def setUp(self):
        self.data = "asim"

    def test_my_data(self):
        self.assertEqual(123, "asim")
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

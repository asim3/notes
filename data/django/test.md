## test
```py
from django.test import TestCase


class AnimalTestCase(TestCase):
    def setUp(self):
        self.data = "asim"

    def test_my_data(self):
        self.assertEqual(self.data, "asim")
```

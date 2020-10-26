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


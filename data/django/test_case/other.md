## mock
```py
from django.test import TestCase
from django.urls import reverse
from unittest.mock import patch


def mocked_my_reverse(*args, **kwargs):
    return "my fake data"


class MyMockTests(TestCase):
    def test_reverse(self):
        expected = "/admin/"
        actual = reverse("admin:index")
        self.assertEqual(expected, actual)

    @patch("my_app.tests.reverse", return_value="my fake return")
    def test_reverse_return(self, my_new_mock_func):
        expected = "my fake return"
        actual = reverse("admin:index")
        self.assertEqual(expected, actual)

        print(my_new_mock_func)
        # <MagicMock name='reverse' id='140683979259664'>

    @patch("my_app.tests.reverse", mocked_my_reverse)
    def test_reverse_func(self):
        expected = "my fake data"
        actual = reverse("admin:index")
        self.assertEqual(expected, actual)
```


## skip
```py
from unittest import skip

@skip("slow")
class AsimTestCase(TestCase):
    data = "asim"

    @skip("Don't want to test")
    def test_my_data(self):
        self.assertEqual(123, "asim")
        self.assertNotEqual(11, 22)
```


## Headers
```py
from django.test import TestCase
from django.urls import reverse


class MyTestCase(TestCase):
    def test_get_headers(self):
        response = self.client.get(
            reverse("list-add"),
            CONTENT_TYPE='application/json',
            HTTP_SSL_CLIENT_CERT="aaa",
            HTTP_AUTHORIZATION='Token 0b5aaaaaa')
```


## tag
```py
from django.test import tag

class SampleTestCase(TestCase):

    @tag('fast')
    def test_fast(self):
        ...

    @tag('slow')
    def test_slow(self):
        ...

    @tag('slow', 'core')
    def test_slow_but_core(self):
```


## test with tags
```bash
./manage.py test --exclude-tag=slow
```

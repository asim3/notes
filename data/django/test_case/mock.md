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


## mock requests
```py
from django.conf import settings


class MockedSMSResponse:
    status_code = 0
    text = None
    json_data = None

    def __init__(self, status_code):
        self.status_code = status_code
        if status_code == 200:
            self.json_data = {
                "statusCode": 201,
                "messageId": 10142030,
            }
        else:
            self.json_data = {
                "statusCode": status_code,
                "message": "invalid credentials information xxxx"
            }
        self.text = str(self.json_data)

    def json(self):
        return self.json_data


class MockedSMSRequests:

    @classmethod
    def post(cls, url, data=None, json=None, **kwargs):
        if url == "https://docs.djangoproject.com":
            return MockedSMSResponse(900)
```

## patch requests
```py
from unittest.mock import patch
from my_app.tests.mock_patch import patch, MockedSMSRequests


@patch("my_app.utils.requests", MockedSMSRequests)
class UtilsTest(TestCase):
    def test_send_sms_message(self):
        self.assertTrue(send_sms_message("phone", "text"))
```

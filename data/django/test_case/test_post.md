## test Post
```py
from django.test import TestCase
from django.urls import reverse


class SignUpTestCase(TestCase):
    data = {
        "username": "test1",
        "email": "my-test1",
        "first_name": "my-test1",
        "password1": "my-test1",
        "password2": "my-test1",
    }

    def test_get(self):
        response = self.client.get(reverse("signup"))
        self.assertEqual(response.status_code, 200)
        # print(self.client.session.items())

    def test_post(self):
        response = self.client.post(reverse("signup"), self.data)
        self.assertEqual(response.status_code, 200)
        # print(response.client.session.items())
        # print(response.rendered_content)
        # print(response.json())
```

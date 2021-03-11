```py
from django.test import TestCase


class AsimTestCase(TestCase):
    def test_my_data(self):
        response = self.client.get(
            reverse("list-add"),
            CONTENT_TYPE='application/json',
            HTTP_SSL_CLIENT_CERT="aaa",
            HTTP_AUTHORIZATION='Token 0b5aaaaaa',
            # AUTHENTICATE=       'Not Accepted',
            # AUTHORIZATION=      'Not Accepted',
            # AUTHENTICATION=     'Not Accepted',
            # WWW_AUTHENTICATE=   'Not Accepted',
            # WWW_AUTHORIZATION=  'Not Accepted',
            # WWW_AUTHENTICATION= 'Not Accepted',
        )
```
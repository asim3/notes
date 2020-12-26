## browsable API
```txt
# Markdown support for the browsable API.
pip install markdown       

# Filtering support
pip install django-filter  
```


## Browsable API
```py
REST_FRAMEWORK = {
    # ...
    'DEFAULT_RENDERER_CLASSES': (
        'rest_framework.renderers.JSONRenderer',
        'rest_framework.renderers.BrowsableAPIRenderer',
    ),
}
```

## TestCase
```py
from rest_framework.test import APITestCase

class AsimTestCase(APITestCase):
    def test_my_data(self):
        data = {'username': 'asim', 'password': 'password'}
        response = self.client.post(
            reverse("list-add"), data, format='json', HTTP_AUTHORIZATION='Token 0b5aaaaaa')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(MyModel.objects.count(), 1)
        self.assertEqual(MyModel.objects.get().name, 'DabApps')
```

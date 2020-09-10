## Serializers


`/app_name/serializers.py`
```python
from rest_framework.serializers import (
    Serializer,
    ListSerializer,
    ModelSerializer,
    HyperlinkedModelSerializer,
)
from django.contrib.auth.models import User, Group


class UserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']
        read_only_fields = ['auth', 'id', 'username', 'img']

class GroupSerializer(HyperlinkedModelSerializer):
    read_field = ReadOnlyField(source='name')
    default_field = ReadOnlyField(default='my title')

    class Meta:
        model = Group
        fields = ["read_field", "default_field", 'url', 'name']
        read_only_fields = ['auth', 'id', 'username', 'img']
```
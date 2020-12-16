## Serializer functions
```py
from rest_framework.serializers import (ModelSerializer, CharField, EmailField, ValidationError)
from django.contrib.auth.models import User


class RegisterSerializer(ModelSerializer):
    url = CharField(source='get_absolute_url', read_only=True)
    name = CharField(label='Your Name:', allow_blank=True, max_length=150, 
        required=False, write_only=True,
        help_text='Required. 150 characters')
    
    class Meta:
        model = User
        fields = ['username', 'password', 'name']
        # fields = '__all__'
        # exclude = ['username', 'password']
        # read_only_fields = ['username', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        depth = 1

    def validate_password(self, value):
        if value == "password":
            raise ValidationError("pass not valid")
        return value

    def validate(self, data):
        """
        .initial_data   - Available.
        .validated_data - Only available after calling `is_valid()`
        .errors         - Only available after calling `is_valid()`
        .data           - Only available after calling `is_valid()`
        """
        if data['username'] != data['name']:
            raise ValidationError("username != name")
        return data

    def create(self, validated_data):
        print(validated_data)
        # {'username': 'fdsafdsafd', 'password': 'ggg', 'name': 'fdsafdsafd'}
        user = User(
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
```


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

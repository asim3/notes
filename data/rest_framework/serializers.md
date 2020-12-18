`serializers.py`
```py
from rest_framework import serializers

class CommentSerializer(serializers.Serializer):
    email = serializers.EmailField()
    content = serializers.CharField(max_length=200)


comment = {'email': 'asim@example.com', 'content': 'foo bar'}

serializer = CommentSerializer(data=comment)
serializer.initial_data
# {'email': 'asim@example.com', 'content': 'foo bar'}

serializer.data
# AssertionError: You should call `.is_valid()` first

serializer.instance
# None

serializer.validated_data
# AssertionError: You must call `.is_valid()` before accessing `.validated_data`.

serializer.is_valid()
# True

serializer.validated_data
# OrderedDict([('email', 'asim@example.com'), ('content', 'foo bar')])

# !!!
serializer.save()
# AssertionError: You cannot call `.save()` after accessing `serializer.data`
```

## save
```py
comment = {'email': 'asim@example.com', 'content': 'foo bar'}

serializer = CommentSerializer(data=comment)
serializer.save()
# AssertionError: You must call `.is_valid()` before calling `.save()`

serializer.is_valid()
# True

serializer.save()
# NotImplementedError: `create()` must be implemented
```

## errors
```py
comment = {'email': 'asim', 'content': 'foo bar'}

serializer = CommentSerializer(data=comment)
serializer.is_valid()
# False
serializer.is_valid(raise_exception=True)
# rest_framework.exceptions.ValidationError: 
# {'email': [ErrorDetail(string='Enter a valid email address.', code='invalid')]}
 
serializer.errors
# {'email': [ErrorDetail(string='Enter a valid email address.', code='invalid')]}
```


## Saving instances
```py
class CommentSerializer(serializers.Serializer):
    email = serializers.EmailField()
    content = serializers.CharField(max_length=200)
    created = serializers.DateTimeField()
    url = CharField(source='get_absolute_url', read_only=True)
    name = CharField(label='Your Name:', allow_blank=True, max_length=150, 
        required=False, write_only=True,
        help_text='Required. 150 characters')

    def save(self, **kwargs):
        validated_data = {**self.validated_data, **kwargs}
        if self.instance is not None:
            self.instance = self.update(self.instance, validated_data)
        else:
            self.instance = self.create(validated_data)
        return self.instance

    def create(self, validated_data):
        return Comment.objects.create(**validated_data)

    def update(self, instance, validated_data):
        # get validated_data or get the old data
        instance.email = validated_data.get('email', instance.email)
        instance.content = validated_data.get('content', instance.content)
        instance.created = validated_data.get('created', instance.created)
        instance.save()
        return instance


# .save() will create a new instance.
serializer = CommentSerializer(data=data)

# .save() will update the existing `comment` instance.
serializer = CommentSerializer(comment, data=data)
# equals
serializer = CommentSerializer(instance=comment, data=data)
```


## Validators
```py
from rest_framework.serializers import (CharField, IntegerField, EmailField, ValidationError)
from django.contrib.auth.models import User


def multiple_of_ten(value):
    if value % 10 != 0:
        raise ValidationError('Not a multiple of ten')


class RegisterSerializer(serializers.Serializer):
    score = IntegerField(validators=[multiple_of_ten])
    url = CharField(source='get_absolute_url', read_only=True)
    name = CharField(label='Your Name:', allow_blank=True, max_length=150, 
        required=False, write_only=True,
        help_text='Required. 150 characters')

    def validate_password(self, value):
        if value == "password":
            raise ValidationError("pass not valid")
        return value

    def validate(self, data):
        if data['username'] != data['name']:
            raise ValidationError("username != name")
        return data
```


## Model Serializer
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
        fields = ['username', 'password', 'name']
        # fields = '__all__'
        # exclude = ['username', 'password']
        # read_only_fields = ['username', 'password']
        extra_kwargs = {'password': {'write_only': True}}
        depth = 1
```

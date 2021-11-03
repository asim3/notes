## Serializer
```py
from rest_framework.serializers import Serializer, CharField, EmailField, DateTimeField

class CommentSerializer(Serializer):
    email = EmailField()
    content = CharField(max_length=200)
    created = DateTimeField()
    
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
```


## Saving instances
```py
from .serializers import CommentSerializer
# .save() will create a new instance.
serializer = CommentSerializer(data=data)

# .save() will update the existing `comment` instance.
serializer = CommentSerializer(comment, data=data)
```


## Model Serializer
`nano serializers.py`
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


## 2021
```py
from rest_framework.serializers import Serializer, CharField, ImageField, SlugField

from django.contrib.auth.models import User


class MySerializer(Serializer):
    title = CharField(max_length=100)
    logo = ImageField(required=False)
    domain = SlugField(max_length=50, required=False)
    description = CharField(max_length=250, required=False)
    analytics = CharField(max_length=50, required=False)

    def save(self, user):
        if self.instance is not None:
            self.instance = self.update()
        else:
            self.instance = User.objects.create(**self.validated_data)
        return self.instance

    def update(self):
        for attr, value in self.validated_data.items():
            setattr(self.instance, attr, value)
        return self.instance.save()
```

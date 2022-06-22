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
        
    def create(self, validated_data):
        if True:
            raise ValidationError({"errors": [_("SMS error")]})
        return Comment.objects.create(**validated_data)

```

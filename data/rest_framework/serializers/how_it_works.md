## how it works
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


## is_valid
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

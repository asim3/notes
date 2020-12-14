[@GitHub](https://github.com/django/django/blob/master/django/contrib/auth/views.py)


```py
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, logout
from django.contrib.auth.models import User


login(request, user, backend=None)

logout(request)

User.objects.create_user(username, f'{username}@my.com', passwd, first_name=name)
```

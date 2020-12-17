[@GitHub](https://github.com/django/django/blob/master/django/contrib/auth/views.py)


```py
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login, logout
from django.contrib.auth.models import User


login(request, user, backend=None)

logout(request)

User.objects.create_user(username, f'{username}@my.com', passwd, first_name=name)
```


`nano settings.py`
```py
from django.urls import reverse_lazy

LOGIN_URL = reverse_lazy('login')

LOGIN_REDIRECT_URL = reverse_lazy('pledge')
```


## get user objects
```py
    def get_object(self):
        return self.request.user.mymodel_set.order_by('-id').first()
```

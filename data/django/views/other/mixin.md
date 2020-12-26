## Mixin
## السماح للمستخدم الفعال فقط
```py
from django.contrib.auth.mixins import LoginRequiredMixin

class BlogUpdateView(LoginRequiredMixin, UpdateView):
    login_url = None
    permission_denied_message = ''
    raise_exception = False
```


`nano settings.py`
```py
from django.urls import reverse_lazy

LOGIN_URL = reverse_lazy('login')

LOGIN_REDIRECT_URL = reverse_lazy('pledge')
```


## permission checks
```py
from django.contrib.auth.mixins import PermissionRequiredMixin

class MyView(PermissionRequiredMixin, View):
    login_url = None
    permission_denied_message = ''
    raise_exception = False

    permission_required = 'polls.add_choice'
    # Or multiple of permissions:
    permission_required = ('polls.view_choice', 'polls.change_choice')

    def get_permission_required():
        # ...

    def has_permission():
        # ...
```


## تحديد شرط مخصوص
```py
from django.contrib.auth.mixins import UserPassesTestMixin

class BlogUpdateView(UserPassesTestMixin, UpdateView):
    login_url = None
    permission_denied_message = ''
    raise_exception = False

    def test_func(self):
        obj = self.get_object()
        return obj.author == self.request.user
```

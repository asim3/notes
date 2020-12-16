## Mixin
## السماح للمستخدم الفعال فقط
```py
from django.contrib.auth.mixins import LoginRequiredMixin

class BlogUpdateView(LoginRequiredMixin, UpdateView):
    # ...
```


`nano settings.py`
```py
from django.urls import reverse_lazy

LOGIN_URL = reverse_lazy('login')

LOGIN_REDIRECT_URL = reverse_lazy('pledge')
```


## تحديد شرط مخصوص
```py
from django.contrib.auth.mixins import LoginRequiredMixin, UserPassesTestMixin

class BlogUpdateView(LoginRequiredMixin, UserPassesTestMixin, UpdateView):
    # ...

    def test_func(self):
        obj = self.get_object()
        return obj.author == self.request.user
```

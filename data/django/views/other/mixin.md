## Mixin
## السماح للمستخدم الفعال فقط
```py
from django.contrib.auth.mixins import LoginRequiredMixin

class BlogUpdateView(LoginRequiredMixin, UpdateView):
    # ...
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

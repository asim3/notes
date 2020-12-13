## Redirect Logout View
```py
from django.contrib.auth.views import LogoutView
from django.urls import reverse_lazy


class UserLogoutView(LogoutView):
    template_name = 'users/logout.html'
    next_page = reverse_lazy('login')
```

## Redirect Logout View
```py
from django.contrib.auth.views import LogoutView


class UserLogoutView(LogoutView):
    template_name = 'users/logout.html'
    next_page = "login"
```

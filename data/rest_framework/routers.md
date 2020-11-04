## Routers

`/app_name/urls.py`
```python
from django.urls import include, path
from .routers import router

urlpatterns = [
    # ...
    path('api/', include(router.urls)),
]
```


`/app_name/routers.py`
```python
from rest_framework import routers
from members import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
```


# OR


`/app_name/urls.py`
```py
from .routers import router

from django.contrib.auth.views import LoginView
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import ensure_csrf_cookie

class UserLoginView(LoginView):
    template_name="index.html"
    
    @method_decorator(ensure_csrf_cookie)
    def dispatch(self, *args, **kwargs):
        return super().dispatch(*args, **kwargs)


urlpatterns = [
    # ...
    path('api/', include(router.urls)),
    path('login/', UserLoginView.as_view()),
]
```

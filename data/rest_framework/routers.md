## Routers


`/app_name/urls.py`
```python
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from members.views import UserViewSet, GroupViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

urlpatterns = [
    # ...
    path('api/', include(router.urls)),
]
```

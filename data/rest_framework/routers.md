## Routers


`/app_name/routers.py`
```python
from rest_framework import routers
from members import views

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
```



`/app_name/urls.py`
```python
from django.urls import include, path
from django.contrib import admin
from .routers import router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
```

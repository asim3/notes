## Routers
`/app_name/urls.py`
```python
from django.urls import include, path
from rest_framework.routers import SimpleRouter, DefaultRouter
from members.views import UserViewSet, GroupViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet, basename='user_reverse_name')
router.register(r'groups', GroupViewSet, basename='group_reverse_name')

urlpatterns += router.urls

# OR 

urlpatterns = [
    # ...
    *router.urls,
]

# OR 

urlpatterns = [
    # ...
    path('api/', include(router.urls)),
]
```

> The default router extends the `SimpleRouter`, but also adds in a default
> API root view, and adds format suffix patterns to the URLs.


## 2021
```py
from rest_framework.routers import DefaultRouter
from .views import MyViewSet

router = DefaultRouter()
router.root_view_name = "my-api-root"
# reverse("my-api-root")
router.register('users', MyViewSet, basename='my-reverse-user')
# reverse("my-reverse-user-list")
# reverse("my-reverse-user-detail")

urlpatterns = router.urls
```

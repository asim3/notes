## Routers
`/app_name/urls.py`
```python
from django.urls import include, path
from rest_framework.routers import SimpleRouter, DefaultRouter
from members.views import UserViewSet, GroupViewSet

router = DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'groups', GroupViewSet)

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

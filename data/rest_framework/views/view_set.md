### The main advantages of ViewSet over a View:
- Repeated logic can be combined into a single class.
- By using routers, we no longer need to deal with wiring up the URL conf ourselves.

> Using regular views and URL confs is more explicit and gives you more control.    
> ViewSets are helpful if you want to get up and running quickly, or 
> when you have a large API and you want to enforce a consistent URL 
> configuration throughout.


`urls.py`
```py
from rest_framework import viewsets
from .serializers import UserSerializer
from django.contrib.auth.models import User


class UserViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = UserSerializer
    queryset = User.objects.all()


# as_view()
user_list = UserViewSet.as_view({'get': 'list'})
user_detail = UserViewSet.as_view({'get': 'retrieve'})

# OR

router = SimpleRouter()
router.register(r'users', UserViewSet, basename='user')
urlpatterns = router.urls
```

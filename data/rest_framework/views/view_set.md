### The main advantages of ViewSet over a View:
- Repeated logic can be combined into a single class.
- By using routers, we no longer need to deal with wiring up the URL conf ourselves.

> Using regular views and URL confs is more explicit and gives you more control.    
> ViewSets are helpful if you want to get up and running quickly, or 
> when you have a large API and you want to enforce a consistent URL 
> configuration throughout.


`nano views.py`
```py
from django.contrib.auth.models import User
from rest_framework.viewsets import ModelViewSet
from .serializers import UserSerializer


class UserViewSet(ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()
```


`nano serializers.py`
```python
from rest_framework.serializers import HyperlinkedModelSerializer
from django.contrib.auth.models import User, Group


class UserSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'name']
        extra_kwargs = {'password': {'write_only': True}}
        depth = 1
```


`nano urls.py`
```py
from .views import UserViewSet


urlpatterns = [
    # ...
    path('user/list', UserViewSet.as_view({'get': 'list'})),
    path('user/info', UserViewSet.as_view({'get': 'retrieve'})),
]


# OR
from rest_framework.routers import SimpleRouter, DefaultRouter

router = SimpleRouter()
router.register(r'users', UserViewSet, basename='user_router')

urlpatterns = router.urls
```

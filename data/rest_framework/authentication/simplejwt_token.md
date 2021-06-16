`nano views.py`
```python
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView


urlpatterns = [
    # ...
    path('token/', TokenObtainPairView.as_view(), name='token-obtain'),
    path('refresh/', TokenRefreshView.as_view(), name='token-refresh'),
]
```


## only verify
```python
from rest_framework_simplejwt.views import TokenVerifyView


urlpatterns = [
    # ...
    path('verify/', TokenVerifyView.as_view(), name='token-verify'),
]
```


## obtain token
```txt
curl -X POST -H "Content-Type: application/json" \
  -d '{"username": "asim", "password": "my-password"}' \
  http://localhost:8000/api/token/
```

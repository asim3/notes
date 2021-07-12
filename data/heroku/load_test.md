# Load Testing
[docs](https://devcenter.heroku.com/articles/loaderio)

```bash
heroku addons:create loaderio:basic -a __app__

heroku addons:open loaderio -a __app__
```


## django
```py
from django.urls import path
from django.http import HttpResponse


def loaderio_view(request):
    return HttpResponse("loaderio-28991623a239e883")


urlpatterns = [
    path('loaderio-28991623a239e883/', loaderio_view),
]
```

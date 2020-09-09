## Using static html in /project/templates/index.html


`nano /project/urls.py`
```python
path('', TemplateView.as_view(template_name="index.html") ),
```


`nano /project/settings.py`
```python
TEMPLATES = [
    {
        # ...
        'DIRS': [os.path.join(os.path.dirname(__file__), 'templates')],
        # ...
    },
]
```


```python
from django.urls import path, include, re_path
from . import views


urlpatterns = [
  path('', include('___.urls')),
  path('print/<int:xxxx>', views.__),
  path('print/<slug:xxxx>', views.__),
  re_path(r'^(?i)xxxx/', views.__),
  path('index/', views.index, name='main-view'),
  path('admin/', admin.site.urls),
]
```


## static files
```python
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns += staticfiles_urlpatterns()
```



```python
from django.conf import settings
from django.conf.urls.static import static

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

# Note that request.FILES will only contain data if the request method
# was POST and the <form> that posted the request has the attribute
# enctype="multipart/form-data". Otherwise, request.FILES will be empty.
```


## Get URL by URL name
```python
from django.shortcuts import resolve_url
reverse('url_name', kwargs={'pk': self.object.id})
```


## or
```python
from django.urls import reverse
reverse('url_name', kwargs={'pk': self.object.id})
```


## http response redirect
```python
from django.shortcuts import redirect
return redirect('arch-summary', args=[1945])
# or 
return HttpResponseRedirect(reverse('arch-summary', args=[1945]))
```


## Class Based Views
`nano urls.py`
```python
from django.views.generic import TemplateView

urlpatterns = [
  path('', TemplateView.as_view(template_name="base/home.html") ),
]
```


## App Name
> in templates `{{ url 'myappname:home' }}`
```python
app_name = 'myappname'
urlpatterns = [
  path('home/', views.index, name='home'),
  # ...
]
```


## Django Redirects
```python
from django.http import HttpResponseRedirect
from django.urls import reverse

HttpResponseRedirect(reverse('status'))
```

## or 
```python
from django.shortcuts import redirect

redirect('status')
```

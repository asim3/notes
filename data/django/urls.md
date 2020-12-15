## static files
```python
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    # ...
    *staticfiles_urlpatterns(),
]

# OR

urlpatterns += staticfiles_urlpatterns()

# OR

from django.conf.settings import STATIC_URL, STATIC_ROOT, MEDIA_URL, MEDIA_ROOT
from django.conf.urls.static import static

# Return a URL pattern for serving files in debug mode only.
urlpatterns += static(STATIC_URL, document_root=STATIC_ROOT)
urlpatterns += static(MEDIA_URL, document_root=MEDIA_ROOT)
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


## Redirects
```python
from django.urls import reverse
from django.http import HttpResponseRedirect

return HttpResponseRedirect(reverse('arch-summary', args=[1945]))
# OR

from django.shortcuts import redirect

return redirect('arch-summary', args=[1945])
```


## Class Based Views
`urls.py`
```python
from django.views.generic import TemplateView

urlpatterns = [
  path('', TemplateView.as_view(template_name="base/home.html") ),
]
```


## get url from templates
> in templates `{{ url 'myappname:home' }}`
```python
app_name = 'myappname'

urlpatterns = [
  path('home/', views.index, name='home'),
]
```


## Translation
```py
from django.conf.urls.i18n import i18n_patterns


urlpatterns = i18n_patterns(
    # ...
    path('admin/', admin.site.urls),
)
```

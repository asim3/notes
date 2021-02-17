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

from django.conf import settings
from django.conf.urls.static import static

# Return a URL pattern for serving files in debug mode only.
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
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


## reverse lazy Admin
```python
from django.urls import reverse_lazy


reverse_lazy('admin:index')
# index
reverse_lazy('admin:login')
# login
reverse_lazy('admin:logout')
# logout

reverse_lazy('admin:app_list' 'myapp')
# Application index page
reverse_lazy('admin:myapp_mymodel_changelist')
# Model Home
reverse_lazy('admin:myapp_mymodel_changelist')
# Changelist
reverse_lazy('admin:myapp_mymodel_add')
# Add

reverse_lazy('admin:myapp_mymodel_history', args=(obj.id,))
# istory
reverse_lazy('admin:myapp_mymodel_delete', args=(obj.id,))
# Delete
reverse_lazy('admin:myapp_mymodel_change', args=(obj.id,))
# Change
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

[what is SEO](https://digitalmarketinginstitute.com/blog/what-is-seo)
[how SEO works](https://studiohawk.com.au/blog/how-seo-works/)


## Path
```python
from django.urls import path
from django.http import HttpResponse


def my_print_view(request, *args, **kwargs):
    html = f"<html><body>kwargs: {kwargs} </body></html>"

    print("my_id", type(kwargs.get("my_id")))      # <class 'int'>
    print("my_slug", type(kwargs.get("my_slug")))  # <class 'str'>
    print("my_uuid", type(kwargs.get("my_uuid")))  # <class 'uuid.UUID'>
    print("my_user", type(kwargs.get("my_user")))  # <class 'str'>

    return HttpResponse(html)


urlpatterns = [
    # com/print/12300/
    path('print/<int:my_id>/', my_print_view, name="my-print"),

    # UUID is guaranteed to be different from any other UUID generated until A.D. 3400.
    # com/print/21811a91-9997-4d3b-8770-76808919dddf/
    path('print/<uuid:my_uuid>/', my_print_view, name="my-print"),

    # ASCII letters = abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
    # numbers = 0123456789
    # dashes = - 
    # underscore = _

    # com/print/My_sluG-1197/
    path('print/<slug:my_slug>/', my_print_view, name="my-print"),

    # com/print/my.user/
    # com/print/My_str~!@$%&*()_+=99/
    path('print/<str:my_user>/', my_print_view, name="my-print"),
    path('print/<my_str>/', my_print_view, name="my-print"),

    # com/print/
    path('print/', my_print_view, name="my-print"),
]
```


## path kwargs
```py
from django.urls import path
from django.http import HttpResponse
import datetime


def current_datetime(request, *args, **kwargs):
    my_user = kwargs.get("my_user")
    print(type(my_user))  # <class 'str'>
    html = f"""
    <html>
        <body>
            It is now {datetime.datetime.now()} <br>
            args: {args} <br>
            kwargs: {kwargs} <br>
            my_user: {my_user} <br>
        </body>
    </html>
    """
    # It is now 2022-06-04 18:27:31.239518
    # args: ()
    # kwargs: {'my_user': 'asim'}
    # my_user: asim
    return HttpResponse(html)


urlpatterns = [
    path('print/<slug:my_user>/', current_datetime),
]
```


## Get URL by resolve
```python
from django.shortcuts import resolve_url


resolve_url('my-print', my_id=888)
# /en/print/888/

resolve_url('my-print', my_slug="My_sluG-1197")
# /en/print/My_sluG-1197/

resolve_url(
# /en/print/839c124b-7ad0-4960-862f-5c3ee6f171da/
    'my-print', my_uuid="839c124b-7ad0-4960-862f-5c3ee6f171da")

resolve_url('my-print', my_user="My_str~!@$%&*()_+=99")
# /en/print/My_str~!@$%25&*()_+=99/

resolve_url('my-print')
# /en/print/
```


## Get URL by reverse
```python
from django.urls import reverse


reverse('my-print')
# /en/print/

reverse('my-print', kwargs={'my_slug': "My_sluG-1197"})
# /en/print/My_sluG-1197/

reverse('my-print', kwargs={'my_user': "My_str~!@$%&*()_+=99"})
# /en/print/My_str~!@$%25&*()_+=99/
```


## Translation
```py
from django.conf.urls.i18n import i18n_patterns


urlpatterns = i18n_patterns(
    # ...
    path('print/', my_print_view, name="my-print"),
    path('admin/', admin.site.urls),
)
```


## static files
```python
from django.conf import settings
from django.conf.urls.static import static

# Return a URL pattern for serving files in debug mode only.
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# OR "old"


from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    # ...
    *staticfiles_urlpatterns(),
]

# OR

urlpatterns += staticfiles_urlpatterns()
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


## Redirects
```python
from django.urls import path
from django.views.generic import RedirectView
from django.http import HttpResponse
from django.shortcuts import redirect


def my_home_view(request, *args, **kwargs):
    return HttpResponse("home")


def my_redirect_view(request, *args, **kwargs):
    return redirect("my-home")
    return redirect("my-home", user_name="asim")
    return redirect("http://google.com")


urlpatterns = [
    path('home/', RedirectView.as_view(pattern_name="my-home"), name="my-pattern"),
    path('http/', RedirectView.as_view(url="http://google.com"), name="my-http"),
    path('google/', RedirectView.as_view(url="https://google.com"), name="my-https"),

    path('go-to/', my_redirect_view, name="my-go-to"),

    path('base/<user_name>/', my_home_view, name="my-home"),
    path('base/', my_home_view, name="my-home"),
]
```

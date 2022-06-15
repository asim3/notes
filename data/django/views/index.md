[docs](https://ccbv.co.uk/)
[Built-in class-based views API](https://docs.djangoproject.com/en/dev/ref/class-based-views/)


## Http Response
```py
from django.urls import path
from django.http import HttpResponse


def my_home_view(request, user_id):
    return HttpResponse("You're looking at user %s." % user_id)


urlpatterns = [
    path('home/<int:user_id>/', my_home_view, name="my-home"),
]
```


## Json Response
```py
from django.urls import path
from django.http import JsonResponse, HttpResponse


def my_home_view(request):
    data = {"user_id": 123}
    return JsonResponse(data, safe=False)
    # {"user_id": 123}


urlpatterns = [
    path('home/', my_home_view, name="my-home"),
]
```


## File Response
```py
from django.urls import path
from django.http import FileResponse


def my_home_view(request):
    binary_content = open("/home/asim/Downloads/my-file", "rb")
    binary_content = open("/home/asim/Downloads/my-file.xlsx", "rb")
    binary_content = open("/home/asim/Downloads/my-file.iso", "rb")
    binary_content = open("/home/asim/Downloads/my-file.pdf", "rb")
    filename = "my-file-name.pdf"
    return FileResponse(binary_content, as_attachment=False, filename=filename)


urlpatterns = [
    path('home/', my_home_view, name="my-home"),
]
```


## BytesIO Response
```py
from django.urls import path
from django.http import FileResponse
import io


def my_home_view(request):
    buffer = io.BytesIO()
    # a bytes-like object is required, not 'str'
    buffer.write(b'Good day!\n\n')
    buffer.seek(0)
    filename = "my-file-name.txt"
    return FileResponse(buffer, as_attachment=True, filename=filename)


urlpatterns = [
    path('home/', my_home_view, name="my-home"),
]
```


## render template
```py
from django.urls import path
from django.shortcuts import render, redirect, get_object_or_404, get_list_or_404


def my_home_view(request):
    context = {"user_id": 123}
    return render(request, 'base/about.html', context)
    # Good day 123


urlpatterns = [
    path('home/', my_home_view, name="my-home"),
]


# cat my_project/app_name/templates/base/about.html
# Good day {{ user_id }}
```


## Template View
`urls.py`
```py
from django.urls import path
from django.views.generic import TemplateView, RedirectView


class AboutView(TemplateView):
    template_name = "base/about.html"
    extra_context = None


urlpatterns = [
    path('', TemplateView.as_view(template_name="base/home.html")),
    path('about/', AboutView.as_view(), name="my-about"),
    path('redirect/', RedirectView.as_view(pattern_name='my-about')),
    path('redirect-url/', RedirectView.as_view(url='https://djangoproject.com')),
]
```


## Download View
```py
from django.urls import path
from django.utils import timezone
from django.http import FileResponse
from django.views.generic.base import TemplateView


class DownloadView(TemplateView):
    file_name = None
    is_attachment = True
    # content_type = "text/plain"
    # content_type = "image/png"
    # content_type = "application/pdf"
    # content_type = "application/json"
    # content_type = "application/zip"

    # content_type = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"

    # other ???
    # content_type = "application/xml"
    # content_type = "application/xhtml+xml"
    # content_type = "application/x-www-form-urlencoded"
    # content_type = "application/vnd.android.package-archive"
    # content_type = "application/vnd.oasis.opendocument.text"
    # content_type = "application/vnd.oasis.opendocument.spreadsheet"
    # content_type = "application/vnd.oasis.opendocument.presentation"
    # content_type = "application/vnd.oasis.opendocument.graphics"
    # content_type = "application/vnd.ms-excel"
    # content_type = "application/vnd.ms-powerpoint"
    # content_type = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    # content_type = "application/msword"
    # content_type = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    # content_type = "application/vnd.mozilla.xul+xml"

    def render_to_response(self, context, **response_kwargs):
        response_kwargs.setdefault('content_type', self.content_type)
        return FileResponse(
            streaming_content=self.get_binary_content(context),
            as_attachment=self.is_attachment,
            filename=self.get_file_name(),
            **response_kwargs)

    def get_file_name(self):
        if self.file_name:
            return self.file_name
        return "my-file-%s.pdf" % timezone.now().strftime("%d-%m-%Y-%H-%M-%S")

    def get_binary_content(self, context):
        binary_content = open("/home/asim/Downloads/my-file", "rb")
        binary_content = open("/home/asim/Downloads/my-file.xlsx", "rb")
        binary_content = open("/home/asim/Downloads/my-file.iso", "rb")
        binary_content = open("/home/asim/Downloads/my-file.pdf", "rb")
        return binary_content


urlpatterns = [
    path('', DownloadView.as_view(), name="my-home"),
]
```


## save response to file
```py
from django.views.generic import TemplateView


class HomeView(TemplateView):
    template_name = "home/home.html"

    def render_to_response(self, context, **response_kwargs):
        response = super().render_to_response(context, **response_kwargs)
        if response.status_code == 200:
            self.save_html_to_file(response.render().content)
        return response

    def save_html_to_file(self, html_as_bytes):
        with open('/home/asim/Desktop/my_new_page.html', 'wb') as new_file:
            new_file.write(html_as_bytes)
```

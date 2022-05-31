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


## Base64 img
```python
from django.core.files.base import ContentFile
import base64


def get_base64_img(base64_text):
    try:
        format, base64_img = base64_text.split(';base64,')
        ext = format.split('/')[-1]
        return ContentFile(base64.b64decode(base64_img), name='temp.' + ext)
    except:
        return None
```


## download excel file
```py
from django.views.generic import View
from django.http import HttpResponse
from django.contrib.auth.mixins import PermissionRequiredMixin
from django.conf import settings
from os.path import join


class DownloadExcelView(PermissionRequiredMixin, View):

    def has_permission(self):
        return self.request.user.is_staff

    def get_excel_template(self, **kwargs):
        path = join(settings.BASE_DIR, 'administration/static/excel-template.xlsx')
        return open(path, 'rb')

    def get(self, request, **kwargs):
        excel_bytes = self.get_excel_template()
        content_type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        filename = 'excel-template.xlsx'

        response = HttpResponse(excel_bytes, content_type=content_type)
        response['Content-Disposition'] = 'attachment; filename="%s"' % filename
        return response
```


## Download View
```py
from django.views.generic.base import TemplateView


class DownloadView(TemplateView):
    template_name = 'my_app/my-file.yaml'
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
        Content_Disposition = f'attachment; filename="{self.get_file_name()}"'
        headers = {"Content-Disposition": Content_Disposition}
        response_kwargs.update({"headers": headers})
        return super().render_to_response(context, **response_kwargs)

    def get_file_name(self):
        return "my-file-name.txt"
```

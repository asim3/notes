[docs](https://ccbv.co.uk/)
[Built-in class-based views API](https://docs.djangoproject.com/en/dev/ref/class-based-views/)


## Template
`urls.py`
```py
from django.views.generic import TemplateView


urlpatterns = [
    path('', TemplateView.as_view(template_name="base/home.html") ),
    # ...
]
```


# OR
`views.py`
```python
from django.views.generic import TemplateView

class AboutView(TemplateView):
    template_name = "about.html"
    extra_context = None

    def dispatch(self, request, *args, **kwargs):
      # ...
      return super().dispatch(request, *args, **kwargs)

    def get(self, request, *args, **kwargs):
      # ...
      return super().get(request, *args, **kwargs)
```


`nano urls.py`
```python
path('about/', AboutView.as_view() ),
```


```python
class ListTable(ListView):
    # queryset = Table1.objects.order_by(order_by_this)
    model = Table1
    paginate_by= 10
    template_name = 'show_table/show_table.html'
    ordering = 'id'

    def dispatch(self, request, *args, **kwargs):
        # ...
        return super().dispatch(request, *args, **kwargs)
```


# Redirect
```python
from django.urls import path
from django.views.generic.base import RedirectView

urlpatterns = [
  path('details/', RedirectView.as_view(url='https://djangoproject.com') ),
  path('details/', RedirectView.as_view(pattern_name='show_table') ),
]
```


## Base64 img
```python
def get_base64_img(base64_text):
    try:
        import base64
        from django.core.files.base import ContentFile

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
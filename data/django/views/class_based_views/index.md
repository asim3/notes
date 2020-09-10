Built-in class-based views API
```python
https://docs.djangoproject.com/en/2.1/ref/class-based-views/

الشكل البسيط
```
path('', TemplateView.as_view(template_name="base/home.html") ),python
```


الشكل الطبيعي
```python
# views.py
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


```python
# urls.py
path('about/', AboutView.as_view() ),
```


تخطي المعادلة
```python
class ListTable(ListView):
    # queryset = Table1.objects.order_by(order_by_this)
    model = Table1
    paginate_by= 10
    template_name = 'show_table/show_table.html'
    ordering = 'id'

    def dispatch(self, request, *args, **kwargs):
        ...

        return super().dispatch(request, *args, **kwargs)
```



تحويل الرابط
```python
from django.urls import path
from django.views.generic.base import RedirectView

urlpatterns = [
  path('details/', RedirectView.as_view(url='https://djangoproject.com') ),
  path('details/', RedirectView.as_view(pattern_name='show_table') ),
]
```

جميع انواع الأصناف
```python
TemplateView
DetailView
ListView

CreateView
UpdateView
DeleteView
```



Base64_img
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
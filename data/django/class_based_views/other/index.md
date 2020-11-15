## الاساس
```python
class View:

  def as_view(cls, **initkwargs):
    def view(request, *args, **kwargs):
      self = cls(**initkwargs) # !!!
      return self.dispatch(request, *args, **kwargs)
    return view

  def dispatch(self, request, *args, **kwargs):
    # get() or post()
    handler = getattr(self, request.method.lower())
    return handler(request, *args, **kwargs)
```


## إضافة حقول الى الصفحة
```python
class ContextMixin:
  extra_context = None

  def get_context_data(self, **kwargs):
    return self.extra_context
```


## !!!
```python
from django.template.response import TemplateResponse

class TemplateResponseMixin:
  template_name = None
  response_class = TemplateResponse

  def render_to_response(self, context, **response_kwargs):
    return self.response_class(
        request=self.request,
        template=self.get_template_names(),
        context=context,
        using=self.template_engine,
        **response_kwargs
    )

  def get_template_names(self):
    return [self.template_name]
```


## عرض صفحة واحدة
```python
class TemplateView(TemplateResponseMixin, ContextMixin, View):

  def get(self, request, *args, **kwargs):
    context = self.get_context_data(**kwargs)
    return self.render_to_response(context)
```


## شرح
```text
as_view()
  view
    dispatch()
      get()
        render_to_response()
              TemplateResponse()
```

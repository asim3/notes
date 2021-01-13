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

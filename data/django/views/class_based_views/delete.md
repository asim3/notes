## views.py
```python
from django.views.generic import (
    CreateView, DetailView, ListView,
    UpdateView, DeleteView
)
from django.urls import reverse

class DeleteRow(DeleteView):
    template_name = 'edit_table/delete_row.html'

    def get_object(self):
      id_ = self.kwargs.get("id")
      return get_object_or_404(Table1, id=id_)

    # success_url = '/show/' # or Table1.get_absolute_url >> in model.py
    # or
    def get_success_url(self):
      return reverse('url_name', kwargs={'pk': self.object.id})
```











## urls.py
```python
urlpatterns = [
  path('delete/<slug:pk>', DeleteRow.as_view(), name='delete_row'),
]
```




## templates
```django
  <h3>تعديل الجدول</h3>
  <a class="btn btn-info mb-2" href="/show/">رجوع</a>

  <form method="post">
    {% csrf_token %}
    <h4 class="my-4">هل انت متأكد من حذف: {{ object.title }}</h4>
    <div class="alert">

      <input type="submit" class="btn btn-danger float-left" value="حذف">

    </div>
  </form>
```

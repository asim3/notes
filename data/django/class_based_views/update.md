## views.py
```python
from django.views.generic import (
    CreateView, DetailView, ListView,
    UpdateView, DeleteView
)
from show_table.models import Table1
from django.urls import reverse, reverse_lazy

class UpdateTable(UpdateView):
    template_name = 'edit_table/edit_table.html'
    pk_url_kwarg = 'pk'

    success_url = "//youtube.com" # or Table1.get_absolute_url >> in model.py
    # or
    success_url = reverse_lazy('home')
    # or
    def get_success_url(self):
        return reverse('url_name', kwargs={'pk': self.object.id})

    model = Table1
    fields = ['title', 'desc', 'year', 'age', 'ser']
    # or
    form_class = Table1ModelForm
    # or
    queryset = Table1.objects.all()
    # or
    def get_object(self):
      id_ = self.kwargs.get("id")
      return get_object_or_404(Table1, id=id_)

    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.fk_student = Table1.objects.get(id=self.kwargs.get('id'))
        return super().form_valid(form)
```


## urls.py
```python
urlpatterns = [
  path('edit/<slug:pk>', UpdateTable.as_view(), name='edit_table'),
]
```


## templates
```django
  <h3>تعديل الجدول</h3>
  <a class="btn btn-info mb-2" href="/show/">رجوع</a>

  <form method="post">
    {% csrf_token %}
    {{ form|crispy }}
    <div class="alert">

      <a class="btn btn-danger" href="/delete/{{ object.id }}">حذف</a>
      <input type="submit" class="btn btn-primary float-left" value="حفظ">

    </div>
    <script>
      onload_functions.push(function() {
          document.getElementById('id_year').setAttribute('type', 'date')
      })
    </script>
  </form>
```

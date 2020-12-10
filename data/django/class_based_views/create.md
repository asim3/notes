## views.py
```python
from django.views.generic import (
    CreateView, DetailView, ListView,
    UpdateView, DeleteView
)
from django.urls import reverse_lazy


class CreateNew(CreateView):
    template_name = 'edit_table/create_new.html'

    success_url = '/show/' # or Table1.get_absolute_url >> in model.py
    # or
    success_url = reverse_lazy('home')
    # or
    def get_success_url(self):
        return reverse('user_details', kwargs={'pk': self.object.id})

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
        obj.user = self.request.user
        return super().form_valid(form)
        
    def form_valid(self, form):
        obj = form.save(commit=False)
        obj.fk_student = Table1.objects.get(id=self.kwargs.get('id'))
        return super().form_valid(form)

    def dispatch(self, request, *args, **kwargs):
        form = self.get_form()
        old_form = {}
        for field in self.fields:
            value = ''
            if form.data:
                value = form.data.get(field)
            old_form[field] = value
        self.extra_context = {'old_form': old_form}
        return super().dispatch(request, *args, **kwargs)
```



## urls.py
```python
urlpatterns = [
  path('new/', CreateNew.as_view(), name='create_new'),
]
```



## templates
```django
  <h3>إضافة حقل جديد</h3>
  <a class="btn btn-info mb-2" href="/show/">رجوع</a>

  <form method="post">
    {% csrf_token %}
    {{ form|crispy }}
    <div class="alert">


      <input type="submit" class="btn btn-primary float-left" value="حفظ">

    </div>
    <script>
      onload_functions.push(function() {
          document.getElementById('id_year').setAttribute('type', 'date')
      })
    </script>
  </form>
```

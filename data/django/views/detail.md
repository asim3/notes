## views.py
```py
from django.views.generic import (
    CreateView, DetailView, ListView,
    UpdateView, DeleteView
)
from show_table.models import Table1

class DetailsTable(DetailView):
    template_name = 'show_table_details/show_details.html'

    model = Table1
    fields = ['title', 'desc', 'year', 'age', 'ser']
    # or
    queryset = Table1.objects.all()
    # or
    def get_object(self):
      id_ = self.kwargs.get("id")
      return get_object_or_404(Table1, id=id_)
```





## urls.py
```py
from django.urls import path
from .views import DetailsTable

urlpatterns = [
  path('details/<int:pk>', DetailsTable.as_view(), name='details_table'),
]
```

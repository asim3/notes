## عرض البيانات في جدول
```py
from django.views.generic import (
    CreateView, DetailView, ListView,
    UpdateView, DeleteView
)
from .models import Table1

class ListTable(ListView):
    # model = Table1
    queryset = Table1.objects.order_by('-id')
    paginate_by= 10
    template_name = 'show_table/show_table.html'

    
    queryset = User.objects.order_by('-id')
    extra_context = {'fields_names': [
        {'title': 'Username', 'name': 'username'},
        {'title': 'Email', 'name': 'email'},
        {'title': 'First Name', 'name': 'first_name'},
        {'title': 'Last Name', 'name': 'last_name'},
        {'title': 'Staff', 'name': 'is_staff'},
        {'title': 'Active', 'name': 'is_active'},
    ]}


    def render_to_response(self, context):
        id = self.request.user.id
        balance = AccountModel.objects.filter(fk_user__id=id).first()
        if balance is not None:
            context.update({'balance': balance.current_balance})
        return super().render_to_response(context)
```



## urls.py
```py
urlpatterns = [
  path('show/', ListView.as_view(), name='show_table'),
]
```



## models.py
```py

class Table1(models.Model):
  ...
  def fields_name(self):
    all_verbose_name = {
      "title": "العنوان",
      "date": "التاريخ",
      "age": "العمر"
    }
    return all_verbose_name
```



## templates
```django
<h2>عرض الجدول</h2>
<div class="alert text-left mb-0">
<a class="btn btn-outline-primary" href="/new">إضافة حقل جديد</a>
</div>

{% if object_list %}
    <div class="row text-light bg-primary py-1 d-none d-sm-flex">
      <div class="col-2"> {{ object_list.0.fields_name.title }} </div>
      <div class="col-3"> {{ object_list.0.fields_name.desc }} </div>
      <div class="col-3 text-center"> {{ object_list.0.fields_name.year }} </div>
      <div class="col-1 text-center"> {{ object_list.0.fields_name.age }} </div>
      <div class="col-1 text-center"> {{ object_list.0.fields_name.ser }} </div>
      <div class="col-2 text-center"> تعديل </div>
    </div>
    {% for show in object_list %}
      <div class="row row-style mb-3 mb-sm-0">

      	<div class="col-4 d-sm-none text-right font-weight-bolder">{{ object_list.0.fields_name.title }}  </div>
        <div class="col-8 col-sm-2 text-left text-sm-right">{{ show.title }}  </div>

        <div class="col-4 d-sm-none text-right font-weight-bolder">{{ object_list.0.fields_name.desc }}  </div>
      	<div class="col-8 col-sm-3 text-left text-sm-right">{{ show.desc }}  </div>

        <div class="col-4 d-sm-none text-right font-weight-bolder">{{ object_list.0.fields_name.year }}  </div>
      	<div class="col-8 col-sm-3 text-left text-sm-center">{{ show.year }}  </div>

        <div class="col-4 d-sm-none text-right font-weight-bolder">{{ object_list.0.fields_name.age }}  </div>
      	<div class="col-8 col-sm-1 text-left text-sm-center">{{ show.age }}  </div>

        <div class="col-4 d-sm-none text-right font-weight-bolder">{{ object_list.0.fields_name.ser }}  </div>
      	<div class="col-8 col-sm-1 text-left text-sm-center">{{ show.ser }}  </div>

        <div class="col-4 d-sm-none text-right font-weight-bolder">تعديل  </div>
      	<div class="col-8 col-sm-2 text-left text-sm-center"><a href="/edit/{{ show.id }}">تعديل</a>  </div>

      </div>
    {% endfor %}

{% else %}
    <div>فارغ</div>
{% endif %}
```

## templates
```django
    {% if is_paginated %}
    <ul class="pagination my-3 justify-content-center" style="direction: ltr!important;">
        {% if page_obj.has_next %}
        <li class="page-item"><a class="page-link" href="?page={{ page_obj.next_page_number }}">التالي</a></li>
        {% else %}
        <li class="page-item disabled"><span class="page-link" href="#">التالي</span></li>
        {% endif %}


        {% for i in paginator.page_range reversed %}
        {% if i > page_obj.number|add:'-3' and i < page_obj.number|add:'5' %}
            {% if page_obj.number == i %}
            <li class="page-item active"><span class="page-link">{{ i }}</span></li>
            {% else %}
            <li class="page-item"><a class="page-link" href="?page={{ i }}">{{ i }}</a></li>
            {% endif %}
        {% endif %}
        {% endfor %}


        {% if page_obj.has_previous %}
        <li class="page-item"><a class="page-link" href="?page={{ page_obj.previous_page_number }}">السابق</a></li>
        {% else %}
        <li class="page-item disabled"><a class="page-link" href="#">السابق</a></li>
        {% endif %}
    </ul>
    {% endif %}
```





## الاختصار
```py
from django.urls import path
from django.views.generic import ListView
from .models import Table1

urlpatterns = [
  path('show/', ListView.as_view(model= Table1), name='show_table'),
]
```


```py
from django.views.generic import ListView
from .models import table_1

class ShowTable(ListView):
    model = table_1
    template_name = 'show_table/show_table.html'
```

# Form View
```py
from django.utils.translation import gettext_lazy as _
from django.views.generic import FormView

from .forms import AddExcelDataForm


class AddExcelDataView(ControlPermissionMixin, FormView):
    template_name = "control/add-excel.html"
    success_url = reverse_lazy('control')
    form_class = AddExcelDataForm

    def form_valid(self, form):
        self.object = form.save()
        return super().form_valid(form)
```



## Form
```py
from django.utils.translation import gettext_lazy as _
from django.forms import Form, FileField, ValidationError
from django.core.validators import FileExtensionValidator


class AddExcelDataForm(Form):
    file = FileField(
        label=_("Please select an excel file"),
        validators=[
            FileExtensionValidator(allowed_extensions=['xlsx', 'xls']),
        ]
    )
    
    def clean_file(self):
        file = self.cleaned_data.get('file')
        if file:
            raise ValidationError("My Error !!!!!!!!!!")
        return file

    def save(self):
        instance = TableName.objects.get_or_create(title="new 1")
        instance = TableName.objects.first()
        return instance
```

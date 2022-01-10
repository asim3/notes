## excel form
```py
from django.utils.translation import gettext_lazy as _
from django.forms import Form, FileField, ValidationError
from django.core.validators import FileExtensionValidator
from openpyxl import load_workbook
from zipfile import BadZipfile


class ExcelFormBase(Form):
    file = FileField(
        label=_("Please select an excel file"),
        validators=[
            FileExtensionValidator(allowed_extensions=['xlsx', 'xls']),
        ]
    )

    def clean_file(self):
        file = self.cleaned_data.get('file')
        try:
            excel_file = load_workbook(file)
            excel_data = self.extract_excel_file(excel_file)
            self.cleaned_excel_data = self.clean_excel_data(excel_data)
        except BadZipfile as error:
            raise ValidationError(error)
        return file

    def clean_excel_data(self, excel_data):
        for name in excel_data[0].keys():
            if hasattr(self, 'clean_%s' % name):
                getattr(self, 'clean_%s' % name)(excel_data)
        return excel_data

    def extract_excel_file(self, excel_file):
        data = []
        for sheet in excel_file.sheetnames:
            for i, row in enumerate(excel_file[sheet].rows, 1):
                if i == 1:
                    continue
                row_data = {}
                for cell in row:
                    title = excel_file[sheet]["%s1" % cell.column_letter].value
                    row_data[title] = cell.value
                if row_data:
                    data.append(row_data)
        return data


class ExcelForm(ExcelFormBase):

    def clean_user_id(self, excel_data):
        all_users_ids = [row["user_id"] for row in excel_data]
        # check duplication
        if len(all_users_ids) != len(set(all_users_ids)):
            raise ValidationError(
                _("There are duplicate KFUPM ID in the excel file!"))

    def save(self):
        my_objects_list = []
        for row in self.cleaned_excel_data:
            (user, _) = Users.objects.get_or_create(
                user_id=row["user_id"])
            my_objects_list.append(MyTable(
                user=user,
                explanation="test"))
        MyTable.objects.bulk_create(my_objects_list)
```

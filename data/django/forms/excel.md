## excel form
```py
from django.utils.translation import gettext_lazy as _
from django.forms import Form, FileField, ValidationError
from django.core.validators import FileExtensionValidator
from openpyxl import load_workbook
from zipfile import BadZipfile


class ExcelFormBase(Form):
    excel_file = FileField(
        label=_("Please select an excel file"),
        validators=[
            FileExtensionValidator(allowed_extensions=['xlsx', 'xls']),
        ]
    )

    def extract_excel_file(self, excel_file):
        data = []
        for sheet in excel_file.sheetnames:
            for i, row in enumerate(excel_file[sheet].rows, 1):
                if i == 1:
                    continue
                row_data = {}
                for cell in row:
                    title = excel_file[sheet]["%s1" % cell.column_letter].value
                    title = self.clean_excel_data_keys(title)
                    row_data[title] = cell.value
                if row_data:
                    data.append(row_data)
        return data

    def clean_excel_file(self):
        raw_file = self.cleaned_data.get('excel_file')
        try:
            excel_file = load_workbook(raw_file)
            excel_data = self.extract_excel_file(excel_file)
            self.cleaned_excel_data = self.clean_excel_data(excel_data)
        except BadZipfile as error:
            raise ValidationError(error)
        return False

    def clean_excel_data(self, excel_data):
        for name in excel_data[0].keys():
            if hasattr(self, 'clean_column_%s' % name):
                getattr(self, 'clean_column_%s' % name)(excel_data)
        return excel_data

    def clean_excel_data_keys(self, title):
        if self.titles_aliases:
            if self.titles_aliases.get(title):
                return self.titles_aliases.get(title)
        return title


class ExcelForm(ExcelFormBase):
    titles_aliases = {
        "email": "rrrrrr",
        "الوقت": "my_time",
    }

    def clean_column_rrrrrr(self, excel_data):
        excel_data[2]["rrrrrr"] = "new clean R"

    def clean_column_id(self, excel_data):
        all_users_ids = [row["user_id"] for row in excel_data]
        # check duplication
        if len(all_users_ids) != len(set(all_users_ids)):
            raise ValidationError(
                _("There are duplicate ID in the excel file!"))

    def save(self):
        for row in self.cleaned_excel_data:
            print(row)
            # {'id': 1, 'name': 'test1', 'rrrrrr': 'aaa@test.com', 'my_time': '2021/10/18 07:54:15'}
            # {'id': 2, 'name': 'test2', 'rrrrrr': 'bbb@test.com', 'my_time': datetime.datetime(2023, 1, 2, 14, 50)}
            # {'id': 3, 'name': 'test3', 'rrrrrr': 'new clean R', 'my_time': datetime.datetime(2023, 1, 2, 14, 25)}
```

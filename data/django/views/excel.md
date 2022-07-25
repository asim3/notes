## Excel response
```py
from django.utils.translation import gettext_lazy as _
from django.views.generic import FormView
from django.urls import reverse_lazy
from django.utils.timezone import datetime
from django.http import FileResponse
from openpyxl.workbook import Workbook
from openpyxl.styles.fills import PatternFill
from tempfile import NamedTemporaryFile


class ExportReportsView(FormView):
    template_name = "control/reports.html"
    form_class = ExportReportsForm
    success_url = reverse_lazy('reports')

    def get_data(self, form):
        queryset = MyModel.objects.all()
        return queryset

    def get_binary_content(self, form):
        data = self.get_data(form)
        excel_file = Workbook()
        sheet = excel_file.active
        sheet.title = "Test"
        sheet.column_dimensions['A'].width = 7
        sheet.column_dimensions['B'].width = 25
        sheet.column_dimensions['B'].fill = PatternFill(patternType='gray0625')

        sheet['A1'] = "ID"
        sheet['B1'] = "Name"

        for i, obj in enumerate(data, start=2):
            sheet['A%d' % i] = str(obj.id or " ")
            sheet['B%d' % i] = str(obj.name or " ")

        file = NamedTemporaryFile(mode='w+b', prefix='django-excel-file')
        excel_file.save(file.name)
        return file

    def get_file_name(self):
        return 'excel-%s.xlsx' % datetime.now().strftime('%Y-%m-%d-%H-%M-%S')

    def form_valid(self, form):
        return FileResponse(
            streaming_content=self.get_binary_content(form),
            as_attachment=True,
            filename=self.get_file_name(),
            content_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet")
```
## Read excel file
[excel](http://www.python-excel.org/)

`pip install openpyxl`
```python
from openpyxl import load_workbook


e_file = load_workbook(self.object.post_file.path) 
# OR
e_file = load_workbook("full_path") 

for sheet in e_file.sheetnames:
    print(sheet.lower(), '\n')
    print(sheet.title(), '\n')
    for row in e_file[sheet].rows:
        for cell in row:
            print('\n', cell.value)
```


## write an excel file
```py
from openpyxl.workbook import Workbook
from openpyxl.writer.excel import save_virtual_workbook


excel_file = Workbook()
sheet_1 = excel_file.active
sheet_1.title = "My Sheet Name"
sheet_1.column_dimensions['A'].width = 5
sheet_1.column_dimensions['B'].width = 15

data = range(1, 40)
for i, student in enumerate(data, start=2):
    print('A%d' % i, 'asim  %d' % student)
    print('B%d' % i, 'bader %d' % student)

sheet_2 = excel_file.create_sheet(title="Pi Sheet Name")
sheet_2['F5'] = 3.14

excel_bytes = save_virtual_workbook(excel_file)

filename = 'pledge-%s.xlsx' % datetime.now().strftime('%s')
content_type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
response = HttpResponse(excel_bytes, content_type=content_type)
response['Content-Disposition'] = 'attachment; filename="%s"' % filename
return response
```

[FPDF for Python](https://pyfpdf.readthedocs.io/en/latest/)


## install
```bash
pip install fpdf==1.7


python3 -m venv .venv \
  && source ./.venv/bin/activate \
  && pip install fpdf \
  && code .
```



## new PDF
```py
from fpdf import FPDF


orientation = "P" or "L"  # portrait or landscape
unit = 'pt'  # measure units: pt - mm - cm - in
page_format = 'A4'  # page formats: A4 - Letter - Legal

my_pdf = FPDF(orientation, unit, page_format)


my_pdf.add_page()

# important
my_pdf.set_font('Arial', style='B', size=16)
"""
font size is given in points, it is the only exception

standard fonts are:
    - Courier
    - Helvetica
    - Arial
    - Times
    - Symbol
    - ZapfDingbats

styles are:
    - B: bold
    - I: italic
    - U: underline
"""


# A cell is a rectangular area
width = 200  # 0 = page width
height = 50  # default = 0
my_pdf.cell(width, height, 'Hello World!')



my_pdf.write(50, 'Visit ')
my_pdf.write(50, 'www.fpdf.org', 'http://www.fpdf.org')


my_pdf.output('My-first PDF.pdf', 'F')
"""
I or D: write the document to sys.stdout. default if no file name is given.
F: save to a local file with the given name (may include a path). default if a file name is given.
S: return the document as a byte string.
"""
```


## return byte string
```py
byte_data = my_pdf.output(dest="S")
```


## modify only
```txt
pyPdf  2005 - 2010 -> Python 2
PyPDF2 2011 - 2016 -> abandoned
PyPDF3 renamed to PyPDF4

The PyPDF2 package is great for reading and modifying 
existing PDF files, but it has a major limitation: you 
can’t use it to create a new PDF file.
```

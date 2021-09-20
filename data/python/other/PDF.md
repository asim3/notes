[FPDF for Python](https://pyfpdf.readthedocs.io/en/latest/)

## FPDF
`pip install fpdf`
```py
from fpdf import FPDF

pdf = FPDF()
pdf = FPDF('P', 'mm', 'A4')
# P = portrait or L = landscape
# measure units: pt - mm - cm - in
# page formats: A4 - Letter - Legal

pdf.add_page()

# it is mandatory to select a font before adding a text
pdf.set_font('Arial', 'B', 16)
# font size is given in points, it is the only exception
# standard fonts are Times, Courier, Symbol and ZapfDingbats.


pdf.cell(40, 10, 'Hello World!')
borders = 1
next_line = 1
dimensions = 'centered' or 'aligned'
pdf.cell(40, 10, 'Hello World!', borders,)


pdf.set_font('Times', '', 12)

# Output justified text
txt = open(name, 'rb').read().decode('latin-1')
pdf.multi_cell(0, 5, txt)

pdf.output('tuto1.pdf', 'F')
```


## header and footer
```py
from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        # Logo
        self.image('logo_pb.png', 10, 8, 33)
        # Arial bold 15
        self.set_font('Arial', 'B', 15)
        # Move to the right
        self.cell(80)
        # Title
        self.cell(30, 10, 'Title', 1, 0, 'C')
        # Line break
        self.ln(20)

    def footer(self):
        # Position at 1.5 cm from bottom
        self.set_y(-15)
        # Arial italic 8
        self.set_font('Arial', 'I', 8)
        # add text
        self.cell(0, 10, 'Page ' + str(self.page_no()) + '/{nb}', 0, 0, 'C')


pdf = PDF()
pdf.alias_nb_pages()
pdf.add_page()
pdf.set_font('Times', '', 12)
for i in range(1, 41):
    pdf.cell(0, 10, 'Printing line number ' + str(i), 0, 1)
pdf.output('tuto2.pdf', 'F')
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

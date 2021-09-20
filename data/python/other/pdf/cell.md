## cell
```py
from fpdf import FPDF


my_pdf = FPDF(unit='pt')
my_pdf.add_page()
my_pdf.set_font('Arial')


width = 100  # 0 = page width
height = 50  # default = 0
my_pdf.cell(width, height, txt='My border', border=True)


next_position = 1
# 0: to the right
# 1: to the beginning of the next line
# 2: below


my_pdf.cell(width, height, txt='next line 1', ln=next_position)
my_pdf.cell(width, height, txt='next line 2', ln=next_position)
my_pdf.cell(width, height, txt='next line 3', ln=next_position)


my_pdf.cell(width, height, txt='My Link', link='https://google.com')


my_pdf.cell(width, height, 'border 2', border="TL")
my_pdf.cell(width, height, 'border 3', border="TBR")


my_pdf.cell(0, 100, fill=True, ln=1)
my_pdf.set_fill_color(r=255, g=0, b=255)
my_pdf.cell(0, 10, fill=True, ln=1)


my_pdf.cell(0, height, 'align left  ', align="L", ln=1)
my_pdf.cell(0, height, 'align right ', align="R", ln=1)
my_pdf.cell(0, height, 'align center', align="C", ln=1)


my_pdf.output('my_cell.pdf', 'F')
```



## multi line cell
```py
from fpdf import FPDF


my_pdf = FPDF(unit='pt')
my_pdf.add_page()
my_pdf.set_font('Arial')


width = 200
line_height = 20
my_text = 'My line 1 \nMy line 2 \nMy line 3'

my_pdf.multi_cell(width, line_height, txt=my_text, border=True)
my_pdf.multi_cell(width, line_height, txt=my_text, border=True, align="L")
my_pdf.multi_cell(width, line_height, txt=my_text, border=True, align="R")
my_pdf.multi_cell(width, line_height, txt=my_text, border=True, align="C")


my_text = """
My line 123 456 789 qwerty asdfg zxcvb 1.

My line 1234 56789 qwerty asdfg zxcvb 2.
My line 123456789 qwertyasdfg zxcvb 3.
My line 1 .\nMy line 2 .\nMy line 3.
"""

my_pdf.multi_cell(width, line_height, txt=my_text, border=True)


my_pdf.output('my_multi_cell.pdf', 'F')
```

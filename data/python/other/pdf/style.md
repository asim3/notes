## style
```py
from fpdf import FPDF


my_pdf = FPDF(unit='pt')
my_pdf.add_page()
my_pdf.set_font('Arial')

my_pdf.set_text_color(r=0, g=0, b=255)

my_pdf.cell(100, 50, txt='My style 1', border=True, fill=True, ln=1)


my_pdf.set_draw_color(r=255, g=0, b=0)  # border color
my_pdf.set_fill_color(r=0, g=255, b=0)


my_pdf.cell(200, 100, txt='My style 2', border=True, fill=True, ln=1)


my_pdf.output('my_style.pdf')
```

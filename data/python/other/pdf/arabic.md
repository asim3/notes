## arabic
```py
from fpdf import FPDF


my_pdf = FPDF(unit='pt')
my_pdf.add_page()

my_pdf.add_font('Cairo', '', '/tmp/fonts/cairo/Cairo-Regular.ttf', uni=True)
my_pdf.set_font('Cairo', '', 14)


my_pdf.cell(0, 36, txt='السلام عليكم و رحمة الله و بركاته',
            align="R", border=True, ln=1)

my_pdf.multi_cell(100, 50, txt='السلام عليكم و رحمة الله و بركاته',
                  align="R", border=True)


my_pdf.output('my_arabic.pdf')
```

> السلام عليكم و رحمة الله و بركاته   
> ‫مالسلا‬ ‫مكيلع‬ ‫و‬ ‫ةمحر‬ ‫هللا‬ ‫و‬ ‫هتاكرب‬

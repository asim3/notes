## image
```py
from fpdf import FPDF


my_pdf = FPDF(unit='pt')
my_pdf.add_page()
my_pdf.set_font('Arial')

my_pdf.cell(100, 50, txt='My image', border=True)


image_path = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Mozilla_Firefox_logo_2013.png"
my_pdf.image(image_path, x=None, y=None, w=0, h=0)
# x & y If not specified or equal to None, the current ordinate is used
# w & h If not specified or equal to zero, it is automatically calculated.


page_width_a3 = 841.89
page_width_a4 = 595.28
page_width_a5 = 420.94
page_width_letter = 612
page_width_legal = 612

image_width = 250
x_coordinate = (page_width_a4 / 2) - (image_width / 2)
my_pdf.image(image_path, x=x_coordinate, w=image_width)


my_pdf.output('my_image.pdf')
```

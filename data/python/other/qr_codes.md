## QR codes
```py
pip install Pillow qrcode
```


## QR codes
```py
from qrcode import QRCode

my_qr_code = QRCode()
my_qr_code.add_data('Some data here')


# print in CLI as strint
my_qr_code.print_ascii()
```


## image bytes
```py
from fpdf import FPDF
from qrcode import QRCode
from io import BytesIO
from tempfile import NamedTemporaryFile


class BytesQRCode(QRCode):
    def get_image_bytes(self, **kwargs):
        pil_image = super().make_image(**kwargs)
        with BytesIO() as bytes_file:
            pil_image.save(bytes_file, format='PNG')
            return bytes_file.getvalue()


my_qr_code = BytesQRCode()
my_qr_code.add_data('Some data here')


temporary_file = NamedTemporaryFile(suffix=".png")
temporary_file.write(my_qr_code.get_image_bytes())
temporary_file.seek(0)
temporary_file.name
temporary_file.close()
```


## QR code PDF
```py
from fpdf import FPDF
from qrcode import QRCode
from io import BytesIO
from tempfile import NamedTemporaryFile


class BytesQRCode(QRCode):
    def get_image_bytes(self, **kwargs):
        pil_image = super().make_image(**kwargs)
        with BytesIO() as bytes_file:
            pil_image.save(bytes_file, format='PNG')
            return bytes_file.getvalue()


my_pdf = FPDF(unit='pt')
my_pdf.add_page()
my_pdf.set_font('Arial')

my_pdf.cell(0, 50, txt='My QR codes', border=True, ln=1)

my_qr_code = BytesQRCode()
my_qr_code.add_data('Some data here')

temporary_file = NamedTemporaryFile(suffix=".png")
temporary_file.write(my_qr_code.get_image_bytes())
temporary_file.seek(0)

image_path = temporary_file.name
image_width = 250
page_width_a4 = 595.28
x_coordinate = (page_width_a4 / 2) - (image_width / 2)

my_pdf.image(image_path, x=x_coordinate, w=image_width)


my_pdf.output('my_QR_codes.pdf')

temporary_file.close()
```

## Add file
```py
from django.core.files.uploadedfile import SimpleUploadedFile


page = Page()
page.title = "ccccccc"
page.language = "en"
page.html = SimpleUploadedFile(name="home.html",  content="<h1>text</h1>".encode())
page.save()
```

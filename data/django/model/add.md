## Add file
```py
from django.core.files.uploadedfile import SimpleUploadedFile


page = Page()
page.title = "ccccccc"
page.language = "en"
page.html = SimpleUploadedFile(name="home.html",  content="<h1>text</h1>".encode())
page.save()
```


```py
from django.core.files.uploadedfile import SimpleUploadedFile


image = SimpleUploadedFile("file.jpg", b"file_content", content_type="image/jpeg")
image = SimpleUploadedFile("file.png", b"file_content", content_type="image/png")
video = SimpleUploadedFile("file.mp4", b"file_content", content_type="video/mp4")
```

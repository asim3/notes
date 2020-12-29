# redirect
```py
from django.http import HttpResponseRedirect
from django.urls import reverse_lazy


def view():
    return HttpResponseRedirect('https://google.com')
    # OR
    return HttpResponseRedirect(reverse_lazy('home'))
    # OR
    return HttpResponseRedirect(reverse_lazy('admin:index'))
```

# response file
```py
from django.http import HttpResponse


def view():
    data = 'ABcd 1234\n1\n\t2\n\t\t3\n\n'
    
    # MIME types:
    content_type = 'text/plain'
    # content_type = 'image/jpeg'
    # content_type = 'image/png'
    # content_type = 'audio/*'
    # content_type = 'audio/mp3'
    # content_type = 'video/mp4'
    # content_type = 'application/*'
    # content_type = 'application/json'
    # content_type = 'application/octet-stream'
    # content_type = 'application/zip'
    # content_type = 'application/pdf'
    # content_type = 'application/vnd.ms-excel'
    # content_type = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'

    response = HttpResponse(data, content_type=content_type)
    
    filename = 'my-file.txt'
    filename = 'pledge-%s.pdf' % datetime.now().strftime('%s')
    response['Content-Disposition'] = 'attachment; filename="%s"' % filename
    return response
```


# response zip file
```py
from django.http import HttpResponse
from io import BytesIO 
from zipfile import ZipFile


def view():
    temporary_file = BytesIO()
    zip = ZipFile(temporary_file, "a")
    zip.writestr("test.txt", "My Test Text")
            
    # fix for Linux zip files read in Windows
    for file in zip.filelist:
        file.create_system = 0
    zip.close()

    temporary_file.seek(0)    
    zip_bytes = temporary_file.read()
    temporary_file.close()

    content_type = 'application/zip'
    filename = 'pledge-%s.zip' % datetime.now().strftime('%s')
    response = HttpResponse(zip_bytes, content_type=content_type)
    response['Content-Disposition'] = 'attachment; filename="%s"' % filename
    return response
```
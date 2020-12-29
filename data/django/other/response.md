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
    response['Content-Disposition'] = 'attachment; filename="%s"' % filename
    return response
```
[xhtml 2 pdf](https://github.com/xhtml2pdf/xhtml2pdf)

## HTML to PDF
```py
from django.template.loader import get_template
from xhtml2pdf import pisa
from io import BytesIO

from .utils import get_absolute_path


def template_to_pdf(template_name, context=None):
    template = get_template(template_name)

    html = template.render(context or {})  

    data = BytesIO()

    pisa.CreatePDF(html.encode("UTF-8"), data , encoding='UTF-8',
        link_callback=get_absolute_path)
    data.seek(0)
    return data
```


## response PDF
```py
from django.http import HttpResponse
from .utils import template_to_pdf


data = template_to_pdf('student/pledge.html')
filename = 'pledge.pdf'
response = HttpResponse(data.read(), content_type='application/pdf')
response['Content-Disposition'] = 'attachment; filename="%s"' % filename
return response
```


## Arabic Language
> add `<pdf:language name="arabic"/>` to the template HTML.body


## utils
```py
from django.contrib.staticfiles import finders
from django.conf import settings
import posixpath
import os


def get_absolute_path(uri, rel):
    """
    Convert HTML URIs to absolute system paths so xhtml2pdf can access those
    resources.

    Callback to allow xhtml2pdf/reportlab to retrieve Images,Stylesheets, etc.
    `uri` is the href attribute from the html link element.
    `rel` gives a relative path, but it's not used here.
    
    source: xhtml2pdf.django-xhtml2pdf.django_xhtml2pdf.utils.py
    """

    if uri.startswith("http://") or uri.startswith("https://"):
        return uri

    if settings.DEBUG:
        newpath = uri.replace(settings.STATIC_URL, "").replace(settings.MEDIA_URL, "")
        normalized_path = posixpath.normpath(newpath).lstrip('/')
        absolute_path = finders.find(normalized_path)  
        if absolute_path:    
            return absolute_path
        
    if settings.MEDIA_URL and uri.startswith(settings.MEDIA_URL):
        path = os.path.join(settings.MEDIA_ROOT,
                            uri.replace(settings.MEDIA_URL, ""))
    elif settings.STATIC_URL and uri.startswith(settings.STATIC_URL):
        path = os.path.join(settings.STATIC_ROOT,
                            uri.replace(settings.STATIC_URL, ""))
        if not os.path.exists(path):
            for d in settings.STATICFILES_DIRS:
                path = os.path.join(d, uri.replace(settings.STATIC_URL, ""))
                if os.path.exists(path):
                    break
    else:
        raise UnsupportedMediaPathException(
                                'media urls must start with %s or %s' % (
                                settings.MEDIA_URL, settings.STATIC_URL))
    return path
```

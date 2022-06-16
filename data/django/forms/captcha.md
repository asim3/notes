## Security check
[captcha](https://django-simple-captcha.readthedocs.io/en/latest/usage.html)

## install
```bash
pip install django-simple-captcha

# Pillow requirements
apt-get -y install libz-dev libjpeg-dev libfreetype6-dev python-dev
```


## settings.py
```py
INSTALLED_APPS = (
    # ...
    'captcha',
)
```


## urls.py
```py
from django.urls import path, include


urlpatterns = [
    # ...
    path('captcha/', include('captcha.urls')),
]
```


## Form
```python
from django.utils.translation import gettext_lazy as _
from django import forms
from captcha.fields import CaptchaField


class HomeForm(forms.Form):
    integer = forms.IntegerField(label='ID')
    subject = forms.CharField(max_length=100)
    my_text = forms.CharField(label='Your name', required=False)
    captcha = CaptchaField(label=_("Type the characters seen in the image below"))


class HomeModelForm(forms.ModelForm):
    captcha = CaptchaField(label=_("Type the characters seen in the image below"))

    class Meta:
        model = MyModel
```

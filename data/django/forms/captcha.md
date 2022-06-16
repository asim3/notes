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
```py
from django.utils.translation import gettext_lazy as _
from django import forms
from django.contrib.auth.models import User
from captcha.fields import CaptchaField


class HomeForm(forms.Form):
    subject = forms.CharField(max_length=100)
    my_text = forms.CharField(label='Your name', required=False)
    captcha = CaptchaField(
        label=_("Type the characters seen in the image below"))


class HomeModelForm(forms.ModelForm):
    captcha = CaptchaField(
        label=_("Type the characters seen in the image below"))

    class Meta:
        model = User
        fields = ['username', 'first_name']
```


## template
```jinja
<form method="POST" enctype="multipart/form-data">

    {% csrf_token %}

    {% for form_input in form %}
        {% if not form_input.is_hidden %}

            <div class="form-group pb-3">
                <h5 class="px-2">{{ form_input.label }}:</h5>
                
                {{ form_input.label_tag }}
                {{ form_input.as_widget }}
                
                {% if form_input.help_text %}
                    <p>{% trans 'help' %}: {{ form_input.help_text }}</p>
                {% endif %}
                
                {{ form_input.errors }}

            </div>
        
        {% endif %}
    {% endfor %}

    <input id="main_submit" class="main-button" type="submit" value="{% trans 'send' %}">

</form>
```

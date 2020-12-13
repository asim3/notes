Form
```python
from django import forms

class HomeForm(forms.Form):
     integer = forms.IntegerField(label='ID')
     float = forms.FloatField()
     subject = forms.CharField(max_length=100)
     password = forms.CharField(widget=forms.PasswordInput(attrs={"rows":2, "style": "color:red;"}))
     message = forms.CharField(label='Your name', required=False)
     message = forms.EmailField(label='E-Mail')
     dropBox = forms.ChoiceField(choices=[('type1', 'Type 1'), ('type2', 'Type 2')])
     textarea = forms.CharField(widget=forms.Textarea(attrs={"rows":2, "style": "color:red;"})) # set the style of <textarea >

     new = forms.IntegerField()
     new = forms.FloatField()
     new = forms.DateField()
     new = forms.TimeField()
     new = forms.DateTimeField()
     new = forms.FileField()
     new = forms.ImageField()
     new = forms.BooleanField()
     new = forms.NullBooleanField()
     new = forms.TypedChoiceField()
     new = forms.MultipleChoiceField()
     new = forms.TypedMultipleChoiceField()
     new = forms.ComboField() # A Field whose clean() method calls multiple Field clean() methods.
     new = forms.GenericIPAddressField()
```


[widgets](https://docs.djangoproject.com/en/2.1/ref/forms/widgets/)


Form from a Model
```python
from django.forms import ModelForm
from .models import Table1

class Table1ModelForm(ModelForm):
    email = forms.EmailField()
    next = forms.URLField(required=False)

    class Meta:
        model = Table1
        fields = ['id', 'title']

    def clean_title(self):
      title = self.cleaned_data.get('title')
      if title.lower() == 'abc':
        raise forms.ValidationError("This is not a valid title")
      return title
```


`views.py`
```python
from django.shortcuts import render
from .forms import Table1ModelForm

def test_view(request):
    form = Table1ModelForm(request.POST or None)
    if form.is_valid():
        form.save()

    context = (
        'form': form,
    )
    return render(request, 'user/form.html', context)
```

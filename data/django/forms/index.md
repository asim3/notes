## Form
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
```


## Form style
```python
from django import forms

class HomeForm(forms.Form):
    textarea = forms.CharField(
        widget=forms.Textarea(
            attrs={
                'class': 'special',
                "style": "color:red;",
                "rows":2, 
            }
        )
    ) 
```


## Form from a Model
```python
from django.forms import ModelForm
from .models import Table1

class Table1ModelForm(ModelForm):
    email = forms.EmailField()
    next = forms.URLField(required=False)

    class Meta:
        model = Table1
        fields = '__all__'
        fields = ['id', 'title']
        exclude = ['title']
        labels = {'email': _('Writer'),}
        help_texts = {'email': _('Some useful help text.'),}
        error_messages = {
            'email': {
                'max_length': _("This writer's name is too long."),
            },
        }
        widgets = {'email': Textarea(
            attrs={'class': "mx-4", 'cols': 80, 'rows': 2}),
        }
        field_classes = {'slug': MySlugFormField,}

    def clean_title(self):
      title = self.cleaned_data.get('title')
      if title.lower() == 'abc':
        raise forms.ValidationError("This is not a valid title")
      return title

    def clean(self):
        """
        Hook for doing any extra form-wide cleaning after Field.clean() has been
        called on every field. Any ValidationError raised by this method will
        not be associated with a particular field; it will have a special-case
        association with the field named '__all__'.
        """
        if False:
            raise forms.ValidationError("Data is not valid")
        return self.cleaned_data

    def save(self, commit=True):
        instance = super().save(commit=False)
        instance.approved_date = datetime.now()
        instance.save()
        return instance
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

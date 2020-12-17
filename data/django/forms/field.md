
```python
from django import forms

class HomeForm(forms.Form):
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

    # multiple
    new = forms.MultipleChoiceField()
    new = forms.TypedMultipleChoiceField()

    new = forms.GenericIPAddressField()
    
    # A Field whose clean() method calls multiple Field clean() methods.
    new = forms.ComboField() 
```

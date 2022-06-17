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
from django.forms import ModelForm, TextInput, HiddenInput, ValidationError, EmailInput
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
        field_classes = {'slug': MySlugFormField,}

        widgets = {
            'name' : TextInput(attrs={'placeholder': _("الاسم")}),
            'phone': TextInput(attrs={'placeholder': _("رقم الجوال")}),
            'email': EmailInput(attrs={'placeholder': _("البريد الإلكتروني")}),
            'text' : Textarea(attrs={'class': "mx-4", 'cols': 80, 'rows': 2}),
            'advertisement': HiddenInput(),
        }
        

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


## template as card
```jinja
<div class="card" style="border-radius: 1rem;">
    <div class="card-body p-5 text-center">


        <h2 class="fw-bold mb-2 text-uppercase">
            {% trans 'Login'%}
        </h2>


        {{ form.non_field_errors }}

        
        <form method="POST" enctype="multipart/form-data">

            {% csrf_token %}

            {% for form_input in form %}
                {% if not form_input.is_hidden %}

                    <div class="form-group pb-4">
                        <h5>{{ form_input.label }}:</h5>

                        {{ form_input.as_widget }}

                        {{ form_input.errors }}

                    </div>

                {% endif %}
            {% endfor %}


            <p class="small my-4">
                <a href="{% url "user-register" %}">{% trans 'Forgot password?'%}</a>
            </p>


            <button class="btn btn-outline-primary btn-lg px-5" type="submit">
                {% trans 'Login'%}
            </button>

        </form>


        <div class="mt-5">
            {% trans "Don't have an account?" %}
            <a href="{% url "user-register" %}" class="text-black-50 fw-bold">{% trans 'Sign Up'%}</a>
        </div>

    </div>
</div>
```
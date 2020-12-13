عرض الصفحة الرئيسية
```python
from django.shortcuts import render, redirect

def showGet(request):
	return render(request, 'index.html')
```


GET & POST data
```python
def showGet(request):
	if request.GET.get('title', False):
			context['title'] = request.GET['title']

  if request.GET['title']: # Error if GET['title'] is not set
```


```python
cleaned_data['foo']
# exception, KeyError: 'foo'
cleaned_data.get('foo')
# No exception, just get nothing back.
cleaned_data.get('foo', "Sane Default")
# 'Sane Default'
```




Post
```python
from home.forms import HomeForm

def showPost(self, request):
	form = HomeForm(request.POST or None, initial=dict, instance=obj)
	# if request.method == 'POST':
	if form.is_valid():
		username = form.cleaned_data.get('username')
		# ...
	context = {
		'form': form,
	}
	return render(request, 'form.html', context)
```


JSON
```python
from django.http import JsonResponse, HttpResponse, HttpResponseRedirect

def showItem(e):
   data = {"type": "group","id": "555","img": "7.jpg"}
   return JsonResponse(data, safe=False)
```


```python
from django.http import JsonResponse

class CheckFontExistView(DetailView):
	model = Font
	slug_field = 'name'
	fields = ['name', 'file']

	def render_to_response(self, context, **response_kwargs):
		data = {"name": self.object.name,"src": self.object.file.url}
		return JsonResponse(data, safe=False)
```

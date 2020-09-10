## User 
```python
from django.shortcuts import render, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout
```


## Login
```python
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login

def login_view(request):
   next = request.GET.get('next')
   form = AuthenticationForm(data=request.POST or None)
   if form.is_valid():
      username = form.cleaned_data.get('username')
      password = form.cleaned_data.get('password')
      user = authenticate(request, username=username, password=password)
      if user is not None:
         login(request, user)
         if next:
            return redirect(next)
         return redirect('/')
   return render(request, 'user/login.html', {'form': form})
```



## Logout
```python
from django.contrib.auth import logout

def logout_view(request):
   logout(request)
   return render(request, 'user/logout.html')
```

	  
## Signup (register)
```python
from django.shortcuts import render, redirect
```


```python
def signup_view(request):
   if request.method == 'POST':
      form = UserCreationForm(request.POST)
      if form.is_valid():
            user = form.save()
            login(request, user)
```

	
## التأكد من دخول العميل
```python
if request.user.is_authenticated:
    # ...
else:
    # ...
```


## require login
Functions require login
```python
from django.contrib.auth.decorators import login_required
```


```python
@login_required(login_url="/login_page/")
def my_view():
     # ...
```




## !!!
```python
from django.shortcuts import render, redirect

from django.contrib.auth import (
    authenticate,
    get_user_model,
    login,
    logout
)


def login_view(request):
    next = request.GET.get('next')
    form = UserLoginForm(request.POST or None)
    if form.is_valid():
        username = form.cleaned_data.get('username')
        password = form.cleaned_data.get('password')
        user = authenticate(username=username, password=password)
        login(request, user)
        if next:
            return redirect(next)
        return redirect('/')

    context = {
        'form': form,
    }
    return render(request, "login.html", context)


def register_view(request):
    next = request.GET.get('next')
    form = UserRegisterForm(request.POST or None)
    if form.is_valid():
        user = form.save(commit=False)
        password = form.cleaned_data.get('password')
        user.set_password(password)
        user.save()
        new_user = authenticate(username=user.username, password=password)
        login(request, new_user)
        if next:
            return redirect(next)
        return redirect('/')

    context = {
        'form': form,
    }
    return render(request, "signup.html", context)


def logout_view(request):
    logout(request)
    return redirect('/')
```

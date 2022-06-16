```plaintext
navbar navbar-expand
navbar navbar-expand-sm
navbar navbar-expand-md
navbar navbar-expand{-sm|-md|-lg|-xl}
```

```plaintext
navbar-dark
navbar-light bg-light
```

```plaintext
fixed-top
fixed-bottom
sticky-top
```


```plaintext
navbar
 |
 |-- navbar-brand
 |-- navbar-toggler
 |     |
 |     `-- navbar-toggler-icon
 |
 `-- collapse navbar-collapse
       |
       `-- <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
				      <li class="nav-item active">
				        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link" href="#">Link</a>
				      </li>
				      <li class="nav-item">
				        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
				      </li>
				    </ul>
				    <form class="form-inline my-2 my-lg-0">
				      <input class="form-control mr-sm-2" type="search" placeholder="Search">
				      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
				    </form>
```


```html
<nav class="nav">
  <a class="nav-item nav-link active" href="#">Active</a>
  <a class="nav-item nav-link" href="#">Link</a>
  <a class="nav-item nav-link" href="#">Link</a>
  <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
</nav>
```



```plaintext
nav justify-content-center
nav justify-content-end
nav flex-column
```


```plaintext
nav nav-tabs
nav nav-pills
nav nav-pills nav-fill
nav nav-pills nav-justified
```


```html
<div class="navbar navbar-expand-md navbar-light bg-light">
  <div class="container">
    <div class="navbar-brand">Brand Name</div>
    <div class="navbar-toggler">
      <span class="navbar-toggler-icon"></span>
    </div>
    <div class="collapse navbar-collapse">
        <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
		      <li class="nav-item active">
		        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link" href="#">Link</a>
		      </li>
		      <li class="nav-item">
		        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
		      </li>
		    </ul>
		    <form class="form-inline my-2 my-lg-0">
		      <input class="form-control mx-sm-2" type="search" placeholder="Search">
		      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		    </form>
    </div>
  </div>
</div>
```



```html
<ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" href="#">Active</a>
  </li>
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
```

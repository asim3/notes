## بطاقة
```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-header bg-transparent border-success">Header</div>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">...</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
	<div class="card-footer bg-transparent border-success">Footer</div>
</div>
```



## بطاقات متلاصقات
```plaintext
card-group
```


## بطاقات متباعدات
```plaintext
card-deck
```

## المحتوى
```plaintext
(card-group, card-deck)
 |
 `-- card
	|-- card-img-top
	|-- card-header
	|-- card-footer text-muted
	`-- card-body
		|
		|-- card-title
		|-- card-subtitle mb-2 text-muted
		|-- card-text
		`-- card-link
```

## قائمة
```html
<div class="card" style="width: 18rem;">
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
</div>
```


## 
```html
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
```



## 
```html
<div class="card">
  <h5 class="card-header">Featured</h5>
  <div class="card-body">
    <h5 class="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
```

```
const foo = 1, bar = 2;
document.title = 'title'
typeof 'a' // string
typeof true // boolean
typeof setTimeout // function
typeof [] // object
window.scrollTo({ top: 0 })
```


#### Get Element
```
document.querySelector('#root')
document.getElementById('root')

document.getElementById('id').style.display = 'block'
```


#### find in String
```
text.includes(word)
text.replace(/( |\"|\')/g, "")
```

```
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const found = paragraph.match(/(quick|lazy)/g);
console.log(found); // Array ["quick", "lazy"]
```


#### New HTML Element
```
const btn = document.createElement("BUTTON")
btn.innerHTML = "CLICK ME"
btn.style = "margin: 10px;"
document.body.appendChild(btn)
```


#### new head script
```
var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = function() { ... }
script.onerror = function() { ... }
head.appendChild(script);
script.src = "https://localhost/"+ file_name +".js";
```

#### Events
```
document.addEventListener('click', function (event) {
	// console.log(event.target)
  if(event.target.dataset.delete) {
    console.log(event.target.dataset.delete)
  }
})
```


#### Time Loop
```
const func = (value, value_2) =>  console.log(value + value_2)
setTimeout(func, 1000, 'val_1', 'val_2')
```


```
let copy_timer = 0
clearTimeout(copy_timer)
copy_timer = setTimeout(() => { copy_clicks = 0 }, 1000)
requestAnimationFrame(func)
cancelAnimationFrame(func)

for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}
```

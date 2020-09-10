## Get Element Style
```js
window.getComputedStyle(obj).fontSize
```



## window location href
```js
// get
window.location.href // https://www.w3.com/js/location.asp 
window.location.hostname // www.w3schools.com
window.location.protocol // https
window.location.pathname // /js/location.asp 

// set
// adds an item to your history
window.location.href = link          
// replaces the current history item so you can't go back to it.
window.location.replace(link)   
window.location.reload()
_____________________
// open new window
window.open(URL)   
myWindow = window.open(URL, "_blank", "width=200, height=100")   
myWindow.close();   // Closes the new window
```



## add to window history
```js
var new_href = window.location.href + "/my-path"
window.history.pushState("my_obj", null, new_href);

// run by clicking back button or calling history.back()
window.onpopstate = function(event) {
    alert("my_obj: " + JSON.stringify(event.state))
};

window.history.back()
```




```js
const aaa = {
  bbb : function(i) {
    return i
  },
  ccc: function(i) {
    console.log(i)
  }
}
aaa['bbb'](3) // 3
let nnn = 'bbb'
aaa[nnn](3) // 3

console.log('bbb' in aaa) // ture
console.log('uuu' in aaa) // false
```



## Invoked Function
Immediately Invoked Function Expression (IIFE)
```js
(function(f) {
  console.log('first fun')
  console.log(f(222))
})(function(r) {
  console.log(r, '222 fun')
  return (function(c) {
    console.log(c, '333 fun')
    return function(q) {
      console.log(q, '444 fun')
      return 555
    }
  })(333)(444)
})

// first fun
// 222 '222 fun'
// 333 '333 fun'
// 444 '444 fun'
// 555
```



```js
(function(my_function) {
    var timer = 0;
    var check_func = function() {
        if("my_method" in MyObject) {
            my_function();
        }
        else {
            clearTimeout(timer);
            timer = setTimeout(check_func, 100);
            console.log('my_method not in MyObject');
        }
    };
    check_func();
})(function() {
  console.log('my_method is in MyObject.');
});
```

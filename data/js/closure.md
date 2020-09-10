## Closures


## Error
```js
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function() {
    // each should log its value.
    console.log(">>> " + i);
  };
}

for (var j = 0; j < 3; j++) {
  // run each one
  funcs[j]();
}

// It outputs this:
// >>> 3
// >>> 3
// >>> 3
```


## Closures
Classic solution: Closures
```js
var funcs = [];

// @@@@@@@ new
function LogFunction(i) {
    return function() {
        console.log(">>> " + i);
    };
}

for (var i = 0; i < 3; i++) {
  // @@@@@@@ new
  funcs[i] = LogFunction(i);
  // funcs[i] = function() {
  //   // each should log its value.
  //   console.log(">>> " + i);
  // };
}

for (var j = 0; j < 3; j++) {
  // run each one
  funcs[j]();
}

// It outputs this:
// >>> 0
// >>> 1
// >>> 2
```



## bind
Function.prototype.bind()
```js
var funcs = [];

for (var i = 0; i < 3; i++) {
  funcs[i] = function(zz) {
    // each should log its value.
    console.log(">>> " + zz);
    // @@@@@@@ new
  }.bind(this, i);
}

for (var j = 0; j < 3; j++) {
  // run each one
  funcs[j]();
}
```



## bind
Function.prototype.bind()
```js
function vv() {
  console.log(this);
}.bind("asim");
// SyntaxError: Unexpected token '.'
```


```js
(function vv() {
  console.log(this);
}).bind(">>> asim")();

// String { ">>> asim" }
```


```js
var ff = function() {
  console.log(this);
}.bind(">>> Asim");

ff();
// String { ">>> Asim" }
```

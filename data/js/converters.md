## Strings

## التحويل
```js
"get".toUpperCase()
"GET".toLowerCase()


parseInt("10.33")     // 10
parseInt("He was 40") // NaN
parseInt("11", 2)    // 3

parseFloat("10.00") // 10
parseFloat("10.33") // 10.33
parseFloat("34 45 66") // 34
parseFloat("He was 40") // NaN

var x = 9.656;
x.toFixed(0);           // returns 10
x.toFixed(2);           // returns 9.66
x.toFixed(4);           // returns 9.6560
```


```js
var num = 15
num.toString()  // 15
num.toString(2) // 1111
```


```js
isNaN('123')    // false
isNaN('Hello')  // true
```


## تبديل الحروف
```js
JSON.stringify(js_files)
  .replace(/[{}"']/g, ' ')
  .replace(/,/g, '<br>')
```



## تحويل اي شي الى مصفوفة
```js
Array.from(document.querySelector('#root').children)
Array.from('foo')
Array.from([1, 2, 3], x => x + x)
```

## JSON

## text => js object
```js
JSON.parse('{ "name":"John", "age":30, "city":"New York"}')
```


## js object => text
```js
JSON.stringify(obj)
```


```js
const text = 'The quick brown fox jumps over the lazy dog.';
text.includes('fox')
text.indexOf('quick')
text.indexOf('quick', 20)
text.slice(0, 5) // The q
text.slice(31) // the lazy dog.
text.slice(4, 19) // quick brown fox
text.slice(-9, -5) // lazy
text.replace( /dog/gi , 'jumps'))
text.split(' ')
```

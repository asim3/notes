## Array
```js
const arr = [1,2,3,4,5,6,7]

arr[0] // 1
arr[3] // 4

arr.slice(3)
// [4, 5, 6, 7]

arr.slice(-2)
// [6, 7]
arr.slice(0, -2)
// [1, 2, 3, 4, 5]
```



```js
const array1 = [1, 2, 3]
array1.includes(2)

if(!array1.includes(id)) {
	array1.push(id)
}

[...document.querySelectorAll('.box_root')].map(x => console.log(x))
Array.prototype.find(x => x == a)
Array.prototype.forEach(x => x == a)
Array.prototype.join(x => x == a)
Array.prototype.filter(x => x == a)
Array.prototype.flat()
Array.prototype.indexOf(a)
```


## Set vs Array
```js
let arr = [1,2,3,4,1,2]
[...new Set(arr)] // [ 1, 2, 3, 4 ]

new Set(arr) // Set(4) [ 1, 2, 3, 4 ]
```

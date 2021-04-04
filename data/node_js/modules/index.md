## require
```js
const { v4: my_func } = require('uuid');

console.log(my_func())
```


`nano other_file.js`
```js
const obj = {
  "name": "Asim",
  "email": "abcd@efg.hi"
}

module.exports = obj

// or 
// module.exports.name = 'Bader'
// module.exports.email = 'b@der'
```


`nano index.js`
```js
const other_file = require('./other_file')

console.log(other_file.name)
console.log(other_file.email)
```

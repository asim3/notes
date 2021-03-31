`nano other_file.js`
```js
const obj = {
  "name": "Asim",
  "email": "abcd@efg.hi"
}

module.exports = obj
```



`nano index.js`
```js
const other_file = require('./other_file')

console.log(other_file.name, other_file.email)
```

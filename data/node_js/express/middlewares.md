```js
const middlewares = []

middlewares.push(function(request, result, next) {
  console.log(request.method + ': ' + request.get('host') + request.originalUrl)
  next();
})


module.exports = middlewares
```
## Express Web Framework
```js
const express = require('express')
const path = require('path');
const settings = require('./setup/settings')
const middlewares = require('./setup/middlewares')


const app = express()

middlewares.map(x => app.use(x))

app.use(settings.STATIC_URL,
  express.static(path.join(__dirname, settings.STATIC_ROOT)))

app.get('/', (request, result) => result.send('السلام عليكم'))
app.post('/user/:id', (request, result) => result.send(request.params.id))

app.route('/book')
  .get((req, res) => res.send(`<form method='post'><input type='submit'></form>`))
  .post((req, res) => res.send('Add a book'))


app.listen(settings.PORT, function(){
  console.log(`Server started on port ${settings.PORT}`)
})
```

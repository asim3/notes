[axios](https://github.com/axios/axios)
```js
const axios = require('axios');

axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log('Done: always executed');
  });
```


[date-fns](https://date-fns.org/)
```js
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

format(new Date(), "'Today is a' eeee")
// "Today is a Sunday"

formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true })
// "3 days ago"

formatRelative(subDays(new Date(), 3), new Date())
// "last Friday at 7:26 p.m."
```


[dotenv](https://www.npmjs.com/package/dotenv)
```js
require('dotenv').config()

const db = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS
}
```


[socket.io](https://socket.io/)
```js
const io = require('socket.io')(80);
const cfg = require('./config.json');
const tw = require('node-tweet-stream')(cfg);
tw.track('socket.io');
tw.track('javascript');
tw.on('tweet', (tweet) => {
    io.emit('tweet', tweet);
});
```


[uuid](https://www.npmjs.com/package/uuid)
```js
const { v4: my_func } = require('uuid');

console.log(my_func())
// '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```


[classnames](https://jedwatson.github.io/classnames)
> A simple utility for conditionally joining `CSS` classNames together
```js
classNames('foo', 'bar'); 
// 'foo bar'

classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }) 
// 'foo bar baz quux'
```

[json web token](https://www.npmjs.com/package/jsonwebtoken)
```js
var jwt = require('jsonwebtoken');

var token = jwt.sign({ foo: 'bar' }, 'shhhhh');

console.log(token)
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MTc1Njg5NzF9.jmx018orxqGdvxf6GqqfilZRUL_PhCDW2noP3dRMTpI
```

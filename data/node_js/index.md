`nano my_app.js`
```js
const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```


## install packages
```sh
npm init -y # to add ./package.json
npm install express
```


# run nodejs 
```sh
node my_app.js
```

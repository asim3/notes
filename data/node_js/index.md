## add ./package.json
```sh
npm init -y
```


## install packages
```sh
npm install express
```


# run nodejs 
```sh
node my-app.js
# or 

npm start
```


`nano my-app.js`
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

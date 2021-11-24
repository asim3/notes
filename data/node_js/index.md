## new app
```bash
mkdir /tmp/my-new-app/
cd /tmp/my-new-app/

npm init -y # to add ./package.json
# Wrote to /tmp/my-new-app/package.json:
# {
#   "name": "my-new-app",
#   "version": "1.0.0",
#   "description": "",
#   "main": "index.js",
#   "scripts": {
#     "test": "echo \"Error: no test specified\" && exit 1"
#   },
#   "keywords": [],
#   "author": "",
#   "license": "ISC"
# }


npm install express
```


`nano package.json`
```json
{
  // ...
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node my_app.js"
  }
}
```


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


# run nodejs 
```sh
npm start
# > my-new-app@1.0.0 start
# > node my_app.js
# Server running at http://0.0.0.0:3000/


# or 
node my_app.js
# Server running at http://0.0.0.0:3000/


curl localhost:3000
# Hello World
```

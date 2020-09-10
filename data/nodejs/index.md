# new project
> to run nodejs script `node my-app.js`

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



## new 
project with packages
```bash
mkdir my-project && cd my-project
# to skip walk through: `npm init -y`
npm init

# add express framework
npm i express

# remove express framework
npm un express
```


## install nodemon
to restart the server after every save
```js
// `-D` for installing in "dev Dependencies"
npm i -D nodemon

// run
nodemon index.js
// or
npm run div
```


> The starting file is the value of "main" in 'package.json'
```json
{
  // ...
  "main": "index.js",
  // ...
}
```



> Error: listen EADDRINUSE :::3000    
  `killall -g node`

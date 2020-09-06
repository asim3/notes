```js
console.log(__dirname)
```



```js
const path = require('path');
path.join(__dirname, 'static')
```



```js
const path = require('path')
const fs = require('fs')


const apps_dir = path.join(__dirname, ',,/,,/apps/')
console.log('apps_dir ', apps_dir)
fs.readdir(apps_dir, (err, files) => console.log(files))
````
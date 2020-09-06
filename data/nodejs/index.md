# new_project

## Create JSON Package
```js
npm init -y
```

## Add Express Web Framework
```js
npm i express
npm install express --save

```

## run any script from package.json
```js
"scripts": {
  "start": "node index.js",
  "my_name": "echo 'running my own scripts'",
  "div": "nodemon index"
},
```

## Run the script
```js
npm start
npm run my_name
npm run div
node index.js
node index
```

## install nodemon to restart the server after every save
```js
npm i -D nodemon
```

## run
```js
nodemon index.js
npm run div
```

## The starting point is the "main" value in 'package.json'
```js
"main": "index.js",
```
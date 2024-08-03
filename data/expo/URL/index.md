[Docs](https://docs.expo.dev/develop/file-based-routing/)

> `rm ./App.js`


## Setup entry point
`package.json`
```js
{
  // ...
  "main": "expo-router/entry",
  // ...
}
```


## Setup web bundler
`app.json`
```js
{
  "expo": {
    // ...
    "scheme": "your-app-scheme",
    "web": {
      "bundler": "metro",
      // ...
    },
    // ...
  }
}
```

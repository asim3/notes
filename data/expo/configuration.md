# Setup routing
[Docs](https://docs.expo.dev/develop/file-based-routing/)

> `rm ./App.js`


## 1. Setup entry point
`package.json`
```js
{
  // ...
  "main": "expo-router/entry",
  // ...
}
```


## 2. Setup web bundler
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



## `./app.json`
```json
{
  "expo": {
    "name": "app",
    "slug": "app",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      "expo-router"
    ]
  }
}
```


## Dynamic configuration
`./app.config.ts`
```js

```

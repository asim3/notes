## install
```bash
docker run -it node:lts-bookworm /bin/bash

npx create-expo-app@3.0 app --template blank

cd ./app

npx expo install react-dom react-native-web @expo/metro-runtime

# Install Expo Router
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

# install Expo Drawer
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated

npm run web -- -p 3000
```


# !!!

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

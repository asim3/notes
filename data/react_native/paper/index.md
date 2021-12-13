[docs](https://callstack.github.io/react-native-paper/)


## install 
```bash
yarn add react-native-paper


# Expo don't need to install vector icons
yarn add react-native-vector-icons
```


`nano ./babel.config.js`
```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
```

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


## add Root Dir
`./app/index.tsx`
```tsx
import { View, Text } from 'react-native';
import React from 'react';


const Page = () => {
  return (
    <View>
      <Text>Asim 3</Text>
    </View>
  );
};


export default Page;
```

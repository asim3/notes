[Reference](https://docs.expo.dev/versions/latest/)

[Style](https://reactnative.dev/docs/style)

[Testing](https://reactnative.dev/docs/testing-overview)


## install
```bash
docker run -it node:20.16-bullseye-slim /bin/bash


npx create-expo-app@3.0 app --template blank

cd ./app

npx expo install react-dom react-native-web @expo/metro-runtime

# Install Expo Router
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

npm run web -- -p 3000
```


## add Page
`./App.tsx`
```ts
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


[UI](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/)

[camera](https://docs.expo.dev/versions/latest/sdk/camera/)

[Font](https://docs.expo.dev/versions/latest/sdk/font/)

[FileSystem](https://docs.expo.dev/versions/latest/sdk/filesystem/)

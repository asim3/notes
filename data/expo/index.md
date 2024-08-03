[Reference](https://docs.expo.dev/versions/latest/)


## install
```bash
docker run -it node:20.16-bullseye-slim /bin/bash


npx create-expo-app@3.0 app --template blank

cd ./app

npx expo install react-dom react-native-web @expo/metro-runtime

# Install Expo Router
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar

# install Expo Drawer
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated

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

[Style](https://reactnative.dev/docs/style)

[Testing](https://reactnative.dev/docs/testing-overview)

[UI](https://docs.expo.dev/develop/user-interface/splash-screen-and-app-icon/)

[camera](https://docs.expo.dev/versions/latest/sdk/camera/)

[Font](https://docs.expo.dev/versions/latest/sdk/font/)

[FileSystem](https://docs.expo.dev/versions/latest/sdk/filesystem/)



## Dynamic Page
`./app/main/user/[user_id].tsx`
```ts
import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, useLocalSearchParams } from 'expo-router';


const Page = () => {
  const { user_id } = useLocalSearchParams<{user_id: string}>();

  return (
    <View>
      <Text style={{ fontSize: 24 }}>User No. { user_id } Profile Page</Text>
      
      <Link href={'/'} asChild>
        <Button title='Goto Home' />
      </Link>

    </View>
  );
};


export default Page;
```

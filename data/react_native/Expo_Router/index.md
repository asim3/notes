[Expo Router Docs](https://docs.expo.dev/develop/file-based-routing/)


## Root layout as stack
`./src/app/_layout.tsx`
```ts
import React from 'react';
import { Stack } from 'expo-router';


export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name='(auth)' options={{ title: 'Authentication Page' }} />
      <Stack.Screen name='user'   options={{ title: 'User Page', headerShown: false }} />
      <Stack.Screen name="modal"  options={{ presentation: 'modal' }} />
    </Stack>
  );
};
```


## Dynamic Page
`./src/app/(tabs)/[user_id].tsx`
```ts
import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, useLocalSearchParams } from 'expo-router';


export default function Page() {
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

// curl localhost:3000/aaaa
```


## Hidden Tab
```ts
    <Tabs.Screen name='(tabs)/my_page' options={{ href: null }} />
```

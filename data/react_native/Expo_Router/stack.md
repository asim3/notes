## Tree
```bash
tree ./src/app
# ./src/app
# ├── _layout.tsx
# ├── +html.tsx
# ├── +not-found.tsx
# ├── modal.tsx
# ├── (tabs)
# │   ├── _layout.tsx
# │   ├── index.tsx
# │   ├── tab_1.tsx
# │   ├── tab_2.tsx
# │   ├── tab_3.tsx
# │   ├── tab_4.tsx
# │   └── two.tsx
# └── user
#     └── [user_id].tsx
```


## Stack Layout
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

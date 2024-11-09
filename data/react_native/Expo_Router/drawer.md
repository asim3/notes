## User Layout
`./src/app/(tabs)/_layout.tsx`
```ts
import React from 'react';
import { Drawer } from 'expo-router/drawer';


export default function DrawerLayout() {
  return <Drawer screenOptions={{ headerShown: true }}>
    <Drawer.Screen name='index' options={{ title: 'My Home Header Title' }} />
    <Drawer.Screen name='tab_3' options={{ title: 'Tab 3 Title' }} />
    <Drawer.Screen name='tab_2' options={{ title: 'User Profile' }} />
    <Drawer.Screen name='tab_1' />
    <Drawer.Screen name='two' />
  </Drawer>;
};
```


```bash
tree src/app/\(tabs\)/
# src/app/(tabs)/
# ├── _layout.tsx
# ├── index.tsx
# ├── tab_1.tsx
# ├── tab_2.tsx
# ├── tab_3.tsx
# ├── tab_4.tsx
# └── two.tsx


# in HTML page:

# My Home Header Title
# Tab 3 Title
# User Profile
# tab_1
# two
# tab_4
```

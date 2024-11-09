## Tree
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
```


## Layout
`./src/app/(tabs)/_layout.tsx`
```ts
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function TabLayout() {
  return <Tabs screenOptions={{ title: '' }}>
    <Tabs.Screen name='index' options={{
        title: 'My Home Header Title',
        tabBarLabel: '',
        tabBarIcon: ({size, color}) => (<Ionicons name='home' size={size} color={color} />)
      }} />
    
    <Tabs.Screen name='two' options={{
        title: 'This will be Hidden if href is NULL',
        href: null
      }} />
    
    <Tabs.Screen name='tab_1' options={{
        headerShown: false,
        tabBarIcon: ({color}) => (<Ionicons name='log-in-outline'  size={40} color={color} />)
      }} />

    <Tabs.Screen name='tab_2' options={{
        title: 'User Profile',
        headerShown: false,
        tabBarBadge: 9,
        tabBarLabel: 'User',
        tabBarIcon: ({size, color}) => (<Ionicons name='person' size={size} color={color} />)
      }} />

    <Tabs.Screen name='tab_3' options={{
        title: 'Tab 3 Title',
        tabBarLabel: 'Tab 3 L',
        tabBarIcon: ({size, color}) => (<Ionicons name='settings' size={size} color={color} />)
      }} />
    
  </Tabs>;
};
```

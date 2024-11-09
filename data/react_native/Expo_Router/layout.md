## Main Layout
`./app/main/_layout.tsx`
```ts
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


export default function Layout() {
  return <Tabs screenOptions={{ tabBarLabel: '' }}>

    <Tabs.Screen name='home' options={{
        title: 'My Home Header Title',
        tabBarIcon: ({size, color}) => (<Ionicons name='home' size={size} color={color} />)
      }} />
    
    <Tabs.Screen name='search' options={{
        title: 'Search Title',
        tabBarIcon: ({size, color}) => (<Ionicons name='search'  size={size} color={color} />)
      }} />
    
    <Tabs.Screen name='news/[id]' options={{
        title: 'This will be Hidden if href is NULL',
        tabBarIcon: ({size, color}) => (<Ionicons name='newspaper'  size={size} color={color} />)
      }} />
    
    <Tabs.Screen name='settings' options={{
        title: '',
        headerShown: false,
        tabBarIcon: ({size, color}) => (<Ionicons name='settings'  size={size} color={color} />)
      }} />

    <Tabs.Screen name='user' options={{
        title: 'User Profile',
        headerShown: false,
        tabBarBadge: 9,
        tabBarIcon: () => (<Ionicons name='person' />)
      }} />
    
  </Tabs>;
};
```

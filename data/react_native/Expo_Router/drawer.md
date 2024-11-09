## User Layout
`./app/main/user/_layout.tsx`
```ts
import React from 'react';
import { Drawer } from 'expo-router/drawer';


export default function Layout() {
  return <Drawer>

  <Drawer.Screen  name='profile' options={{
    title: 'My User Profile Title',
    drawerLabel: 'My User Profile Label',
  }} />
  
  <Drawer.Screen  name='[user_id]' options={{
    title: 'My User [ID] Title',
    drawerLabel: 'My User [ID] Label',
  }} />
  
  </Drawer>;
};
```

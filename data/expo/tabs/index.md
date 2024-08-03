## Tree
```bash
tree ./app/app/
# ./app/app/
# ├── _layout.tsx
# └── (tabs)
#     ├── authentication
#     │   ├── index.tsx
#     │   ├── _layout.tsx
#     │   └── logout.tsx
#     ├── (users)
#     │   ├── _layout.tsx
#     │   └── profile.tsx
#     ├── index.tsx
#     └── my_file_name.tsx
```


## Root Layout
`./app/_layout.tsx`
```ts
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const RootLayout = () => {
  return <Tabs>
    <Tabs.Screen name='(tabs)/index' options={{
        title: 'My Home Header Title',
        tabBarLabel: '',
        tabBarIcon: ({size, color}) => (<Ionicons name='home' size={size} color={color} />)
      }} />
    
    <Tabs.Screen name='(tabs)/my_file_name' options={{
        title: 'This will be Hidden if href is NULL',
        href: null
      }} />
    
    <Tabs.Screen name='(tabs)/authentication' options={{
        title: '',
        headerShown: false,
        tabBarIcon: ({color}) => (<Ionicons name='log-in-outline'  size={40} color={color} />)
      }} />

    <Tabs.Screen name='(tabs)/(users)' options={{
        title: 'User Profile',
        headerShown: false,
        tabBarBadge: 9,
        tabBarLabel: 'User',
        tabBarIcon: () => (<Ionicons name='person' />)
      }} />
    
  </Tabs>;
};


export default RootLayout;
```


## index Page
`./app/(tabs)/index.tsx`
```ts
import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


const Page = () => {
  return (
    <View>
      <Text>Home Page</Text>

      <Link href={'(tabs)/my_file_name'} asChild>
        <Button title='Goto My File Name' />
      </Link>
      
      <Link href={'(tabs)/authentication'} asChild>
        <Button title='Goto Login' />
      </Link>
      
      <Link href={'/(tabs)/authentication/logout'} asChild>
        <Button title='Goto Logout !!!' />
      </Link>
      
      <Link href={'(tabs)/(users)/profile'} asChild>
        <Button title='Goto Profile' />
      </Link>
      
      <Link href={'profile'} asChild>
        <Button title='Goto Profile 2' />
      </Link>
      
      <Link href={'(users)/profile'} asChild>
        <Button title='Goto Profile 3' />
      </Link>
    </View>
  );
};


export default Page;
```


## Group Layout
`./app/(tabs)/(users)/_layout.tsx`
```ts
import React from 'react';
import { Stack } from 'expo-router';


const Layout = () => {
  return <Stack />;
};


export default Layout;
```


## Profile Page
`./app/(tabs)/(users)/profile.tsx`
```ts
import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


const Page = () => {
  return (
    <View>
      <Text>User Profile Page</Text>
      
      <Link href={'/'} asChild>
        <Button title='Goto Home' />
      </Link>

    </View>
  );
};


export default Page;
```


## Hidden Tab
```ts
    <Tabs.Screen name='(tabs)/my_file_name' options={{ href: null }} />
```

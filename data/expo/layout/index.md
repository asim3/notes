## Tree
```bash
tree ./app/app/
# ./app/app/
# ├── _layout.tsx            <<<
# ├── (authentication)
# │   ├── index.tsx
# │   ├── _layout.tsx        <<<
# │   ├── login.tsx
# │   └── logout.tsx
# ├── main
# │   ├── _layout.tsx        <<<
# │   ├── home.tsx
# │   ├── my_file_name.tsx
# │   ├── search.tsx
# │   ├── settings.tsx
# │   ├── news
# │   │   └── [id].tsx
# │   └── user
# │       ├── _layout.tsx    <<<
# │       ├── profile.tsx
# │       └── [user_id].tsx
# └── (other)
#     ├── _layout.tsx        <<<
#     ├── about.tsx
#     ├── conditions.tsx
#     └── terms.tsx
```


## Root Layout
`./app/_layout.tsx`
```ts
import React from 'react';
import { Stack } from 'expo-router';


const RootLayout = () => {
  return <Stack  screenOptions={{ 
    headerShown: false,
  }} >
    <Stack.Screen name='(authentication)' options={{ 
      title: 'Landing Page',
    }} />
    
  </Stack>;
};


export default RootLayout;
```


## Auth Layout
`./app/(authentication)/_layout.tsx`
```ts
import React from 'react';
import { Stack } from 'expo-router';


const Layout = () => {
  return <Stack>
    <Stack.Screen name='index' options={{ title: 'Authentication' }} /> 
    <Stack.Screen name='login' options={{ title: 'Login' }} /> 
    <Stack.Screen name='logout' options={{ title: 'Logout' }} /> 
  </Stack>;
};


export default Layout;
```


## Other Layout
`./app/(other)/_layout.tsx`
```ts
import React from 'react';
import { Stack } from 'expo-router';


const Layout = () => {
  return <Stack screenOptions={{ 
    headerShown: true,
  }} />;
};


export default Layout;
```


## Main Layout
`./app/main/_layout.tsx`
```ts
import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';


const Layout = () => {
  return <Tabs>
    <Tabs.Screen name='index' options={{
        title: 'My Home Header Title',
        tabBarLabel: '',
        tabBarIcon: ({size, color}) => (<Ionicons name='home' size={size} color={color} />)
      }} />
    
    <Tabs.Screen name='my_file_name' options={{
        title: 'This will be Hidden if href is NULL',
        href: null
      }} />
    
    <Tabs.Screen name='authentication' options={{
        title: '',
        headerShown: false,
        tabBarIcon: ({color}) => (<Ionicons name='log-in-outline'  size={40} color={color} />)
      }} />

    <Tabs.Screen name='(users)' options={{
        title: 'User Profile',
        headerShown: false,
        tabBarBadge: 9,
        tabBarLabel: 'User',
        tabBarIcon: () => (<Ionicons name='person' />)
      }} />
    
  </Tabs>;
};


export default Layout;
```


## User Layout
`./app/main/user/_layout.tsx`
```ts
import React from 'react';
import { Stack } from 'expo-router';


const Layout = () => {
  return <Stack />;
};


export default Layout;
```

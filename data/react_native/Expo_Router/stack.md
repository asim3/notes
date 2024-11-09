## Tree
```bash
tree ./app/app/
# ./app/app/
# ├── (authentication)
# │   ├── login.tsx
# │   └── logout.tsx
# ├── index.tsx
# ├── _layout.tsx
# ├── my_file_name.tsx
# └── (users)
#     └── profile.tsx
```


## Stack Layout
```ts
import React from 'react';
import { Stack } from 'expo-router';


const Layout = () => {
  return <Stack>
    <Stack.Screen name='index' options={{ title: 'My Home Header Title' }} />
    <Stack.Screen name='my_file_name' options={{ title: 'My Header Title' }} />
    <Stack.Screen name='(authentication)/login' options={{ title: 'Login' }} />
    <Stack.Screen name='(authentication)/logout' options={{ title: 'Logout', headerShown: false }} />
    <Stack.Screen name='(users)/profile' options={{ title: 'User Profile' }} />
  </Stack>;
};


export default Layout;
```


## index Page
```ts
import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


const Page = () => {
  return (
    <View>
      <Text>Home Page</Text>

      <Link href={'my_file_name'} asChild>
        <Button title='Goto My File Name' />
      </Link>
      
      <Link href={'(authentication)/login'} asChild>
        <Button title='Goto Login' />
      </Link>
      
      <Link href={'(authentication)/logout'} asChild>
        <Button title='Goto Logout' />
      </Link>
      
      <Link href={'(users)/profile'} asChild replace>
        <Button title='Goto Profile' />
      </Link>
    </View>
  );
};


export default Page;
```


## Profile Page
```ts
import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';


const Page = () => {
  return (
    <View>
      <Text>User Profile Page</Text>
      
      <Link href={'/'} asChild replace>
        <Button title='Goto Home' />
      </Link>

    </View>
  );
};


export default Page;
```

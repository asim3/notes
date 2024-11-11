## useMyContext
`./src/hooks/useMyContext.tsx`
```ts
import { createContext, useContext } from 'react';

import { User } from '@/app/(tabs)/tab_5';


export const MyContextProvider = createContext<User | undefined>(undefined);


export default function useMyContext() {
    const MyUser = useContext(MyContextProvider);

    if (MyUser === undefined) {
        throw new Error("Kindly add MyContext.Provider!")
    }

    return MyUser;
}
```


## Root Page `MyContextProvider`
`./src/app/(tabs)/tab_5.tsx`
```ts
import React, { useState } from 'react';
import { MyContextProvider } from '@/hooks/useMyContext';
import { View_5 } from '@/views';

export interface User {
  id: number,
  name: string,
  user_type?: string // optional
}


export default function Component() {
  const [MyUser] = useState<User>({
    id: 123,
    name: 'aaaa',
  });

  return (
    <MyContextProvider.Provider value={MyUser}>
      <View_5 />
    </MyContextProvider.Provider>
  );
};
```


## Component
`./src/views/view_5.tsx`
```ts
import React from 'react';
import { View, Text } from 'react-native';
import useMyContext from '@/hooks/useMyContext';


export default function View_5() {
  const MyUser = useMyContext();

  return (
    <View>
      <Text>MyUser.id = {MyUser.id}</Text>
      <Text>MyUser.name = {MyUser.name}</Text>
      <Text>MyUser.user_type = {MyUser.user_type}</Text>
    </View>
  );
};
```

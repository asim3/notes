## useMyCustomHook
`./src/hooks/useMyCustomHook.tsx`
```ts
import React, { useState } from 'react';


export default function useMyCustomHook(value: number) {
    const [MyValue, setMyValue] = useState(value);

    console.log("useMyCustomHook MyValue=", MyValue); // will run if MyCount changes

    return { MyValue, updateMyCustomHook: setMyValue }
};
```


## Page
`./src/app/(tabs)/tab_4.tsx`
```ts
import React from 'react';
import { View, Text, Button } from 'react-native';
import useMyCustomHook from '@/hooks/useMyCustomHook';

export default function Component() {
  const { MyValue: MyCount, updateMyCustomHook } = useMyCustomHook(12);

  return (
    <View>
      <Text>MyCount = {MyCount.toString()}</Text>
      <Button title='MyCount - 1' onPress={() => updateMyCustomHook(MyCount - 1)} />
      <Button title='MyCount + 1' onPress={() => updateMyCustomHook(MyCount + 1)} />
    </View>
  );
};
```


## `console.log`
```ts
// useMyCustomHook MyValue= 12
// useMyCustomHook MyValue= 11
// useMyCustomHook MyValue= 10
// useMyCustomHook MyValue= 9 
// useMyCustomHook MyValue= 10
// useMyCustomHook MyValue= 11
// useMyCustomHook MyValue= 12
// useMyCustomHook MyValue= 13
// useMyCustomHook MyValue= 14
// useMyCustomHook MyValue= 15
// useMyCustomHook MyValue= 16
```

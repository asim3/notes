## useState
set value on app start only
```ts
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';


export default function Component() {
  const [MyCount, setMyCount] = useState(() => {
    console.log("set MyCount @ init only");
    return 44
  });

  console.log("MyCount =", MyCount); // will run if MyCount changes

  return (
    <View>
      <Text>MyCount = {MyCount}</Text>
      <Button title='MyCount - 1' onPress={() => setMyCount(MyCount - 1)} />
      <Button title='MyCount + 1' onPress={() => setMyCount(MyCount + 1)} />
    </View>
  );
};
```

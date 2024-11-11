## useState
```ts
import React, { useState } from 'react';
import styles from './styles'
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';


export default function Component() {
  const [MyCount, setMyCount] = useState(33);

  console.log("Component 3.MyCount =", MyCount) // will run if MyCount changes

  return (
    <View style={styles.scroll_view}>
      <Text>MyCount = {MyCount}</Text>
      <Button title='Component 3.1: MyCount - 1' onPress={() => setMyCount(MyCount - 1)} />
      <Button title='Component 3.2: MyCount + 1' onPress={() => setMyCount(MyCount + 1)} />
    </View>
  );
};
```


## useEffect
```ts
import React, { useEffect, useState } from 'react';
import styles from './styles'
import { View, Text, Button } from 'react-native';
import { Link } from 'expo-router';


export default function Component() {
  const [MyCount1, setMyCount1] = useState(411);
  const [MyCount2, setMyCount2] = useState(422);

  useEffect(() => {
    console.log("MyCount1 =", MyCount1);
    console.log("MyCount2 =", MyCount2);

    return () => {
      // cleanup function
      setMyCount1(9991)
      console.log("my cleanup function", MyCount2);
    }
  }, [MyCount2]); // will run only if MyCount2 changes

  return (
    <View style={styles.scroll_view}>
      <Text>MyCount1 = {MyCount1}</Text>
      <Text>MyCount2 = {MyCount2}</Text>
      <Button title='Component 4.1: MyCount1 + 1' onPress={() => setMyCount1(MyCount1 + 1)} />
      <Button title='Component 4.2: MyCount2 + 1' onPress={() => setMyCount2(MyCount2 + 1)} />
    </View>
  );
};
```


## useEffect `console.log`
```ts
// MyCount1 = 411
// MyCount2 = 422
// ****** Component 4.2 Pressed
// my cleanup function 422
// MyCount1 = 411
// MyCount2 = 423
// ****** Component 4.2 Pressed
// my cleanup function 423
// MyCount1 = 9991
// MyCount2 = 424
```

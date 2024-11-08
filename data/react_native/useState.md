```ts
import React, { useState } from 'react';
import styles from "./styles"
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

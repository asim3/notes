[React Native Docs](https://reactnative.dev/docs/intro-react)
[Expo Docs](https://docs.expo.dev/versions/latest/)


## Component Props
`./src/components/Component_1/index.tsx`
```ts
import React from 'react';
import styles from "./styles"
import { View, Text, Button } from 'react-native';

type ComponentProps = {
  title: string,
  paragraph?: string // the paragraph is optional
}

export default function Component({ title, paragraph='My default paragraph' }: ComponentProps) {
  return (
    <View style={styles.container}>
      <Text>Component_1: { title }</Text>
      <Text>{ paragraph }</Text>
    </View>
  );
};
```


## Dynamic Page
`./src/app/(tabs)/[user_id].tsx`
```ts
import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, useLocalSearchParams } from 'expo-router';


export default function Page() {
  const { user_id } = useLocalSearchParams<{user_id: string}>();

  return (
    <View>
      <Text style={{ fontSize: 24 }}>User No. { user_id } Profile Page</Text>
      
      <Link href={'/'} asChild>
        <Button title='Goto Home' />
      </Link>

    </View>
  );
};

// curl localhost:3000/aaaa
```

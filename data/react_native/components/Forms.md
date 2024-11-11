## SignInForm
`./src/components/SignInForm/index.tsx`
```ts
import React from 'react';
import styles from './styles'
import { View, Text, Button } from 'react-native';


type ComponentProps = {
  title: string,
  paragraph?: string // the paragraph is optional
}


export default function Component({ title, paragraph='My default paragraph' }: ComponentProps) {
  const validation = () => {
    // validation
  };

  const handle_submit = () => {
    // handleSubmit
  };

  return (
    <View style={styles.container}>
      // <Text>Component_1: { title }</Text>
      // <Text>{ paragraph }</Text>
    </View>
  );
};
```

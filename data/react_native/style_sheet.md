## styles
`src/components/Component_1/styles.tsx`
```ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'yellow',
    },
    scroll_view: {
        padding: 20,
        backgroundColor: 'royalblue',
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    my_text: {
        textAlign: "center",
        marginHorizontal: "10%",
        width: "70%",
        height: 50,
        fontSize: 32,
    },
    input_1: {
        textAlign: "center",
        marginVertical: 200,
        fontSize: 25,
        backgroundColor: "#f3f",
        borderColor: "green"

    },
    input_2: {
        textAlign: "center",
        fontSize: 20,
        marginVertical: 200,
        backgroundColor: "#3ff",

    },
});
```


## index
`src/components/Component_1/index.tsx`
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

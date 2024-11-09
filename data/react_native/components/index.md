## Tree
```bash
tree ./src/components/
# ./src/components/
# ├── Component_1
# │   ├── index.tsx
# │   ├── index.web.tsx
# │   └── styles.tsx
# ├── # ...
# ├── # ...
# ├── # ...
# └── index.tsx
```


## Page (Screen)
```ts
import React from 'react';
import { View, Text } from 'react-native';
import { Component_1, Component_2 } from '@/components'

export default function View_1() {
  return (
    <View>
      <Text>View_1 Page</Text>
      <Component_1 title='view 1 title' paragraph='view 1 paragraph' />
      <Component_2 />
    </View>
  );
};
```


## index
`./src/components/index.tsx`
```ts
import Component_1 from './Component_1'
import Component_2 from './Component_2'
import Component_3 from './Component_3'
import Component_4 from './Component_4'
import Component_5 from './Component_5'


export {
  Component_1,
  Component_2,
  Component_3,
  Component_4,
  Component_5,
}
```


## Component_1 Style Sheet
`./src/components/Component_1/styles.tsx`
```ts
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'yellow',
    },
});
```


## Component_1 index
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

## Tree
```bash
tree ./src/components/
# ./src/components/
# ├── footer.tsx
# ├── header.tsx
# └── index.tsx
```


## index
`./src/components/index.tsx`
```ts
import Header from './header'
import Footer from './footer'


export {
    Header,
    Footer
}
```


## header
`./src/components/header.tsx`
```ts
import { View, Text } from 'react-native';
import React from 'react';


const Component = () => {
  return (
    <View>
      <Text>Header</Text>
    </View>
  );
};


export default Component;
```


## footer
`./src/components/footer.tsx`
```ts
import { View, Text } from 'react-native';
import React from 'react';


const Component = () => {
  return (
    <View>
      <Text>Footer</Text>
    </View>
  );
};


export default Component;
```

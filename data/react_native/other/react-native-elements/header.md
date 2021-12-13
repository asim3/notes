[header](https://reactnativeelements.com/docs/header)


```js
import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';


export default function HomeNavbar() {
    const [index, setIndex] = React.useState(null);


    return (
        <View style={{ flex: 1 }}>
            <Header  
                placement="left"  
                leftComponent={{ icon: 'menu', color: '#fff' }}  
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}  
                rightComponent={{ icon: 'home', color: '#fff' }}/>
        </View>
    );
}
```



```js
import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';


export default function HomeNavbar() {
    const [index, setIndex] = React.useState(null);


    return (
        <View style={{ flex: 1 }}>
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={<Text>My Center Text</Text>}
                rightComponent={<Text>My Right Text</Text>} />
        </View>
    );
}
```


```js
import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';


export default function HomeNavbar() {
    const [index, setIndex] = React.useState(null);


    return (
        <View style={{ flex: 1 }}>
            <Header rightContainerStyle={{ backgroundColor: "red" }}>
                <Text>My Left Text</Text>
                <Text>My Center Text</Text>
                <Text>My Right Text</Text>

                <Text>Hidden</Text>
            </Header>
        </View>
    );
}
```

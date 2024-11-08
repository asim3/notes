[docs](https://reactnavigation.org/docs/getting-started)

## install
```bash
expo install \
    @react-navigation/native \
    react-native-screens \
    react-native-safe-area-context \
    @react-navigation/native-stack \
    --yarn
```


## Navigation
```js
import React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}


function DetailsScreen({ navigation }) {
    return (
        <View>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
        </View>
    );
}


const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
```


## go back
```js

function DetailsScreen({ navigation }) {
    return (
        <View>

            <Button title="Go Home" onPress={() => navigation.navigate('Home')} />

            <Button title="Go back" onPress={() => navigation.goBack()} />

        </View>
    );
}
```

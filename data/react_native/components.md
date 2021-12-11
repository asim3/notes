[clock and battery bar](https://reactnative.dev/docs/statusbar)
[pressable](https://reactnative.dev/docs/pressable)
[alert](https://reactnative.dev/docs/alert)

[text](https://reactnative.dev/docs/text#onpress)
[image](https://reactnative.dev/docs/image)
[refresh](https://reactnative.dev/docs/refreshcontrol)
[loading](https://reactnative.dev/docs/activityindicator)

[form textinput](https://reactnative.dev/docs/textinput)
[form button](https://reactnative.dev/docs/button)
[form switch](https://reactnative.dev/docs/switch)



## styles
`nano ./components/MyComponent/style.js`
```js
import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
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


export default styles;
```


## component
`nano ./components/MyComponent/index.js`
```js
import React from 'react';
import styles from "./style"
import {
    ScrollView, View, Text, TextInput,
    Platform, StatusBar, Dimensions,
} from 'react-native';


export default function MyComponent() {
    const [use_text, onChangeText] = React.useState("My use State");
    const [use_number, onChangeNumber] = React.useState(null);


    return (
        <View style={styles.container}>

            <ScrollView style={styles.scroll_view}>

                <Text numberOfLines={1}>
                    my long text my long text my long text my long text my long text my long text
                    111
                    222
                    333
                </Text>


                <Text>StatusBar.currentHeight = {StatusBar.currentHeight}</Text>

                <Text>Platform.OS = {Platform.OS}</Text>

                <Text>screen width = {Dimensions.get("screen").width}</Text>
                <Text>screen height = {Dimensions.get("screen").height}</Text>
                <Text>screen fontScale = {Dimensions.get("screen").fontScale}</Text>
                <Text>screen scale = {Dimensions.get("screen").scale}</Text>


                <Text style={styles.my_text}>My Text 111</Text>
                <Text style={[styles.my_text, { backgroundColor: "red" }]}>My Text 222</Text>
                <Text style={[styles.my_text, { backgroundColor: "blue" }]}>My Text 333</Text>


                <TextInput
                    style={styles.input_1}
                    onChangeText={onChangeText}
                    value={use_text}
                />


                <TextInput
                    style={styles.input_2}
                    onChangeText={onChangeNumber}
                    value={use_number}
                    placeholder="my placeholder"
                    keyboardType="numeric"
                />


            </ScrollView>

        </View>
    );
}
```


## test
`nano ./components/MyComponent/index.test.js`
```js

```

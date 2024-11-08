```js
import React from 'react';
import { StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, StatusBar, ScrollView, View, TextInput } from 'react-native';


export default function App() {
    return (
        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.Keyboard_view}>


                <View style={{ backgroundColor: "tomato", height: 50 }} />


                <ScrollView style={{ backgroundColor: "red", flex: 1, }}>

                    <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
                    <View style={{ backgroundColor: "gold", height: 100, }} />
                    <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
                    <View style={{ backgroundColor: "gold", height: 100, }} />
                    <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
                    <View style={{ backgroundColor: "gold", height: 100, }} />
                    <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
                    <View style={{ backgroundColor: "gold", height: 100, }} />
                    <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
                    <View style={{ backgroundColor: "gold", height: 100, }} />
                    <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
                    <View style={{ backgroundColor: "gold", height: 100, }} />
                    <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
                    <View style={{ backgroundColor: "gold", height: 100, }} />

                </ScrollView>


                <View style={{ backgroundColor: "tomato", height: 50 }}>
                    <TextInput placeholder="my placeholder" style={styles.input_1} />
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    Keyboard_view: {
        flex: 1,
    },
    input_1: {
        textAlign: "center",
        margin: 5,
        height: 40,
        fontSize: 18,
        backgroundColor: "#fff",
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 7,
    },
});
```


## flex
```js
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';


export default function App() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ backgroundColor: "dodgerblue", flex: 3 }} />
            <View style={{ backgroundColor: "gold", flex: 1 }} />
            <View style={{ backgroundColor: "tomato", flex: 1 }} />

        </SafeAreaView>
    );
}


// dodgerblue
// dodgerblue
// dodgerblue
// gold
// tomato


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'red',
    }
});
```


## flex Direction
```js
import React from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';


export default function App() {
    return (
        <SafeAreaView style={styles.container}>

            <View style={{ width: 200, height: 200, backgroundColor: "dodgerblue", }} />
            <View style={{ width: 300, height: 300, backgroundColor: "gold", }} />
            <View style={{ width: 100, height: 100, backgroundColor: "tomato", }} />

        </SafeAreaView>
    );
}


//                                  gold
//                      dodgerblue  gold
//                      dodgerblue  gold  tomato


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center", // if wrap : will align line by line to center
        alignContent: "center", // for wrap only : will align all to center
        alignItems: "baseline",
    }
});
```

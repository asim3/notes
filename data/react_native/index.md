[expo Docs](https://docs.expo.dev/)

## new App with Expo
```bash
expo init MyProject

expo init my-project

expo init my_project
# Choose a template: blank
# >- blank               a minimal app as clean as an empty canvas

# x- blank (TypeScript)  same as blank but with TypeScript configuration
# x- tabs (TypeScript)   several example screens and tabs using react-navigation and TypeScript
# x- minimal             bare and minimal, just the essentials to get you started
```


## run
```bash
cd my_project

expo start --tunnel
```


## publish
[Expo signup](https://expo.dev/signup)
```bash
expo publish
# The expected package.json path: /home/asim/package.json does not exist

cd my_project
expo publish
# An Expo user account is required to proceed.
# ✔ How would you like to authenticate? › Log in with an existing Expo account
# ✔ Username/Email Address: … asim3
# ✔ Password: 

# Success. You are now logged in as asim3.
```


## Safe Area View
```js
import React from 'react';
import { StyleSheet, SafeAreaView, Platform, KeyboardAvoidingView } from 'react-native';
import MyComponent from "./components/MyComponent"


export default function App() {
    return (
        <SafeAreaView style={styles.container}>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.Keyboard_view}>

                <MyComponent />


            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        backgroundColor: 'red',
    },
    Keyboard_view: {
        flex: 1,
        padding: 20,
        backgroundColor: 'green',
    },
});
```


## new App (Manual)
[docs](https://reactnative.dev/docs/intro-react)
```bash
npx react-native init my_app

npx react-native init MyApp

npx react-native init my-app
# error "my-app" is not a valid name for a project.

cd my_app

cd MyApp

npx react-native run-android
```

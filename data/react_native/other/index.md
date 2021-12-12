## UI Kits
[kitten](https://akveo.github.io/react-native-ui-kitten/)
[Native Base](https://nativebase.io/)


## platform
```js
import React from 'react';
import { Platform } from 'react-native';


Platform.OS === "ios" ? "padding" : "height"
Platform.OS === "android" ? "10" : "0"
```


## screen
```js
import { Dimensions } from 'react-native';


Dimensions.get("window").width
Dimensions.get("window").height

Dimensions.get("screen").width
Dimensions.get("screen").height
```


## keyboard
```js
import { Keyboard } from 'react-native';


<Text onPress={Keyboard.dismiss}>My Center Text</Text>
```

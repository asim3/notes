## install redux
```bash
expo init my_project --yarn --template blank \
  && cd my_project/ \
  && expo install redux react-redux redux-thunk --yarn \
  && code .
```


## Provider
`nano ./App.js`
```js
import { Provider } from "react-redux"

import store from "./redux/store"
import Line_1 from "./components/Line_1"
import Line_2 from "./components/Line_2"


export default function App() {
  return (
    <Provider store={store}>
      <Line_1 />
      <Line_2 />
    </Provider>
  );
}
```


`nano ./redux/store.js`
```js
import { createStore, applyMiddleware } from "redux"
import all_my_reducers from "./reducer"
import thunk from "redux-thunk"

const default_state = {}

export default createStore(
    all_my_reducers,
    default_state,
    applyMiddleware(thunk)
)
```


`nano ./redux/reducer.js`
```js
import { combineReducers } from "redux"

const initial_state = "Line 0000"

const my_reducer_func = function (state = initial_state, action) {
    if (action.type === "my action type") {
        return action.payload
    }

    return state
}


export default combineReducers({
    my_reducer_key: my_reducer_func
})
```


`nano ./redux/action.js`
```js
export const change_text = function (text) {

    return function (dispatch) {
        dispatch({
            type: "my action type",
            payload: text
        })
    }
}
```


`nano ./redux/hooks.js`
```js
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';

import { change_text } from './action';


export default function useInputText() {
    const state = useSelector(state => state)
    const dispatch = useDispatch()

    const my_actions = bindActionCreators(change_text, dispatch)


    return [
        state.my_reducer_key,
        my_actions
    ];
}
```


`nano ./components/Line_1.js`
`nano ./components/Line_2.js`
```js
import React from 'react';
import { View, Text, TextInput } from 'react-native';
import useInputText from "../redux/hooks"

export default function MyComponent() {
    const [my_text, change_text] = useInputText()

    return (
        <View>
            <Text>my_reducer_key: {my_text}</Text>

            <TextInput onChangeText={change_text} value={my_text} />
        </View>
    );
}
```

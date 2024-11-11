## Store
`./src/services/state/store.tsx`
```ts
import { configureStore } from '@reduxjs/toolkit';
import myCounterReducer from './my_counter/counterSlice';

export const store = configureStore({
    reducer: {
        counter: myCounterReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
```


## Screen `Provider`
`./src/app/(tabs)/index.tsx`
```ts
import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { store } from '@/services/state/store';
import { Component_1, Component_2 } from '@/components'


export default function View_1() {
  return (
    <Provider store={store}>
        <View>
            <Component_1 />
            <Component_2 />
        </View>
    </Provider>
  );
};
```


## Actions
`./src/services/state/my_counter/counterSlice.tsx`
```ts
import { createSlice } from '@reduxjs/toolkit';


interface CounterState {
    value: number;
}

const initialState: CounterState = {
    value: 0,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
```


## Reducers
`./src/services/state/index.tsx`
```ts

```

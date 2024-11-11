## Actions
`./src/services/state/my_counter/counterSlice.tsx`
```ts
import { createSlice } from '@reduxjs/toolkit';


interface MyCounterState {
    my_value: number;
}

const myInitialState: MyCounterState = {
    my_value: 0,
};

const myCounterSlice = createSlice({
    name: "my-counter",
    initialState: myInitialState,
    reducers: {
        increment_func: (state) => {
            state.my_value += 1;
        },
        decrement_func: (state) => {
            state.my_value -= 1;
        },
    },
});

export const { increment_func, decrement_func } = myCounterSlice.actions;

export default myCounterSlice.reducer;
```


## Store
`./src/services/state/store.tsx`
```ts
import { configureStore } from '@reduxjs/toolkit';
import myCounterReducer from './my_counter/counterSlice';


export const my_store = configureStore({
    reducer: {
        counter: myCounterReducer,
    },
});

export type MyRootState = ReturnType<typeof my_store.getState>;

export type MyAppDispatch = typeof my_store.dispatch;
```


## Component
`./src/components/Component_6/index.tsx`
```ts
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { MyRootState } from '@/services/state/store';
import { decrement_func, increment_func } from '@/services/state/my_counter/counterSlice';


export default function Component() {
  const my_count = useSelector((state: MyRootState) => state.counter.my_value);
  const my_dispatch = useDispatch();

  return (
    <View>
      <Text style={{ padding: 20, textAlign: 'center' }}>
        {my_count}
      </Text>
      <Button title='redux: state.counter.my_value + 1' onPress={() => my_dispatch(increment_func())} />
      <Button title='redux: state.counter.my_value - 1' onPress={() => my_dispatch(decrement_func())} />
    </View>
  );
};
```


## Screen `Provider`
`./src/app/(tabs)/my_screen.tsx`
```ts
import React from 'react';
import { Provider } from 'react-redux';
import { my_store } from '@/services/state/store';
import { Component_6 } from '@/components'


export default function Screen() {
  return (
    <Provider store={my_store}>
      <Component_6 />
    </Provider>
  );
};
```

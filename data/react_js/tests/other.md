## tests setup
```js
import { render, fireEvent, cleanup } from '@testing-library/react';
import App from './App';


let getByTestId;


beforeEach(() => {
    const component = render(<App />);
    getByTestId = component.getByTestId
})


afterEach(() => {
    cleanup()
})


afterAll(() => {
    // run affter all test are done
})


test('my content 2', () => {
    const my_button = getByTestId("my_button")
    expect(my_button.textContent).toBe("Click");
    expect(my_button.value).toBe("");
});
```

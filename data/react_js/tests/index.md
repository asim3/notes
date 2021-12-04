[docs](https://testing-library.com/docs/react-testing-library/example-intro)
[cheatsheet](https://testing-library.com/docs/react-testing-library/cheatsheet)
[jest docs](https://jestjs.io/docs/expect)

## App
`nano App.js`
```js
export function App() {
    return (
        <div>
            <p data-testid="my_p">my text</p>

            <button data-testid="my_button" value="my_value">My Button</button>
        </div>
    )
}

export default App;
```


## to Be
`nano App.test.js`
```js
test('My test name', () => {
  expect(3).toBe(3);
  expect(3).toBeWithinRange(1, 5);
});


test('My error test', () => {
  expect(2).toBe(3);
});


// FAIL  src/App.test.js
// ✓ renders learn react link (24 ms)
// ✓ My test name (1 ms)
// ✕ My error test (2 ms)

// ● My error test

//   Expected: 3
//   Received: 2

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 2 passed, 3 total
// Snapshots:   0 total
// Time:        1.204 s
```


## test components
`nano App.test.js`
```js
import { render, screen } from '@testing-library/react';
import App from './App';


test('my text test', () => {
    render(<App />);

    const my_link_element = screen.getByText(/my button/i);
    expect(my_link_element).toBeInTheDocument();
});


test('my content 1', () => {
    const my_app = render(<App />);
    const my_button = my_app.getByTestId("my_button")
    expect(my_button.textContent).toBe("My Button");
});

// OR 

test('my content 2', () => {
    const { getByTestId } = render(<App />);
    const my_button = getByTestId("my_button")
    expect(my_button.textContent).toBe("My Button");
    expect(my_button.value).toBe("my_value");
});
```

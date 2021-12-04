`nano App.js`
```js
import React, { useState } from 'react';

function App() {
    const [my_count, set_my__count] = useState(0);

    function my_function() {
        return set_my__count(my_count + 1)
    }

    return (
        <div>
            <span data-testid="my_text">my_count = {my_count}</span>
            <br />
            <button data-testid="my_button" onClick={my_function}>Click</button>
        </div>
    );
}

export default App;
```


## click event
```js
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('Test My Function', () => {
    const { getByTestId } = render(<App />);
    const my_button = getByTestId("my_button")
    const my_text = getByTestId("my_text")

    expect(my_text.innerHTML).toBe("my_count = 0");
    expect(my_text.textContent).toBe("my_count = 0");

    fireEvent.click(my_button)

    expect(my_text.textContent).toBe("my_count = 1");

    fireEvent.click(my_button)

    expect(my_text.textContent).toBe("my_count = 2");
});
```

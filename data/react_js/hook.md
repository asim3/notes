## Hooks

## useState
```jsx
import React, { useState } from 'react';

function App() {
    const [my_count, set_my__count] = useState(0);

    function my_function() {
        return set_my__count(my_count + 1)
    }

    return (
        <div>
            <span>my_count = {my_count}</span>
            <br />
            <button onClick={my_function}>Click</button>
        </div>
    );
}

export default App;
```



## useEffect
Similar to `componentDidMount` and `componentDidUpdate`:  
```jsx
import React, { useState, useEffect } from 'react';

function App() {
    const [my_count, set_my__count] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${my_count} times`;
    });

    function my_function() {
        return set_my__count(my_count + 1)
    }

    return (
        <div>
            <span>my_count = {my_count}</span>
            <br />
            <button onClick={my_function}>Click</button>
        </div>
    );
}

export default App;
```

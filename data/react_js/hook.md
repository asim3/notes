## Hook

## State
```js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function MyLinks(props) {
  const [i, i_value] = useState(20);
	const [links, add_link] = useState([{index: i, href:"#", text:"Click Me"}]);
  function on_click(e) {
    e.preventDefault()
    const j = i + 1
    i_value(j)
    add_link([...links, {index: j, href:"#", text:"Click Me"}])
  }

  return links.map((obj, i) => (
    <div key={i}>
      <a 
        href={obj.href}
        onClick={on_click}>
        {obj.text + " - " + obj.index}
      </a>
    </div>
  ))
}

ReactDOM.render(
	<MyLinks />,
  document.getElementById('root')
)
```



## Effect "run's after render"
```js
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Example() {
  const [obj, update_obj] = useState({id: 123});
  const random_no = Math.floor(Math.random() * 300)

  async function on_click() {
    update_obj({id: "loading..."})
    const href = "https://jsonplaceholder.typicode.com/todos/" + random_no
    const fetched_obj = await fetch(href)
      .then(res => res.ok ? res.json() : { id: "not found"})
      .catch(err => ({id: err}))
    update_obj(fetched_obj)
  }

  useEffect(function after_render() {
    document.title = obj.id
  })

  return (
    <div>
      <pre>{JSON.stringify(obj, null, 3)}</pre>
      <button onClick={on_click}>show: {random_no}</button>
    </div>
  );
}

ReactDOM.render(
	<Example />,
  document.getElementById('root')
)
```

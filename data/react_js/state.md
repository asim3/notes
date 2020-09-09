## State

```js
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function ActionLink(props) {
	const [i, set_i] = useState(20);
  function on_click(e) {
    e.preventDefault()
    set_i(i + 1)
    console.log(props.text, i)
  }

  return <a href={props.href} onClick={on_click}>{props.text +" "+ i}</a>;
}

ReactDOM.render(
  <div>
	  <ActionLink href="#" text="Click Me" /><br />
	  <ActionLink href="#" text="Click Me" /><br />
	  <ActionLink href="#" text="Click Me" />
  </div>,
  document.getElementById('root')
)
```




## Class methods: State Updates "May Be Asynchronous"
```js
wrong_method() {
  // not allowed
  this.state.comment = 'Hello'; 

  // this code may fail to update the counter
  this.setState({
    counter: this.state.counter + this.props.increment,
  });
}
```



```js
correct_method() {
  this.setState((state, props) => ({
    counter: state.counter + props.increment
  }));
}
```



```js
componentDidMount() {
  fetchPosts().then(response => {
    this.setState({
      posts: response.posts
    });
  });
}
```

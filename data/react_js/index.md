## Libraries
[React Router](https://reacttraining.com/react-router/web/guides/quick-start)



[Swiper](https://kidjp85.github.io/example/pagination/)
[React Reveal: Fade Effect](https://www.react-reveal.com/)
[React Motion: Draggable](https://github.com/chenglou/react-motion)


```
npm start
npm run build
```


[Deployment Docs](https://facebook.github.io/create-react-app/docs/deployment)


## Inline if with Logical && Operator 
```
import React from 'react';
import ReactDOM from 'react-dom';


function MyElement(props) {
  return <h1>Hello!</h1>
}

function Mailbox(props) {
  return (
    <div>
      <MyElement />
      { 
        props.new_messages.length > 0 && 
        <h2>length: {props.new_messages.length}</h2>
      }
      {
        props.new_messages.map(mes => <h1>{mes}</h1>)
      }
    </div>
  )
}

const messages = ['Aaaa', 'Bbbb', 'Cccc']

ReactDOM.render(
  <Mailbox new_messages={messages} />,
  document.getElementById('root')
)
```


## Elements inside the map() call need keys
```
const todoItems = todos.map((todo) => <li key={todo.id}> {todo.text} </li> );
```

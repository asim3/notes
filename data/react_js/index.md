[docs](https://create-react-app.dev/docs/getting-started)
[npm run build docs](https://facebook.github.io/create-react-app/docs/deployment)
[tests docs](https://create-react-app.dev/docs/running-tests)

## new App
```bash
npx create-react-app my-app

cd my-app 
code .

# Starts the development server.
npm start

# Bundles the app into static files for production.
npm run build


ll build/
# -rw-rw-r-- 1 asim asim 3870 Nov 24 18:29 favicon.ico
# -rw-rw-r-- 1 asim asim 3020 Nov 24 18:29 index.html
# drwxrwxr-x 5 asim asim 4096 Nov 24 18:29 static/
```


## Inline if with Logical && Operator 
```js
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
```js
const todoItems = todos.map((todo) => <li key={todo.id}> {todo.text} </li> );
```

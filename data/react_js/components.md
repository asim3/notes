## Function Components 
pure functions

```js
function MyElement(props) {
  return <h1>Hello!</h1>
}
```


prevent default in functions
```js
function ActionLink(props) {
	let i = 0
  function on_click(e) {
    e.preventDefault()
    console.log(props.text, i++)
  }

  return <a href={props.href} onClick={on_click}>{props.text}</a>;
}
```

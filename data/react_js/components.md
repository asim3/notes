```js
function MyElement(props) {
    return <h1>Hello!</h1>
}
```


## on_click function
```js
function ActionLink(props) {

    function on_click(e) {
        e.preventDefault()
        console.log("on click prevent")
    }

    return (
        <a href="#" onClick={on_click}>my link</a>
    );
}
```

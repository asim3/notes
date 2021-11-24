## Libraries
[React Reveal: Fade Effect](https://www.react-reveal.com/)

[React Router](https://reacttraining.com/react-router/web/guides/quick-start)
[React Motion: Draggable](https://github.com/chenglou/react-motion)


## Class Components

```js
class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  my_method() {
    this.setState({date: new Date()});
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.my_method(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <h1>Hello, {this.props.name}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Welcome />,
  document.getElementById('root')
);
```



## React Elements Object
```js
{
  "type": "div",
  "key": null,
  "ref": null,
  "props": {
    "id": "my_id",
    "children": [
      {
        "type": "h1",
        "key": null,
        "ref": null,
        "props": {
          "children": "Hello, world!"
        },
        "_owner": null,
        "_store": {}
      },
      {
        "type": "h2",
        "key": null,
        "ref": null,
        "props": {
          "children": [
            "It is ",
            "10:50:13 AM",
            "."
          ]
        },
        "_owner": null,
        "_store": {}
      }
    ]
  },
  "_owner": null,
  "_store": {}
}
```

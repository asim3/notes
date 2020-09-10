## `this` in Class methods

> You have to be careful about the meaning of this in JSX callbacks. 
> In JavaScript, class methods are not bound by default. If you 
> forget to bind this.handleClick and pass it to onClick, this will 
> be undefined when the function is actually called.

```js
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
```



## using an arrow function in the callback
> The problem with this syntax is that a different callback is 
> created each time the LoggingButton renders. In most cases, 
> this is fine. However, if this callback is passed as a prop 
> to lower components, those components might do an extra re-rendering. 
> We generally recommend binding in the constructor or using the 
> class fields syntax, to avoid this sort of performance problem.

```js
class LoggingButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleBind = this.handleBind.bind(this);
    }

    handleBind() { console.log('Bind:', this); }
    handleClick() { console.log('arrow:', this); }
  
    render() {
        console.log('render:', this);
        return (
            <div>
                <button onClick={this.handleBind}>
                    bind function
                </button>
                <br /><br />
                <button onClick={(e) => this.handleClick(e)}>
                    arrow function
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <LoggingButton />, 
    document.getElementById('root')
)
```


## Passing Arguments to Event Handlers 
```js
class LoggingButton extends React.Component {
    deleteRow(id, id2, e) { 
        console.log('id:', id); 
        console.log('id2:', id2); 
        console.log('e:', e.target); 
        console.log('this:', this); 
    }
  
    render() {
        let id = "mmm"
        return (
            <div>
                <button onClick={this.deleteRow.bind(this, id, id)}>
                  Delete Row
                </button>
                <button onClick={e => this.deleteRow(id, id, e)}>
                  Delete Row
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    <LoggingButton />, 
    document.getElementById('root')
)
```

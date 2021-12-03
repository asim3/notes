## CSS Modules
`nano ./components/About/index.module.css`
```css
.error_message {
	color: #00ff00;
	font-size: 16px;
}

.button {
	color: #ffffff;
	padding: 0.5rem;
	margin-top: 0.5rem;
	border-radius: 4px;
	background-color: rosybrown;
}
```


`nano ./components/About/index.js`
```jsx
import styles from './index.module.css';


function About() {
    return (
        <div>

            <span className={styles.error_message}>error_message</span>

            <br />

            <button className={styles.button}>Click</button>

        </div>
    );
}


export default About;
```


## style
```js
export function App() {
    return (
        <div>
            <p style={{ background: "red" }}>my red bg</p>
            <p style={{ background: "blue" }}>my blue bg</p>
            <p style={{ fontWeight: "bold" }}>my opacity</p>
            <p style={{ opacity: 0.5 }}>my opacity</p>
            <p style={{ opacity: true === false ? 1 : 0.2 }}>my if opacity</p>
        </div>
    )
}

export default App;
```

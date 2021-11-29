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

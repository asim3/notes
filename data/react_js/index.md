[docs](https://create-react-app.dev/docs/getting-started)
[npm run build docs](https://facebook.github.io/create-react-app/docs/deployment)
[tests docs](https://create-react-app.dev/docs/running-tests)

## new App
```bash
npx create-react-app my_react_app

npx create-react-app my-react-app

npx create-react-app MyReactApp
# error name can no longer contain capital letters


cd my_react_app 

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


## components
```bash
mkdir -p ./my_react_app/src/components/Home
mkdir -p ./my_react_app/src/components/About

cat <<EOF > ./my_react_app/src/components/Home/index.js
function Home() {
    return <h2>Home</h2>;
}

export default Home;
EOF


cat <<EOF > ./my_react_app/src/components/About/index.js
function About() {
    return <h2>About</h2>;
}

export default About;
EOF
```


## App.js
`nano ./my_react_app/src/App.js`
```js
import Home from './components/Home'
import About from './components/About'


function App() {
  return (
    <div className="App">
      <Home />
      <About />
    </div>
  );
}

export default App;
```


## Error
```js
// Adjacent JSX elements must be wrapped in an enclosing tag
function Home() {
    return (
        <h2>Home 1</h2>
        <h2>Home 2</h2>
        <h2>Home 3</h2>
    );
}


// OK
function Home() {
    return (
        <>
            <h2>Home 1</h2>
            <h2>Home 2</h2>
            <h2>Home 3</h2>
        </>
    );
}

export default Home;
```

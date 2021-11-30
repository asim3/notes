## Promise
```js
fetch("https://swapi.dev/api/people/")
// Promise { <state>: "pending" }

fetch("https://swapi.dev/api/people/").then(response => response.ok)
// Promise { <state>: "pending" }

fetch("https://swapi.dev/api/people/").then(response => response.json())
// Promise { <state>: "pending" }


await fetch("https://swapi.dev/api/people/").then(response => response.json())
// { count: 82, results: (10) […] }


async function my_get() {
    const response = await fetch("https://swapi.dev/api/people/")
    const data = await response.json()
    return data
}

await my_get()
// { count: 82, results: (10) […] }
```



## get
```js
await fetch("https://swapi.dev/api/people/").then(response => response.ok)
// true

await fetch("https://swapi.dev/api/people/").then(response => response.status)
// 200

await fetch("https://swapi.dev/api/people/").then(response => response.statusText)
// "OK"

await fetch("https://swapi.dev/api/people/").then(response => response.redirected)
// false

await fetch("https://swapi.dev/api/people/").then(response => response.json())
// Object { 
//     count: 82, 
//     next: "https://swapi.dev/api/people/?page=2", 
//     previous: null, 
//     results: (10) […] 
// }


await fetch("https://swapi.dev/api/people/").then(response => response.text())
// "{\"count\":82,\"next\":\"https://swapi.dev/api/people/?page=2\",\"previous\":null,\"resul...


await fetch("https://swapi.dev/api/people/").then(response => response.blob())
// Blob { size: 5616, type: "application/json" }


await fetch("https://swapi.dev/api/people/").then(response => response.arrayBuffer())
// ArrayBuffer { byteLength: 5616 }
```


## post
```js
const data = {
    method: 'POST', // GET, POST, PUT, DELETE, etc.                               Default: GET
    body: JSON.stringify(data),

    headers: {
        'Content-Type': 'application/json'
    },

    mode: 'cors', // no-cors, cors, same-origin                                   Default: cors
    cache: 'no-cache', // default, no-cache, reload, force-cache, only-if-cached  Default: default
    credentials: 'same-origin', // include, same-origin, omit                     Default: same-origin
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}


await fetch("https://swapi.dev/api/people/", data).then(response => response.ok)
// false

await fetch("https://swapi.dev/api/people/", data).then(response => response.status)
// 405

await fetch("https://swapi.dev/api/people/", data).then(response => response.statusText)
// "Method Not Allowed"

await fetch("https://swapi.dev/api/people/", data).then(response => response.redirected)
// false

await fetch("https://swapi.dev/api/people/", data).then(response => response.json())
// Object { detail: "Method 'POST' not allowed." }
```


## error
```js
await fetch("eeee")
    .then(response => response.ok)
    .catch(err => "catch: " + err)
// "catch: TypeError: Window.fetch: eeee is not a valid URL."


await fetch("eeee")
    .then(response => response.ok, err => "then: " + err)
    .catch(err => "catch: " + err)
// "then: TypeError: Window.fetch: eeee is not a valid URL."


await fetch("https://raw.githubusercontent.com/asim3/notes/master/README.md")
    .then(response => response.json(), err => "then 1: " + err)
    .then(data => data.name, err => "then 2: " + err)
    .catch(err => "catch: " + err)
// "then 2: SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data"
```

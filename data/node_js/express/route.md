## Route paths
```js
Route path: /random.text
// Request URL: http://localhost:3000/random.text

Route path: /ab?cd
// Request URL: http://localhost:3000/acd
// Request URL: http://localhost:3000/abcd

Route path: /ab+cd
// Request URL: http://localhost:3000/abcd
// Request URL: http://localhost:3000/abbcd
// Request URL: http://localhost:3000/abbbcd

Route path: /ab*cd
// Request URL: http://localhost:3000/abcd
// Request URL: http://localhost:3000/abxcd
// Request URL: http://localhost:3000/abRANDOMcd
// Request URL: http://localhost:3000/ab123cd

Route path: /ab(cd)?e
// Request URL: http://localhost:3000/abe
// Request URL: http://localhost:3000/abcde

Route path: (regular expressions)
```

```js
Route path: /users/:userId/books/:bookId
// Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }

Route path: /flights/:from-:to
// Request URL: http://localhost:3000/flights/LAX-SFO
req.params: { "from": "LAX", "to": "SFO" }

Route path: /plantae/:genus.:species
// Request URL: http://localhost:3000/plantae/Prunus.persica
req.params: { "genus": "Prunus", "species": "persica" }
```


> To have more control over the exact string that can be matched by a route parameter, you can append a regular expression in parentheses `(())`:
be sure to escape any `\` characters, for example `\\d+`.
```js
Route path: /user/:userId(\d+)
// Request URL: http://localhost:3000/user/42
req.params: {"userId": "42"}
```

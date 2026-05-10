# Alpine.js
[docs](https://alpinejs.dev/start-here)
[UI Component](https://alpinejs.dev/component/dropdown)

## init
```js
<html>
<head>
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
</head>
<body>
    <h1 x-data="{ message: 'I ❤️ Alpine' }" x-text="message"></h1>
</body>
</html>
```


## on:click
```js
<div x-data="{ my_count: 0 }">
    <button x-on:click="my_count++">Increment</button>
 
    <span x-text="my_count"></span>
</div>
```


## for
```js
<ul>
    <template x-for="item in filteredItems">
        <li x-text="item"></li>
    </template>
</ul>
```

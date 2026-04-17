# Alpine.js
[docs](https://alpinejs.dev/start-here)
[UI Component](https://alpinejs.dev/component/dropdown)

## init
```js
<script src="//unpkg.com/alpinejs" defer></script>
 
<div x-data="{ open: false }">
    <button @click="open = true">Expand</button>
 
    <span x-show="open">
        Content...
    </span>
</div>
```

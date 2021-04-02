## args type
```ts
function my_function(value:number, total:number) {
    return value + total
}

my_function(1, 2)
// ok
my_function(1, 'hi')
// Error: Argument of type 'string' is not assignable to parameter of type 'number'.
```


## return type
```ts
function my_function():string {
    return "must return string"
}


function my_void_function():void {
    return 
    // must return nothing
}
```

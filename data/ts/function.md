## args type
```ts
function my_function(value:number, total:number) {
    return value + total
}

my_function(1, 2)
// ok
my_function(1, 'hi')
// error
```


## return type
```ts
function my_function():string {
    return "return type must be string"
}


function my_function():void {
    return "must return nothing"
}
```

## array
```ts
let my_array: boolean[]
let my_array: number[]
let my_array: string[]

// or
let my_value: Array<string>
let my_value: Array<number>


my_array = ["Hello", "World"]
```


## Tuple
In TypeScript, tuple types are meant to model arrays 
with specific lengths and element types.
```ts
let my_value: [number, number] 
my_value = [1, 2];
my_value = [1, "hello"];
// error

let my_value: [string, number]
my_value = ["hello", 42, true];
my_value = ["hello", 42, true, 55, 99, "world"];
// ok
```


## Tuple
```ts
// either one or two strings.
let c: [string, string?] = ["hello"];

// two or more
let e: [string, string, ...boolean[]];

e = ["hello", "world"];
e = ["hello", "world", false];
e = ["hello", "world", true, false, true];
```

## array
```ts
let my_booleans: boolean[]
let my_numbers: number[]
let my_strings: string[]

// or
let my_numbers_2: Array<number>
let my_strings_2: Array<string>


my_strings = ["Hello", "World"]
```


## Tuple
In TypeScript, tuple types are meant to model arrays 
with specific lengths and element types.
```ts
let my_value: [number, number] 
my_value = [1, 2];

my_value = [1];
// Error: target requires 2

my_value = [1, 2, 3];
// Error: target allows only 2.

my_value = [1, "hello"];
// Error: Type 'string' is not assignable to type 'number'.
```


```ts
// either one or two strings.
let my_value: [number, number?] 
my_value = [1, 2];
my_value = [1];
// ok
```


## two or more
```ts
let my_value: [number, number, ...boolean[] ];

my_value = [1, 2];
my_value = [1, 2, false];
my_value = [1, 2, true, false, true];
```

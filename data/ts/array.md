##
In TypeScript, tuple types are meant to model arrays with specific lengths and element types.
```ts
let a: [number, number] = [1, 2];

let b: [string, number, boolean] = ["hello", 42, true];

// either one or two strings.
let c: [string, string?] = ["hello"];

// two or more
let e: [string, string, ...boolean[]];

e = ["hello", "world"];
e = ["hello", "world", false];
e = ["hello", "world", true, false, true];
```


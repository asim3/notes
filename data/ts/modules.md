> If you have a file that doesn’t currently have any imports or exports,
> but you want to be treated as a module, add the line: `export {};`


`nano my_file_1.ts`
```ts
export default function helloWorld() {
  console.log("Hello, world!");
}
```


`nano my_main.ts`
```ts
import hello from "./my_file_1.js";
hello();
// Hello, world!
```

## run
```sh
tsc my_main.ts

node my_main.js 
# Hello, world!

node my_main.ts
# ERROR: SyntaxError: Cannot use import statement outside a module
```

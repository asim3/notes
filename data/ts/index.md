# Compiling your code
```sh
tsc source_file.ts new_file.js

# compile using tsconfig.json
tsc

# watch: compile after every save
tsc -w
tsc source_file.ts -w
```


## Types
```ts
let my_string: string
let my_number: number
let my_boolean: boolean

let my_any: any

let my_array_1: Array<string>
let my_array_2: Array<number>

// let my_tuple: Tuple
// let my_enum: enum
// let my_generics: generics
```


## null !!!
```ts
// let my_value: void = null
// let my_value: null = null
// let my_value: undefined = null

// let my_value: void = undefined
// let my_value: null = undefined
// let my_value: undefined = undefined
```

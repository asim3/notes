## function
```ts
interface MyObject {
    title: string;
    text: string;
}


function get_my_title(my_value: MyObject) {
    return my_value.title
}
```


```ts
let obj = {
    title: "Hello",
    text: "World"
}

get_my_title(obj)
// Hello
```


# class
```ts
interface UserInterface {
    name: string;
    email: string;
    age: number;
    pass: string;
    get_email();
    get_pass();
    get_age();
}

class User implements UserInterface {
    // ...
}
```

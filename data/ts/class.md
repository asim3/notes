# 
```ts
typeof my_value
```

# Class
```ts
class User {
    name: string;
    protected email: string;
    age: number;
    private pass: string;

    constructor(name: string, email: string, age: number) {
        // runs on __call__
        this.name = name;
        this.email = email;
        this.age = age;
        this.pass = name;

        console.log("User Added: " + this.name)
    }

    get_email() {
        console.log("ok " + this.email)
    }

    get_pass() {
        console.log("ok " + this.pass)
    }

    private get_age() {
        console.log("ok " + this.age)
    }
}

let john = new User("John", "m@il.co", 1)
// User Added: John
```


## subclass
```ts
class Member extends User {
    id: number;

    constructor(name: string, email: string, age: number, id: number) {
        // runs on __call__
        super(name, email, age)

        this.id = id;

        console.log("User Added: " + this.name)
    }

    get_email() {
        console.log("ok from subclass")
        super.get_email()
    }
}


let john = new Member("John", "m@il.co", 1, 12)

john.get_email()
// ok from subclass
// ok m@il.co
```

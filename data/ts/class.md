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

        console.log("User Added: " + this.name)
    }

    get_email() {
        console.log("ok protected only from outside: " + this.email)
    }

    get_pass() {
        console.log("error because it is private: " + this.pass)
    }

    private get_age() {
        console.log("error because the method is private: " + this.age)
    }
}

let john = new User("John", "m@il.co", 1)
// User Added: John

john.age
// 1

john.email
// error

john.get_email()
// ok protected only from outside

john.get_pass()
// error: private

john.get_age()
// error: private
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

let john = new User("John", "m@il.co", 1)

john.get_email()
// ok from subclass
// ok protected only from outside
```

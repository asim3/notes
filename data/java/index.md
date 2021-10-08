[docs](https://www.w3schools.com/java/)


## new app
`nano MyNewApp.java`
```java
public class MyNewApp {
    // class name must match the filename

    public static void main(String[] args) {
        // The main() method is required

        System.out.println("Hello World from my new app");
    }
}
```


## run app
```bash
java Main.java 
```


## variables
```java
char my_Letter = 'D';
String my_Text = "Hello";

int my_int = 5;
float my_FloatNum = 5.99f;

boolean my_Bool = true;


String my_Text = "World";
// MyNew.java:17: error: variable my_Text is already defined in method main(String[])
// String my_Text = "World";
//        ^


final int my_final = 123;
my_final = 15;
// MyNew.java:21: error: cannot assign a value to final variable my_final
// my_final = 15;
// ^
```

## variables
```java
String name = "John";
System.out.println("Hello " + name);
// Hello John


int x = 5;
int y = 6;
System.out.println(x + y);
// 11
```

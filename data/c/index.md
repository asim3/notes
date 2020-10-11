`nano my_c_program.c`
```c#
#include <stdio.h>

int main() {
    // my first program in C
    printf("Hello, World! \n");
    return 0;
}
```


## Compile C program
compile then assemble then link
```txt
gcc -o my_program my_c_program.c

# run my_program
./my_program


tree
.
├── my_c_program.c
└── my_program
```


## print
```c#
#include <stdio.h>

int main() {
    printf("My name is %s \n", "Asim");

    int x = 3;
    printf("My numb is %d \n", x);

    int y = 10;
    printf("X: %d - Y: %d \n", x, y);

    return 0;
}
```



## read from user
```c#
#include <stdio.h>

int main() {
    printf("choose a number: ");

    int x;
    scanf("%d", &x);

    printf("you chose %d \n", x);

    return 0;
}
```


## string
```c#
#include <stdio.h>

int main() {
    printf("enter your name: ");

    char name[21]; // size is 20, the last char is reserved for '\0'
    scanf("%20s", name);

    printf("your name is %s \n", name);

    return 0;
}
```


## int
```c#
#include <stdio.h>

int main() {
    int a = 10;
    double b = -10.5;  // 8 bytes = 64 bits
    float c = -10.5; // 4 bytes = 32 bits
    char d = 'D';
    char e[] = "my char";
    printf("a: %d\nb: %f\nc: %f\nd: %d\ne: %s\n", a, b, c, d, e);

    return 0;
}
```


## math
```c#
#include <stdio.h>

int main() {
    int a = 11;
    int b = 2;
    double x =          a / b;
    double y = (double) a / b;

    printf("X: %2.2f\n",       x); // X: 5.00
    printf("Y: %f\n",          y); // Y: 5.500000
    printf("_: %f\n", (double) a); // _: 11.000000
    printf("A: %d\n",          a); // A: 11

    return 0;
}
```


## bool
```c#
#include <stdio.h>
#include <stdbool.h>

int main() {
    bool a = true;
    bool f = false;
    printf("A: %d \nF: %d \n", a, f);

    return 0;
}
```

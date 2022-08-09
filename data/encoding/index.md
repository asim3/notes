[what is encoding](https://www.w3.org/International/questions/qa-what-is-encoding)
[converter](#)
[thumbs up](https://www.fileformat.info/info/unicode/char/1f44d/index.htm)

> `0x` = Hexadecimal
> 
> `0b` = Binary
> 
> `\u` = 4 Hexadecimal digits
> 
> `\U` = 8 Hexadecimal digits
> 
> `U+` = Unicode + 4 Hexadecimal digits

## ASCII
128 characters
```txt
String      H         e         l         l         o
ASCII Value 72        101       108       108       111
Hexadecimal 48        65        6C        6C        6F
Binary      01001000  01100101  01101100  01101100  01101111 
```


## UTF-32
32 bits = 4 bytes = 1 Grapheme
```txt
String       Z
UTF-32 Value 90
Hexadecimal  0000005A
Binary       00000000000000000000000001011010
```


## UTF-8
1~4 bytes = 1 Grapheme
```txt
String       H         e         l         l         o
UTF-32 Value 72        101       108       108       111
Hexadecimal  48        65        6C        6C        6F
Binary       01001000  01100101  01101100  01101100  01101111 
```


## UTF-8 conversion
[Youtube](https://www.youtube.com/watch?v=uTJoJtNYcaQ)
```txt
  if code <   128 (            1000 0000)
elif code <  2048 (       1000 0000 0000)
elif code < 65536 (1 0000 0000 0000 0000)
 

First code point  Last code point  Byte 1    Byte 2   Byte 3   Byte 4
U+0000            U+007F           0xxxxxxx
U+0080            U+07FF           110xxxxx  10xxxxxx
U+0800            U+FFFF           1110xxxx  10xxxxxx 10xxxxxx
U+10000           U+10FFFF         11110xxx  10xxxxxx 10xxxxxx 10xxxxxx
```


## UTF-8 arabic
```txt
Hello = 48 65 6c 6c 6f
   ع  = d8 b9
   ا  =       d8 a7
   ص  =             d8 b5
   م  =                   d9 85
عاصم  = d8 b9 d8 a7 d8 b5 d9 85
```

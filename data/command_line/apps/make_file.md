# Makefile
[docs](https://makefiletutorial.com/)


`nano makefile`
`nano Makefile`
```makefile
asim:
	echo "hello Asim"

bader:
	echo "hello bader"

family: asim bader
	echo "hello family"
```
> You have to use a real `tab` instead of `space`
> `cat -e -t -v  Makefile`

```bash
make
# echo "hello Asim"
# hello Asim


make asim
# echo "hello Asim"
# hello Asim


make bader
# echo "hello bader"
# hello bader


make family
# echo "hello Asim"
# hello Asim
# echo "hello bader"
# hello bader
# echo "hello family"
# hello family
```

## Variables
`nano makefile`
```makefile
my-family = asim bader

asim:
	echo "hello Asim"

bader:
	echo "hello bader"

family: ${my-family}
	echo "hello family ${my-family}"
```


## clean
`nano makefile`
```makefile
all: one two three

one:
	touch one
two:
	touch two
three:
	touch three

clean:
	rm -f one two three
```


```bash
make
# touch one
# touch two
# touch three


make clean
# rm -f one two three
```

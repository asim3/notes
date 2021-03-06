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
> each command is run in a new shell


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


## Bash
```makefile
# The default shell is /bin/sh

SHELL=/bin/bash

test:
	if [[ "asim" == "asim" ]]; then echo "asim 1"; else echo "other"; fi;

test2:
	if [[ "asim" == "asim" ]]; then \
		echo "asim 2"; \
	else \
		echo "other"; \
	fi;

test3:
	if [[ "asim" == "asim" ]]; then 
		echo "asim 2"; 
	else 
		echo "other"; 
	fi;
```


```bash
make
# asim 1

make test
# asim 1

make test2
# asim 2

make test3
# if [[ "asim" == "asim" ]]; then 
# /bin/bash: -c: line 1: syntax error: unexpected end of file
# makefile:19: recipe for target 'test3' failed
# make: *** [test3] Error 1
```


## exit code
```makefile
run:
	whoami
	echo ok


run-error:
	whoami
	exit 52
	echo "not ok"


ignore-error:
	whoami
	- exit 52
	echo ok
```


```bash
make 
# whoami
# asim
# echo ok
# ok


make run-error
# whoami
# asim
# exit 52
# makefile:8: recipe for target 'run-error' failed
# make: *** [run-error] Error 52


make ignore-error
# whoami
# asim
# exit 52
# makefile:13: recipe for target 'ignore-error' failed
# make: [ignore-error] Error 52 (ignored)
# echo ok
# ok
```


## $$
```makefile
run:
	whoami
	echo $$(whoami)
	echo "$$(whoami)"
```


```bash
make run
# whoami
# asim
# echo $(whoami)
# asim
# echo "$(whoami)"
# asim
```

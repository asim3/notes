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

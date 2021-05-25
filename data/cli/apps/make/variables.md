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


## args
```makefile
print-my-name:
	echo "hello ${your-name}"

print-my-family:
	$(MAKE) print-my-name your-name=asim
	$(MAKE) print-my-name your-name=bader
	$(MAKE) print-my-name your-name=ahmed
```

```bash
make print-my-name your-name=asim
# echo "hello asim"
# hello asim


make print-my-name your-name=ahmed
# echo "hello ahmed"
# hello ahmed
```

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


## Get from env
```makefile
PATH?=asim
USER?=bader
AAAA?=ahmed

run:
	echo ${PATH}
	echo ${USER}
	echo ${AAAA}
```


```bash
make
# echo /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
# /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
# echo asim
# asim
# echo ahmed
# ahmed
```

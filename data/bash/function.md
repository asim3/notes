## Functions
```bash
my_func() {
  echo "John"
}

# OR
function my_function {
  echo "asim"
}
```

## call functions
```bash
my_func
# John

my_function
# asim

echo "You are $(my_func)"
# You are John

VAR=$(my_func)
echo $VAR
# John
```


## arguments
```bash
function my_function {
  echo "\$1 = $1"
  echo "\$2 = $2"
  echo "\$3 = $3"
  echo "\$# = $#"
  echo "\$@ = $@"
  echo "\$* = $*"
}


my_function "asim"
# $1 = asim
# $2 = 
# $3 = 
# $# = 1
# $@ = asim
# $* = asim


my_function "asim" "bader" "ahmed"
# $1 = asim
# $2 = bader
# $3 = ahmed
# $# = 3
# $@ = asim bader ahmed
# $* = asim bader ahmed
```


```bash
is_dry_run() { if [ "$DRY_RUN" == "1" ]; then return 1; else return 0; fi }

DRY_RUN=0
if is_dry_run; then
  printf 'yes it is a dry run \n'
fi

DRY_RUN=1
if ! is_dry_run; then
  echo 'not a dry run'
fi
```

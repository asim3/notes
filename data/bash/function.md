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
  echo "\$*:2 = ${*:2}"
  echo "\$@:2 = ${@:2}"
  echo "\$*:2:1 = ${*:2:1}"
}


my_function "asim"
# $1 = asim
# $2 = 
# $3 = 
# $# = 1
# $@ = asim
# $* = asim
# $*:2 = 
# $@:2 = 
# $*:2:1 = 


my_function "asim" "bader" "ahmed"
# $1 = asim
# $2 = bader
# $3 = ahmed
# $# = 3
# $@ = asim bader ahmed
# $* = asim bader ahmed
# $*:2 = bader ahmed
# $@:2 = bader ahmed
# $*:2:1 = bader
```


## remove arguments
```bash
my_func() {
  echo $@
  shift;
  echo $@
  shift;
  echo $@
  shift;
  echo $@
}


my_func a b c d e f g
# a b c d e f g
# b c d e f g
# c d e f g
# d e f g
```

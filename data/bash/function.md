## Functions
```bash
get_name() {
  echo "John"
}

function my_function {
  echo "asim"
}

get_name

my_function

echo "You are $(get_name)"
```


## Functions with arguments
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
echo "-------------------"
my_function "asim" "bader"
echo "-------------------"
my_function "asim" "bader" "ahmed"
```

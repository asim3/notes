[BASH HOW-TO](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)


to run script in terminal
```
bash file_name
# or
. file_name
```


```
#!/bin/bash

echo Hello World
echo "This is a shell script"

VAR='Hello World'
echo "$VAR"

echo 'my name' > file.txt
```


```
>> bash file_name value1 value2

echo $@ # value1 value2
echo "$@" # value1 value2
echo "$1" # value1
echo "${1}" # value1
echo "${2}" # value2
echo "$((5 + 5))" # 10
# echo "$(1 + 1)" # error
# echo "$(1 + 1)" # error
```


```
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


Functions with arguments
```
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


string replace regex
```
echo "asim bader ahmed asim bader ahmed" | sed -e 's/asim/mohammed/'
# mohammed bader ahmed asim bader ahmed
echo "asim bader ahmed asim bader ahmed" | sed -e 's/asim/mohammed/g'
# mohammed bader ahmed mohammed bader ahmed


dir="aaa/bbb/ccc/ddd_eee.txt"
echo $(echo "$dir" | sed -e 's/.*\///' -e 's/\..*//' -e 's/_/ /');
```


```
log_enabled="true"
if [ "$1" = "1" ]; then
    echo "my name is asim 1"
else
    echo "my name is asim 2"
fi
```


```
T1="foo"
T2="bar"
if [ "$T1" = "$T2" ]; then
    echo expression evaluated as true
else
    echo expression evaluated as false
fi
```
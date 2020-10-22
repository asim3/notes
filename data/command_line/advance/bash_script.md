[BASH HOW-TO](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)


## to run script in terminal
```txt
bash file_name
# or
. file_name
```


```txt
#!/bin/bash

echo Hello World
echo "This is a shell script"

VAR='Hello World'
echo "$VAR"

echo 'my name' > file.txt
```


`bash file_name value1 value2`
```txt
echo $@ # value1 value2
echo "$@" # value1 value2
echo "$1" # value1
echo "${1}" # value1
echo "${2}" # value2
echo "$((5 + 5))" # 10
# echo "$(1 + 1)" # error
# echo "$(1 + 1)" # error
```


```txt
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
```txt
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


## string replace regex
```txt
echo "asim bader ahmed asim bader ahmed" | sed -e 's/asim/mohammed/'
# mohammed bader ahmed asim bader ahmed
echo "asim bader ahmed asim bader ahmed" | sed -e 's/asim/mohammed/g'
# mohammed bader ahmed mohammed bader ahmed


dir="aaa/bbb/ccc/ddd_eee.txt"
echo $(echo "$dir" | sed -e 's/.*\///' -e 's/\..*//' -e 's/_/ /');
```


```txt
log_enabled="true"
if [ "$1" = "1" ]; then
    echo "my name is asim 1"
else
    echo "my name is asim 2"
fi


if [ "$1" = "1" ]; then
    echo "1"
elif [ $1 = "test" ]; then
    echo "2 test"
else
    echo "other"
fi
```


```txt
T1="foo"
T2="bar"
if [ "$T1" = "$T2" ]; then
    echo expression evaluated as true
else
    echo expression evaluated as false
fi
```


## rename function
```txt
#!/bin/bash

path=""

function update_paths {
    for path in $1/* ; do
        if [[ $path == *"master.txt" ]]; then
            mv $path "$(echo "$path" | sed -e 's/master/index/')"
        #elif [[ $path != *"init."* ]] && [[ $path != *"index."* ]]; then
        fi
        
        if [ -d $path ]; then
            update_paths $path
        fi
    done;
}

cd data
update_paths "."
cd ..
```

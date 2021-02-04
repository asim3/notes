[docs](https://www.shellscript.sh/index.html)
[BASH HOW-TO](http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO.html)


## to run script in terminal
```bash
bash file_name.sh
# or
. file_name.sh
# or
chmod +x file_name.sh
./file_name.sh
```


`nano file_name.sh`
```bash
#!/bin/bash

echo Hello World
echo "This is a shell script"

VAR='Hello World'
echo $VAR
```


`bash file_name.sh value1 value2`
```bash
echo $@             # value1 value2
echo "$@"           # value1 value2

echo "$1"           # value1
echo "${1}"         # value1

echo "${2}"         # value2

echo "$((5 + 5))"   # 10
echo "$(1 + 1)"     # error
echo "$(1 + 1)"     # error
```


```bash
my_var="Asim"
echo $my_var
# Asim

my_var=$(date)
echo $my_var
# Sat Nov 7 20:24:40 +03 2020

my_var=$(date 2>&1)
echo $my_var
# Sat Nov 7 20:24:40 +03 2020

my_var=$(aaa 2>&1)
echo $my_var
# Command 'aaa' not found, did you m...
```

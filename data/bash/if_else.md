## IF
`nano my-test.sh && chmod +x my-test.sh`
```bash
echo "11" \
  && echo "22" \
  && echo "33" \
  || echo "44" \
  && echo "55" \
  || echo "66" \
  && echo "77" \
  || echo "88" \
  && echo "99"

# 11
# 22
# 33
# 55
# 77
# 99
```


```bash
echo "11" \
  && false \
  && echo "22" \
  && echo "33" \
  || echo "44" \
  && echo "55" \
  || echo "66" \
  && echo "77" \
  || echo "88" \
  && echo "99"

# 11
# 44
# 55
# 77
# 99
```


## IF
```bash
if whoami; then echo "true"; else echo "false"; fi;
# asim
# true

if false.sh; then echo "true"; else echo "false"; fi;
# false.sh: command not found
# false

if [ $(false) ]; then echo "true"; else echo "false"; fi;
# false

if [ $(false.sh) ]; then echo "true"; else echo "false"; fi;
# false.sh: command not found
# false

if [[ $(whoami) == 'asim' ]]; then echo "true"; else echo "false"; fi;
# true
```


## error
```bash
if [ false ]; then echo "true"; else echo "false"; fi;
# true

if [ ./false.sh ]; then echo "true"; else echo "false"; fi;
# true


if  docker image ls -a ; then echo "true"; else echo "false"; fi;
# REPOSITORY     TAG        IMAGE ID       CREATED       SIZE
# asim3/django   latest     aa3556e2640f   12 days ago   445MB
# asim3/django   v1.0.0     7670fa797668   12 days ago   445MB
# python         3-alpine   2d64a2341b7c   4 weeks ago   45MB
# true


if  docker image ls -err ; then echo "true"; else echo "false"; fi;
# unknown shorthand flag: 'e' in -err
# See 'docker image ls --help'.
# false
```


## if variables
> If you use [ ... ], you always need to remember to double quote variables

`nano my_prog.sh`
```bash
#!/bin/bash

if [[ $MY_VAR = "asim" ]]; then
    echo "asim var"

elif [ "$1" = "asim" ]; then
    echo "asim 1"

elif [[ $2 == "asim" ]]; then
    echo "asim 2"

else
    echo "other"
fi
```


## run
```bash
chmod +x my_prog.sh

./my_prog.sh asim
# asim 1

./my_prog.sh bader asim
# asim 2

MY_VAR='asim'
./my_prog.sh
# other

export MY_VAR
./my_prog.sh
# asim var
```


##  Integer Comparison 
```bash
a=1
b=2

if [ "$a" -eq 1    ]; then echo "is equal to"; fi
if [ "$a" -ne "$b" ]; then echo "is not equal to"; fi
if [ "$b" -gt "$a" ]; then echo "is greater than"; fi
if [ "$b" -ge "$a" ]; then echo "is greater than or equal to"; fi
if [ "$a" -lt "$b" ]; then echo "is less than"; fi
if [ "$a" -le "$b" ]; then echo "is less than or equal to"; fi
```


##  String Comparison 
```bash
s=asim
if [ "$s" == "asim" ]; then echo "is not equal to"; fi
if [ -z "$ss" ]; then echo "that is, has zero length"; fi
if [ -n "$s" ]; then echo "string is not null"; fi

# double-brackets
if [[ $s == as* ]]; then echo "True if $s starts with an 'as'"; fi
if [[ $s != z* ]]; then echo "True if not $s starts with an 'z'"; fi
```


## if directory
```bash
if [ -d /tmp/my-directory ]; then 
  echo "found the directory"
fi;
```


## if file
```bash
[ -f my-file ] && echo "found the regular file" || echo 'not a file'


if [ -f my-file ]; then 
  echo "found the regular file"
elif [ -w my-file ]; then
  echo "FILE exists and is writable"
elif [ -x my-file ]; then
  echo "FILE exists and is executable"
fi;
```


## if not
```bash
#!/bin/bash

if [ ! "$1" = "asim" ]; then
    echo "1 not asim"

elif [[ ! $2 == "asim" ]]; then
    echo "2 not asim"

else
    echo "other"
fi
```

## short if
```bash
test $(whoami) == 'asim' && (echo "true";)
# true

[[ $(whoami) == 'asim' ]] && (echo "true";)
# true
```


```bash
DRY_RUN=0
if "$DRY_RUN"; then
  printf 'yes it is a dry run \n'
fi

DRY_RUN=1
if ! $DRY_RUN; then
  echo 'not a dry run'
fi
```


```bash
set +e
lsb_release -a -u > /dev/null 2>&1
lsb_release_exit_code=$?
set -e

if [ "$lsb_release_exit_code" = "0" ]; then
  echo "1. lsb_release_exit_code = $lsb_release_exit_code"
else
  echo "2. lsb_release_exit_code = $lsb_release_exit_code"
fi
```

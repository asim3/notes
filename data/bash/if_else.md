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


## if directory
```bash
if [ -d /tmp/my-directory ]; then 
  echo "found the directory"
fi;
```


## if file
```bash
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
[[ $(whoami) == 'asim' ]] && (echo "true";)
# true

test $(whoami) == 'asim' && (echo "true";)
# true
```

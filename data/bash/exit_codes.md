```bash
#!/bin/sh

/usr/local/bin/my-command

if [ "$?" -ne "0" ]; then
  echo "Sorry, we had a problem there!"
fi
```


## return codes
```bash
#!/bin/sh

func_return_0() { 
  echo 'AA0'
  return 0; 
  echo 'XX0'
}

func_return_1() { 
  echo 'AA1'
  return 1; 
  echo 'XX1'
}

func_return_2() { 
  echo 'AA2'
  return 2; 
  echo 'XX2'
}


func_return_0 && [ "$?" -eq "0" ] && echo "Done 0"
# AA0
# Done 0
func_return_1 || [ "$?" -eq "1" ] && echo "Done 1"
# AA1
# Done 1
func_return_2 || [ "$?" -eq "2" ] && echo "Done 2"
# AA2
# Done 2
```


## exit vs return
```bash
is_dry_run() { 
  if [ "$DRY_RUN" = "2" ]; then
    echo 'will shut off the program';
    exit 2;
  elif [ "$DRY_RUN" = "1" ]; then
    return 1;
  else
    return 0;
  fi
}


DRY_RUN=0
if is_dry_run; then
  printf 'yes it is a dry run \n'
fi

DRY_RUN=1
if ! is_dry_run; then
  echo 'not a dry run'
fi

# OR

is_dry_run \
  && echo "yes" \
  || echo "No" \
  && echo "Done"
# No
# Done


DRY_RUN=0
is_dry_run \
  && echo "yes" \
  || echo "No" \
  && echo "Done"
# yes
# Done

# exit vs return
DRY_RUN=2
is_dry_run \
  && echo "yes" \
  || echo "No" \
  && echo "Done"
# will shut off the program
```


## exit codes
> You have to save `$?`, because as soon as you run another 
> command, such as `if`, its value will be replaced.
```bash
echo 'asim' | grep 'asim'
# asim
echo $?
# 0

echo 'asim' | grep 'bader'
echo $?
# 1


echo 'asim' | grep 'bader' | cut -d":" -f1
echo $?
# 0
```
> The `$?` variable is set to the return code of the `last executed` command. 
> In this case, that is `cut`.


```bash
/bin/sh -c "exit 3"
echo $?
# 3

/bin/bash -c "exit 4"
echo $?
# 4
```


```bash
for i in {0..3000} ; do 
  /bin/sh -c "exit $i"; 
  echo "$i: $?";
done;

# 0: 0
# 1: 1
# 2: 2
# ...
# 254: 254
# 255: 255
# 256: 0
# 257: 1
# ...
# 511: 255
# 512: 0
# 513: 1
# ...
# 2999: 183
# 3000: 184
```

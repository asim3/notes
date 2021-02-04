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
  echo 'AAA'
  return 0; 
  echo 'BBB'
}

func_return_1() { 
  echo 'AAA'
  return 1; 
  echo 'BBB'
}

func_return_2() { 
  echo 'AAA'
  return 2; 
  echo 'BBB'
}

func_return_0
# func_return_1
# func_return_2
RETURN_CODE=$?
if [ "$RETURN_CODE" -eq "0" ]; then
  echo "Done func_return_0"
elif [ "$RETURN_CODE" -eq "1" ]; then
  echo "Done func_return_1"
elif [ "$RETURN_CODE" -eq "2" ]; then
  echo "Done func_return_2"
else
  echo "Error"
fi
```
> You have to save `$?`, because as soon as you run another 
> command, such as `if`, its value will be replaced.


```bash
is_dry_run() { 
  if [ "$DRY_RUN" == "1" ]; then 
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
```


## exit codes
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

## IF
```bash
log_enabled="true"
if [ "$1" = "1" ]; then
    echo "my name is asim 1"
else
    echo "my name is asim 2"
fi


if [ "$1" = "1" ]; then
    echo "1"
elif [ "$1" = "test" ]; then
    echo "2 test"
else
    echo "other"
fi

# run.sh test >> "$1" = "test"
# run.sh test >>  $1  = "test"

# run.sh      >> "$1" = ""
# run.sh      >>  $1  = ERROR
```


```bash
T1="foo"
T2="bar"
if [ "$T1" = "$T2" ]; then
    echo expression evaluated as true
else
    echo expression evaluated as false
fi
```


## No such file or directory; 
```bash
if [ -d my-directory ]; then 
  echo found the directory; 
elif [ -f my-file ]; then 
  echo found the file; 
else
  echo ok;
fi;

###############

if [ ! -d my-directory ]; then 
  echo No such directory; 
elif [ ! -f my-file ]; then 
  echo No such file; 
else
  echo found file and directory;
fi;
```

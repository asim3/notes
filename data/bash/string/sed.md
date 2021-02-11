## replace regex
stream editor
```bash
echo "asim bader ahmed asim bader ahmed" | sed -e 's/asim/mohammed/'
# mohammed bader ahmed asim bader ahmed
echo "asim bader ahmed asim bader ahmed" | sed -e 's/asim/mohammed/g'
# mohammed bader ahmed mohammed bader ahmed

sed -e 's/input/output/'  my_file
sed -e 's/input/output/g' my_file

# edit the existing file
sed -i -e 's/input/output/' my_file
```


## sed commands
> `sed -e '/pattern/ command' my_file` 'command' can be one of 's' = search & replace, or 
> 'p' = print, or 'd' = delete, or 'i'=insert, or 'a'=append
```bash
# print all the lines that starts with -
ls -l | sed -n -e '/^-/ p'

# print all the lines that starts with d
ls -l | sed -n -e '/^d/ p'

# delete all lines that start with the comment symbol '#'
sed -e '/^#/ d' my_file

# delete all but the first 10 lines of a file
sed -e '11,$ d' my_file

# he first regexp defines the start of the range, and the second the stop
sed -n -e '/boot$/,/mach/p' a_file
```

>  Note that the default action is to print all lines that do not
match anyway, so if you want to suppress this you need to invoke
sed with the '-n' flag and then youcan use the 'p' command to 
control what is printed


```bash
dir="aaa/bbb/ccc/ddd_eee.txt"
echo $(echo "$dir" | sed -e 's/.*\///' -e 's/\..*//' -e 's/_/ /');
```

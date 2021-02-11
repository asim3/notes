# AWK
created by Aho, Weinberger & Kernighan (hence the name).
> `this is a line of text` contains 6 fields    
> first field is referred to as $1, the second as $2, etc. 
> and the whole line is called $0.
```bash
# The `field` separator
FS=" "

# the line number
NR

# the number of fields in the current line
NF
```

```bash
echo "asim:bader:ahmed" | awk -F ":" '{print $3}'
# ahmed
echo "asim:bader:ahmed" | awk -F ":" '{print $2}'
# bader
```


```bash
echo 3 | awk '{ print 2+3 }'
# 5
echo 3 | awk '{ print $1+3 }'
# 6
echo 3.2 | awk '{ print $1+3.5 }'
# 6.7
```


```bash
ls -l | awk 'BEGIN {sum=0} {sum=sum+$5} END {print sum}'
```

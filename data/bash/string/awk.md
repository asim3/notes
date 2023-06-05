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


## Increment version number
```bash
echo 9            | awk -F. -v OFS=. '{$NF += 1 ; print}'
#    10

echo 1.2.3        | awk -F. -v OFS=. '{$NF += 1 ; print}'
#    1.2.4

echo 1.2.99       | awk -F. -v OFS=. '{$NF += 1 ; print}'
#    1.2.100

echo 1.2.3.999    | awk -F. -v OFS=. '{$NF += 1 ; print}'
#    1.2.3.1000

echo 99.0.99.99   | awk -F. -v OFS=. '{$NF += 1 ; print}'
#    99.0.99.100

echo zz           | awk -F. -v OFS=. '{$NF += 1 ; print}'
#    1
```

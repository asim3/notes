## change the time zone
> To view date settings, run `timedatectl`
```txt
# To view all of the time zones
tzselect

sudo timedatectl set-timezone 'Asia/Riyadh'
```



```txt
find /var -name  asim
find /var -name  asim*
find /var -name *asim
find /var -name *asim*

find . -path "*/my-dir/*.txt" -delete

find . -path "*/my-dir/*.txt" -not -name "__init__.txt" -delete
```


```txt
sleep 3; echo done 
# execute 1 then 2

sleep 3 && echo 3 
# execute 1 then (if 1 is ok) run 2

echo 1 || echo 3 
# execute 1 then (if 1 is error) run 2
```


## Redirects stdin & stdout
0: stdin     # input   
1: stdout    # output   
2: stderr    # error output    
```txt
# Save stdout to a file
ls > my.txt
# Append stdout to a file
ls >> my.txt
```

```txt
# Save stderr to a file
lss 2> my.txt
# Append stderr to a file
lss 2>> my.txt

# Save stdout-stderr to a file
ls &> my.txt

# Append stdout-stderr to a file
ls >> my.txt 2>&1
```


```txt
# Read input from a file
grep "eco" < my_file.txt

# Read input from a file then append stdout to a file
grep "eco" < my_file.txt >> my_file2.txt
```


## echo multiline
```txt
cat << EOF > my_file.txt
first line
second line
EOF
```



```txt
cat my.txt | head
cat my.txt | tail

# scroll
cat my.txt | less
cat my.txt | more

# filter
cat my.txt | grep asim
cat my.txt | grep " asim"
cat my.txt | grep -v asim

cat my.txt | sort
cat my.txt | sort -r
# sort for numbers
cat my.txt | sort -n

cat my.txt | grep '[0-9]' | sort -n
```


```txt
NAME="John"
echo $NAME                  # John
echo 'Hello $NAME!'         # Hello $NAME!
echo "Hello $NAME!"         # Hello John!
echo "Hello $(echo $NAME)"  # Hello John
echo "${NAME}!"             # John!
```


## Run in Background
```txt
# executes in background
sleep 3 &

# list background
jobs

# go to background
fg
```



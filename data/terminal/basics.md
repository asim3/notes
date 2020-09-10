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


```txt
# Execute last command again
!!

# Save output to a file
ls > my.txt

# Save error output to a file
lss 2> my.txt

# Save output & error output to a file
ls &> my.txt

# Append output to a file
ls >> my.txt

# Append error output to a file
lss 2>> my.txt

# Append output & error output to a file
ls >> my.txt 2>&1

# Read input from a file
<
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
echo $NAME
echo "Hello $NAME!"
echo "${NAME}!"
```


Run in Background
```txt
# executes in background
sleep 3 &

# list background
jobs

# go to background
fg
```



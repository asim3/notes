## change the time zone
> To view date settings, run `timedatectl`
```bash
# To view all of the time zones
tzselect

sudo timedatectl set-timezone 'Asia/Riyadh'
```


## find
```bash
find /var -name  asim
find /var -name  asim*
find /var -name *asim
find /var -name *asim*
```


## find executable
```bash
find ./ -type f -executable
find ./ -type f -executable -print


find . -type f -readable
find . -type f -writable


# exclude/ignore hidden files and directories
find . -not -path '*/\.*'
find . -not -path '*/\.*' -name __init__.py
```


## find & delete
```bash
find ./ -path "*/my-dir/*.txt" -delete

find ./ -path "*/my-dir/*.txt" -not -name "__init__.txt" -delete
```


```bash
sleep 3; echo done 
# execute 1 then 2

sleep 3 && echo 3 
# execute 1 then (if 1 is ok) run 2

echo 1 || echo 3 
# execute 1 then (if 1 is error) run 2
```


## grep 
```bash
# filter
cat my.txt | grep asim
cat my.txt | grep " asim"
cat my.txt | grep -v asim

# show 4 lines before matches
cat my.txt | grep -B 4 asim

# show 4 lines after matches
cat my.txt | grep -A 4 asim
```


## cat
```bash
cat my.txt | head
cat my.txt | tail

# scroll
cat my.txt | less
cat my.txt | more

cat my.txt | sort
cat my.txt | sort -r
# sort for numbers
cat my.txt | sort -n

cat my.txt | grep '[0-9]' | sort -n
```



```bash
NAME="John"

echo $NAME
# John

echo 'Hello $NAME!'
# Hello $NAME!

echo "Hello $NAME!"
# Hello John!

echo "Hello $(echo $NAME)!"
# Hello John!

echo "Hello ${NAME}!"
# Hello John!
```


## Run in Background
```bash
# executes in background
sleep 3 &

# list background
jobs

# go to background
fg
```

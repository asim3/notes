## for loop
```bash
for i in {1..7}; do echo $i; done;

for i in 1 2 3 6 8; 
do 
   echo $i; 
done

for appname in 'main' 'blue' 'green'; do
   echo $appname
done;
```


## range
```bash
for i in $(seq 1 8)
do
   echo "Welcome $i times"
done

# OR

for (( c=1; c<=8; c++ ))
do  
   echo "Welcome $c times"
done
```


## infinite loops
```bash
for (( ; ; ))
do
   echo "infinite loops [ hit CTRL+C to stop]"
done
```


## Loop with files
```bash
for f in $(ls /nas/*.pdf)
do
  print "File $f"
done
```


## Loop with strings
```bash
PKGS="php7-openssl-7.3.19-r0  php7-common-7.3.19-r0  php7-fpm-7.3.19-r0  php7-opcache-7.3.19-r0 php7-7.3.19-r0"
for p in $PKGS
do
   echo "Installing $p package"
   sudo apk add "$p"
done
```

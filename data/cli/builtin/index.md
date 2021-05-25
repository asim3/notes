## random
```bash
head -c 32 /dev/urandom | base64

head -c 400 /dev/urandom | base64

head -c 1024 /dev/urandom | base64
```


## watch
```txt
watch        'ps aux | grep -i apt'
watch -n 0.1 'ps aux | grep -i apt'
watch -d     'ps aux | grep -i apt'
```


## change time zone
> To view date settings, run `timedatectl`
```bash
# To view all of the time zones
tzselect

sudo timedatectl set-timezone 'Asia/Riyadh'
```


# exec
Destroy the current shell and replace it with a new process.
```bash
exec > output.txt
```
[docs](https://www.computerhope.com/unix/bash/exec.htm)

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


# exec
Destroy the current shell and replace it with a new process.
```bash
exec > output.txt
```
[docs](https://www.computerhope.com/unix/bash/exec.htm)


## fan sensors
read temperature/voltage/fan sensors
```bash
# install
sudo apt install lm-sensors

# Configure
sudo sensors-detect

# run
sensors
```


## Save battery power on laptops
```
sudo apt install tlp

sudo tlp start
sudo tlp true
sudo tlp false
```

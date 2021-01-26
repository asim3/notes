## Shell Options
Set or unset values of shell options and positional parameters
```bash
set -ex 
#   -e  Exit immediately if a command exits with a non-zero status.
#   +e  Do not ...
#   -x  Print commands and their arguments as they are executed.
#   +x  Do not ...
```


## system logs
```txt
ls /var/log/

cat /var/log/syslog 
```


## watch
```txt
watch        'ps aux | grep -i apt'
watch -n 0.1 'ps aux | grep -i apt'
watch -d     'ps aux | grep -i apt'
```


## Shutdown
```txt
# Log Out 
exit

sudo reboot
sudo shutdown -r
sudo shutdown now
sudo shutdown -P now

shutdown +30 "Leave to pickup friend!"
```


```txt
echo "b9beac143e36226aa8a0b03fc1cbb5921cff80123866e718aaeba4edb81cfa63 *ubuntu-18.04.3-live-server-amd64.iso" | shasum -a 256 --check
```


## fix broken packages
```txt
# fix broken packages
sudo apt-get install -f 
sudo dpkg --configure -a

# cleans the packages and install script in /var/cache/apt/archives/
sudo apt clean

# cleans obsolete deb-packages, less than clean
sudo apt autoclean

# removes orphaned packages which are not longer needed
sudo apt autoremove
```

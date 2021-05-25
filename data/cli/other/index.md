## Shell Options
Set or unset values of shell options and positional parameters
```bash
set -ex 
#   -e  Exit immediately if a command exits with a non-zero status.
#   +e  Do not ...
#   -x  Print commands and their arguments as they are executed.
#   +x  Do not ...
```

## System Logs
```bash
cat /var/log/syslog | tail -n 30

cat /var/log/syslog 

ls /var/log/
```


## History
show all commands history
```bash
history
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


## find largest file
```bash
du -a /var/         | sort -n -r | head -n 20

du -a / 2>/dev/null | sort -n -r | head -n 20

sudo du -a / 2>/dev/null | sort -n -r | head -n 20
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

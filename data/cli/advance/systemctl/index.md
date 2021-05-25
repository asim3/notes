[cockpit](https://cockpit-project.org/)


## list all units
```bash
systemctl -t service
systemctl list-unit-files -t service 
systemctl --failed

# filter
systemctl list-units |grep ___
```


## units status
```bash
systemctl status ___
sudo systemctl status ___
systemctl is-enabled ___
systemctl is-active ___
systemctl is-failed ___
systemctl is-system-running
```


## start units automatically when the server boots
```bash
sudo systemctl enable ___
sudo systemctl enable ___ ___ ___
sudo systemctl disable ___

# start & enable 
sudo systemctl enable --now ___
```



## controlling units
```bash
sudo systemctl start ___
sudo systemctl stop ___
sudo systemctl reload ___
sudo systemctl restart ___

# control remote hosts using ssh 
sudo systemctl -H [hostname] restart ___
```


```bash
systemctl reboot
systemctl poweroff
systemctl suspend
```

> if system has not been booted with systemd as init system (PID 1). Can't operate.
```bash
service --status-all

 sudo service docker start
```
 

## show logs
```bash
journalctl
journalctl -u ___

# show live logs
journalctl -u ___ -f

# only from this boot
journalctl -b

tail /var/log/syslog
```

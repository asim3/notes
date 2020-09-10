```txt
touch my_service.sh
chmod +x my_service.sh
nano my_service.sh
```


```txt
#!/bin/bash

while true
do
  echo The current time is $(date)
  sleep 1
done
```


```txt
# do not add or change /usr/ directory
sudo mkdir /etc/systemd/system/asim.service.d/
sudo nano /etc/systemd/system/asim.service.d/my_service.service
```


```txt
[Service]
ExecStart=/home/asim/my_service.sh
```


```txt
sudo systemctl daemon-reload
# or
sudo systemctl start my_service

sudo systemctl cat my_service
sudo systemctl show -p Restart my_service
sudo systemctl status my_service
tail /var/log/syslog
```


## for more options
```txt
man systemd.service


## for editing my_service.service
```txt
sudo systemctl edit my_service

# create a copy of the original unit file
sudo systemctl edit my_service --full
```


```txt
[Unit]
Description=My my_service Service
After=network.target

[Service]
Type=simple
# Another Type: forking
User=asim
WorkingDirectory=/home/asim
ExecStart=/home/asim/my_daemon --option=123
Restart=on-failure
# Other restart options: always, on-abort, etc


# The install section is needed to use
# `systemctl enable` to start on boot
# For a user service that you want to enable
# and start automatically, use `default.target`
# For system level services, use `multi-user.target`
[Install]
WantedBy=multi-user.target
```


## install ssh server
```txt
sudo apt install -y openssh-server

sudo systemctl status ssh
```


## setup ssh
```txt
mkdir ~/.ssh/
chmod 700 ~/.ssh/

touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/*
```


## systemd
```
sudo systemctl enable ssh
sudo systemctl status ssh
```

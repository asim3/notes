## Install SSH
```txt
sudo apt install -y openssh-server
mkdir ~/.ssh/
touch ~/.ssh/authorized_keys
chmod 700 ~/.ssh/
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/*
```


## systemd
```
sudo systemctl enable ssh
sudo systemctl status ssh
```

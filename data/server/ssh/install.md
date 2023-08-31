## install ssh server
```txt
sudo apt install -y openssh-server
sudo systemctl enable ssh
sudo systemctl status ssh

mkdir ~/.ssh/
chmod 700 ~/.ssh/

touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/*
```


## logs
```
journalctl -u ssh

journalctl -b -u ssh
```

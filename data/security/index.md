## Hack The Box
[machines](https://app.hackthebox.com/machines)
[academy](https://academy.hackthebox.com/dashboard)
[Kali Linux](https://www.kali.org/get-kali/#kali-virtual-machines)


## install
```txt
mkdir -p /tmp/my_kali_linux \
    && curl -LO https://kali.download/virtual-images/kali-2022.2/kali-linux-2022.2-virtualbox-amd64.ova \
    && cd /tmp/my_kali_linux/ \
    && echo "649d35f610205828a08c86d862dc6e660dced6553e55f62acf59d57643c5031f  kali-linux-2022.2-virtualbox-amd64.ova" \
    | shasum -a 256 --check \
    && echo OK
```


## Access
[Download your connection pack](https://www.hackthebox.com/home/htb/access)
```bash
# setup openVBN
sudo openvpn asim3.ovpn
sudo openvpn academy-regular.ovpn
```

> Have fun! Find IP addresses of attackable machines on 
> the [Active Machines](https://www.hackthebox.com/home/machines) page.


## Attack Machines
```bash
cat /etc/passwd


# flag location
cat ~/user.txt 
cat /root/root.txt 
```


## nmap
```bash
nmap 10.10.11.143
# PORT     STATE    SERVICE
# 22/tcp   open     ssh
# 80/tcp   open     http
# 443/tcp  open     https
# 5033/tcp filtered jtnetd-server


nmap -sC -sV 10.10.11.148

# -oA <basename>: Output in the three major formats at once
nmap -sC -sV -oA ./nmap-result 10.10.11.148
```


## WordPress
[wp vulnerability](https://wpscan.com/vulnerability/3413b879-785f-4c9f-aa8a-5a4a1d5e0ba2)
```bash
# WordPress Security Scanner
wpscan --url http://office.paper/ --enumerate u,ap
```


## apk
```bash
# Android in a box
sudo apt install anbox

# Android Debug Bridge
sudo apt install adb


# install apk
adb install RouterSpace.apk
```

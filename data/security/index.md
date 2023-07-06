[22,000+ Security Tests](https://pentester.com/)

---

[Snyk: scan your own code](https://snyk.io/plans/)


## SSH Best Practices
`sudo nano /etc/ssh/sshd_config`
`sudo systemctl restart sshd`
```txt
Port 1027
AddressFamily inet

PermitRootLogin no

PasswordAuthentication no
PermitEmptyPasswords no
```


## list open ports
```bash
sudo ss -tupln
# Netid   State    Recv-Q   Send-Q   Local Address:Port   Peer Address:Port   rocess                                                            
# tcp     LISTEN   0        128              0.0.0.0:22           0.0.0.0:*   users:(("sshd",pid=716,fd=3))                                     
# tcp     LISTEN   0        128                 [::]:22              [::]:*   users:(("sshd",pid=716,fd=4))                                     
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

## Setup OpenVPN Server
```bash
sudo apt-get update && sudo apt-get upgrade

sudo apt -y install openvpn

openvpn --genkey --secret static-OpenVPN.key

sudo openvpn --dev tun --ifconfig 172.16.0.1 172.16.0.2 --cipher AES-256-CBC --secret static-OpenVPN.key &

ip a show tun0

netstat -anu | grep 1194

sudo ufw allow from any to any port 1194 proto udp
```


## remote client
```bash
sudo apt -y install openvpn

scp ubuntuser@linuxhint:/home/ubuntuser/static-OpenVPN.key

# Establishing a VPN Tunnel to the Server
sudo openvpn --remote YOUR-OPENVPN-SERVER-IP-OR-HOST --dev tun --ifconfig 172.16.0.1 172.16.0.2 --cipher AES-256-CBC --secret static-OpenVPN.key &

ping -c 1 172.16.0.1
```

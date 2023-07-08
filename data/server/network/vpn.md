## Set Up WireGuard
[Tutorial](https://www.digitalocean.com/community/tutorials/how-to-set-up-wireguard-on-ubuntu-22-04)
```bash
sudo apt update
sudo apt install wireguard

# generate a private key
wg genkey | sudo tee /etc/wireguard/private.key
# MHuEIznuv2s1r6+h0CzQ71rOoPebz7FMCT8/1SaHVl0=
sudo chmod go= /etc/wireguard/private.key

# generate a public key
sudo cat /etc/wireguard/private.key | wg pubkey | sudo tee /etc/wireguard/public.key
# Hgie7ESE4OQ+ACmSq/Gjz/a2TQe5pqDBXZD3w7EbxXE=

# Server Configuration
cat <<EOF | sudo tee /etc/wireguard/wg0.conf
[Interface]
PrivateKey = MHuEIznuv2s1r6+h0CzQ71rOoPebz7FMCT8/1SaHVl0=
Address = 10.8.0.1/24
ListenPort = 51820
SaveConfig = true
EOF


# Starting the WireGuard Server
sudo systemctl enable wg-quick@wg0.service

sudo systemctl start wg-quick@wg0.service

sudo systemctl status wg-quick@wg0.service
```


## WireGuard Peer
```bash
sudo apt update
sudo apt install wireguard

# generate a private key
wg genkey | sudo tee /etc/wireguard/private.key
# QNderzdyeHt0yoLJsPhUzOsApQBWvWHJgRew0ZTj3UU=
sudo chmod go= /etc/wireguard/private.key

# generate a public key
sudo cat /etc/wireguard/private.key | wg pubkey | sudo tee /etc/wireguard/public.key
# m7orIxawpeQaaqrCxy/J3LrU48XCCDyYCyqw5e1pVC8=


# Server Configuration
cat <<EOF | sudo tee /etc/wireguard/wg0.conf
[Interface]
PrivateKey = QNderzdyeHt0yoLJsPhUzOsApQBWvWHJgRew0ZTj3UU=
Address = 10.8.0.2/24

[Peer]
PublicKey = Hgie7ESE4OQ+ACmSq/Gjz/a2TQe5pqDBXZD3w7EbxXE=
AllowedIPs = 10.8.0.0/24
Endpoint = 192.168.122.161:51820
EOF


# @main-WireGuard-server
# Ensure that you have a copy of the base64 encoded public key 
# for the WireGuard Peer at the main server. Log into the Main WireGuard
# server, and run the following command:
sudo wg set wg0 peer m7orIxawpeQaaqrCxy/J3LrU48XCCDyYCyqw5e1pVC8= allowed-ips 10.8.0.2


sudo wg
# interface: wg0
#   public key: Hgie7ESE4OQ+ACmSq/Gjz/a2TQe5pqDBXZD3w7EbxXE=
#   private key: (hidden)
#   listening port: 51820

# peer: m7orIxawpeQaaqrCxy/J3LrU48XCCDyYCyqw5e1pVC8=
#   allowed ips: 10.8.0.2/32


# Starting the WireGuard Server
sudo systemctl enable wg-quick@wg0.service

sudo systemctl start wg-quick@wg0.service

sudo systemctl status wg-quick@wg0.service
```


---
## nfs over wireguard
[nfs-over-wireguard](https://alexdelorenzo.dev/linux/2020/01/28/nfs-over-wireguard.html)
```bash

```


---
## OpenVPN Setup Server
```bash
sudo apt-get update && sudo apt-get upgrade

sudo apt -y install openvpn

openvpn --genkey --secret static-OpenVPN.key

sudo openvpn --dev tun --ifconfig 172.16.0.1 172.16.0.2 --cipher AES-256-CBC --secret static-OpenVPN.key &

ip a show tun0

netstat -anu | grep 1194

sudo ufw allow from any to any port 1194 proto udp
```


## OpenVPN Remote Client
```bash
sudo apt -y install openvpn

scp ubuntuser@linuxhint:/home/ubuntuser/static-OpenVPN.key

# Establishing a VPN Tunnel to the Server
sudo openvpn --remote YOUR-OPENVPN-SERVER-IP-OR-HOST --dev tun --ifconfig 172.16.0.1 172.16.0.2 --cipher AES-256-CBC --secret static-OpenVPN.key &

ping -c 1 172.16.0.1
```

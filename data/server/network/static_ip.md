## netplan static ip
```bash
ls -l /etc/netplan/
# -rw-r--r-- 1 root root 294 Jun 13 08:16 00-installer-config.yaml


# V Box Settings
# VM.settings.network.adapter.1 = NAT
# VM.settings.network.adapter.2 = NAT Network
```

## netplan config
`sudo nano /etc/netplan/00-installer-config.yaml`
```yaml
network:
  version: 2
  ethernets:
    enp0s3:
      dhcp4: true
    enp0s8:
      dhcp4: false
      addresses:
      - 10.0.0.1/24
      routes:
      - to: default
        via: 10.0.0.255
      nameservers:
        addresses:
        - 8.8.8.8
        - 8.8.4.4
```


## netplan apply
```bash
sudo netplan apply
```

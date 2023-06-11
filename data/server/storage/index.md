# File Sharing Protocol
`SMB` protocol is optimized for Windows & Linux

`NFS` protocol is optimized for Linux

`FTP` 

> NFS uses the Remote Procedure Call (RPC) protocol to route requests between 
> clients and servers. Although participating devices must support NFS, they 
> don't need to understand the network's details. However, RPCs can be insecure, 
> so NFS should be deployed only on trusted networks behind firewalls. The 
> protocol is used primarily in Linux environments, although it is 
> supported by Windows.
 

## NFS install
[Setup an NFS Server](https://www.youtube.com/watch?v=Na_jKeVWzrc)
```bash
ssh asim@my-nfs


sudo mkdir -p /exports/backup
sudo mkdir -p /exports/my_data

sudo apt install nfs-kernel-server

systemctl status nfs-kernel-server
# Active:   active (exited)
# !!!!!!!!!!!!!!!!!!!
# exportfs: can't open /etc/exports for reading
```


## NFS conf
```bash
sudo mv /etc/exports /etc/exports.old

# -rw-r--r-- 1 root root 389 Oct 20  2022 /etc/exports.old

cat <<EOF | sudo tee -a /etc/exports
/exports/backup 10.10.10.0/255.255.255.0(rw,no_subtree_check)
/exports/my_data 10.10.10.0/255.255.255.0(rw,no_subtree_check)
EOF


sudo systemctl restart nfs-kernel-server

systemctl status nfs-kernel-server
# Active: active (exited)
# Jun 11 08:44:29 asim-nfs systemd[1]: Starting NFS server and services...
# Jun 11 08:44:29 asim-nfs systemd[1]: Finished NFS server and services.
```


## add test files
```bash
echo "Good" | sudo tee -a /exports/my_data/by_asim.txt
echo "Good" | sudo tee -a /exports/backup/by_asim_2.txt

tree /exports/
# /exports/
# ├── backup
# │   └── by_asim_2.txt
# └── my_data
#     └── by_asim.txt
```


## NFS install client
```bash
ssh asim@my-vm

sudo mkdir -p /mnt/my_nfs/backup-2
sudo mkdir -p /mnt/my_nfs/my_data-2

sudo apt install nfs-common
```


## test conn client
```bash
showmount --exports 10.89.9.161
# Export list for 10.89.9.161:
# /exports/my_data 10.10.10.0/255.255.255.0
# /exports/backup  10.10.10.0/255.255.255.0
```


## mount
```bash
sudo mount 10.89.9.161:/exports/backup /mnt/my_nfs/backup-2
sudo mount 10.89.9.161:/exports/my_data /mnt/my_nfs/my_data-2

# debug
sudo mount -t nfs -vvvv 10.89.9.161:/exports/my_data /mnt/my_nfs/my_data-2

# mounting with NFSv3
sudo mount -t nfs -o nfsvers=3 10.89.9.161:/exports/my_data /mnt/my_nfs/my_data-2
```


## test mount
```bash
df -h
# 10.89.9.161:/exports/my_data     9.8G  3.0G  6.4G 32% /mnt/my_nfs/my_data-2
# 10.89.9.161:/exports/backup      9.8G  3.0G  6.4G 32% /mnt/my_nfs/backup-2
```

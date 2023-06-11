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


## NFS client
```bash
```

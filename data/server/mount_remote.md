## install SSHFS
```bash
sudo apt install sshfs

sshfs -V

# OR

sudo yum install fuse-sshfs
```


## temporary mount remote file
- @ local make an empty directory in `/mnt`
- `mkdir /mnt/my_local_folder`
- or `mkdir /tmp/my_local_folder`
- @ remote `ssh asim@172.20.10.4 mkdir /home/asim/my_remote_folder`
- `sudo sshfs -o allow_other,default_permissions asim@172.20.10.4:/home/asim/my_remote_folder /tmp/my_local_folder`


## umount
- `sudo umount /tmp/my_local_folder`


## temporary mount remote file
- `sudo nano /etc/fstab`
- `asim@172.20.10.4:/home/asim/my_remote_folder /tmp/my_local_folder fuse.sshfs noauto,x-systemd.automount,_netdev,reconnect,identityfile=/home/asim/.ssh/id_rsa,allow_other,default_permissions 0 0`


`sammy@your_other_server:~/` is the remote path again, just as before.


`/mnt/droplet` is the local path again.


`fuse.sshfs` specifies the driver being used to mount this remote directory.


`noauto,x-systemd.automount,_netdev,reconnect` are a set of options that work 
together to ensure that permanent mounts to network drives behave gracefully 
in case the network connection drops from the local machine or the remote 
machine.


`identityfile=/home/sammy/.ssh/id_rsa` specifies a path to a local SSH key so 
that the remote directory can be mounted automatically. Note that this example 
assumes that both your local and your remote username are sammy – this refers 
to the local path. It is necessary to specify this because /etc/fstab 
effectively runs as root, and would not otherwise know which username’s 
SSH configurations to check for a key that is trusted by the remote server.


`allow_other,default_permissions` use the same permissions from the mount 
command above.


`0 0` signifies that the remote filesystem should never be dumped or validated 
by the local machine in case of errors. These options may be different when 
mounting a local disk.

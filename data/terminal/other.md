```txt
watch 'ps aux | grep -i apt'
```


## Prepare a Drive
```txt
lsblk
df -h

# unmount a drive
sync
sudo umount /dev/sdb1

# edit
sudo fdisk /dev/sdb
   i   print information about a partition
   d   delete a partition
   F   list free unpartitioned space
   n   add a new partition
       p   primary (0 primary, 0 extended, 4 free)
       1   partition number
           enter for default
           enter for default
           
   t   change a partition type
       83  for Linux

   p   print the partition table
   w   write table to disk and exit

# Format the new partition using Ext4
sudo mkfs.ext4 /dev/sdb1
```


## Mount a new drive
```txt
sudo mkdir /my-new-dev/
sudo mount /dev/sdb1 /my-new-dev/

df -H
lsblk
```


## ISO Bootable USB
```txt
usb-creator-gtk
```


```txt
echo "b9beac143e36226aa8a0b03fc1cbb5921cff80123866e718aaeba4edb81cfa63 *ubuntu-18.04.3-live-server-amd64.iso" | shasum -a 256 --check
```


## Shutdown
```txt
# Log Out 
exit

sudo reboot
sudo shutdown -r
sudo shutdown now
sudo shutdown -P now

shutdown +30 "Leave to pickup friend!"
```


## fix broken packages
```txt
# fix broken packages
sudo apt-get install -f 
sudo dpkg --configure -a

# cleans the packages and install script in /var/cache/apt/archives/
apt clean

# cleans obsolete deb-packages, less than clean
apt autoclean

# removes orphaned packages which are not longer needed
apt autoremove
```


## execute a file
```txt
if [ -f ~/file_name ]; then
    source ~/file_name;
fi
```

```txt
if [ -f ~/file_name.txt ]; then echo 333; else echo 444; fi;
```

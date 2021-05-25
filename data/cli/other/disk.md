## Disk Info
```bash
df -h

# only include filesystems of a particular type
df -ht ext4

# list all drives
lsblk

# directory size
du -sh my_directory/
```


## ISO Bootable USB
```txt
lsblk
df -h

usb-creator-gtk
```


## partition managers
```bash
sudo fdisk /dev/sda

# OR graphical
sudo apt install gparted

# GNOME Disks a.k.a (GNOME Disks Utility)
sudo apt install gnome-disk-utility
```


## iso to usb
```bash
sudo apt install gddrescue

ddrescue -V

sudo ddrescue path/to/my.iso /dev/sdx --force -D

lsblk | grep sd

sudo ddrescue ./Downloads/iso/debian-live-10.7.0-amd64-gnome.iso /dev/sdb1
```


## edit a drive
```txt
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
```


## Mount a new drive
```txt
lsblk | grep sd

sudo mount /dev/sdb1 /my-new-dev/
```


# Format
> WARNING: Format the new partition using Ext4
```bash
# list block devices
lsblk

sudo mkfs.ext4 /dev/sdb1
```

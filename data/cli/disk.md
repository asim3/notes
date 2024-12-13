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


## Dir Size
```bash
sudo du -sh /home/*
# 28K	    /home/asim
# 2.7G	    /home/aaa
# 192K	    /home/bbb
# 3.2G	    /home/ccc
# 3.2G	    /home/ddd


# docker
du -sh /var/lib/docker/overlay2/
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


## LVM Logical Volume
```bash
sudo pvdisplay
sudo lvdisplay

sudo vgs
#   VG        #PV #LV #SN Attr   VSize   VFree
#   ubuntu-vg   1   1   0 wz--n- <23.00g    0

ll /dev/sdb*
# brw-rw---- 1 root disk 8, 16 Dec 14 12:10 /dev/sdb
# brw-rw---- 1 root disk 8, 17 Dec 14 12:10 /dev/sdb1

sudo pvcreate /dev/sdb1
#   Physical volume "/dev/sdb1" successfully created.

sudo vgcreate vg-data /dev/sdb1
#   Volume group "vg-data" successfully created

sudo vgs
#   VG        #PV #LV #SN Attr   VSize    VFree
#   ubuntu-vg   1   1   0 wz--n-  <23.00g       0
#   vg-data     1   0   0 wz--n- <100.00g <100.00g

sudo lvcreate --name lv-data -l 100%FREE vg-data

# make a filesystem: format this new LV
sudo mkfs.xfs /dev/vg-data/lv-data
```


## LVM copy /var
```bash
sudo mkdir /var.new
sudo mount /dev/vg-data/lv-data /var.new

sudo cp -R  /var/* /var.new
sudo du -sh /var /var.new

sudo umount /dev/mapper/vg--data-lv--data
sudo rm -r /var.new

sudo mount /dev/vg-data/lv-data /var
```


## Permanently mount
`sudo nano /etc/fstab`
```bash
# By Asim for LVM
/dev/mapper/vg--data-lv--data   /var   xfs   defaults 0 0

# By Asim for Docker
UUID=a576a576-a5d8-4648-b992-b992b992b992              /var/lib/docker/overlay2 ext4  defaults  0  2
/dev/disk/by-uuid/a576a576-14c6-40e9-a576-a576a576a576 /var/lib/docker/overlay2 ext4  defaults  0  0
```


## info `lsblk`
```txt
NAME         MAJ:MIN   RM     SIZE   RO   TYPE MOUNTPOINTS
nvme0n1      259:0      0   238.5G    0   disk 
│
├─nvme0n1p1  259:1      0     512M    0   part /boot/efi
│
├─nvme0n1p2  259:2      0    23.3G    0   part /
│
├─nvme0n1p3  259:3      0     9.3G    0   part /var
│
├─nvme0n1p4  259:4      0     977M    0   part [SWAP]
│
├─nvme0n1p5  259:5      0     1.9G    0   part /tmp
│
├─nvme0n1p6  259:6      0   183.9G    0   part /home
│
└─nvme0n1p7  259:7      0    18.6G    0   part /var/lib/docker/overlay2
```


## ifno `df -h`
```txt
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev

tmpfs           1.2G  1.9M  1.2G   1% /run

/dev/nvme0n1p2   23G  6.9G   15G  32% /

tmpfs           5.8G   57M  5.7G   1% /dev/shm

tmpfs           5.0M  8.0K  5.0M   1% /run/lock

/dev/nvme0n1p5  1.8G  6.3M  1.7G   1% /tmp

/dev/nvme0n1p3  9.1G  1.7G  7.0G  19% /var

/dev/nvme0n1p6  180G   42G  130G  25% /home

/dev/nvme0n1p1  511M  7.7M  504M   2% /boot/efi

tmpfs           1.2G  2.5M  1.2G   1% /run/user/1000
```

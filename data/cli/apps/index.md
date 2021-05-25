[lists of official GNU packages](http://www.gnu.org/manual/manual.html)



## random
```bash
head -c 32 /dev/urandom | base64

head -c 400 /dev/urandom | base64

head -c 1024 /dev/urandom | base64
```


## Tree
```bash
sudo apt  install tree

mkdir test-tree
mkdir test-tree/file1
mkdir test-tree/file2
mkdir test-tree/file3
touch test-tree/file1/file1.txt
touch test-tree/file1/file2.txt

tree test-tree/
test-tree/
├── file1
│   ├── file1.txt
│   └── file2.txt
├── file2
└── file3

3 directories, 2 files
```


## watch
```txt
watch        'ps aux | grep -i apt'
watch -n 0.1 'ps aux | grep -i apt'
watch -d     'ps aux | grep -i apt'
```


## change time zone
> To view date settings, run `timedatectl`
```bash
# To view all of the time zones
tzselect

sudo timedatectl set-timezone 'Asia/Riyadh'
```

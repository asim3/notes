## change time zone
> To view date settings, run `timedatectl`
```bash
# To view all of the time zones
tzselect

sudo timedatectl set-timezone 'Asia/Riyadh'
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

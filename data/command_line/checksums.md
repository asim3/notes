## generate sha256sum
SHA256 (256-bit)
```txt
touch file-1.txt
touch file-2.txt
touch file-3.txt

sha256sum file-1.txt            >> files.sha256sum
sha256sum file-2.txt file-3.txt >> files.sha256sum
```

## check sha256sum
```txt
sha256sum -c files.sha256sum
```


## generate md5sum 
MD5 (128-bit)
```txt
touch my-file.txt
md5sum my-file.txt > my-file.md5sum
```

## check md5sum
```txt
md5sum -c my-file.md5sum
```
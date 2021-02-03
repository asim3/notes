# sha256sum
## generate 
SHA256 (256-bit)
```bash
touch file-1.txt
echo 'my file 2' > file-2.txt
touch file-3.txt

sha256sum file-1.txt            > files.sha256sum
sha256sum file-2.txt file-3.txt >> files.sha256sum


cat files.sha256sum 
# e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855  file-1.txt
# b0555ec1f9ef8f1ac39bd86153d00022cc807dd216907ab85b8114607dbcbd05  file-2.txt
# e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855  file-3.txt
```


## check
```bash
sha256sum -c files.sha256sum \
  && echo Done.
# file-1.txt: OK
# file-2.txt: OK
# file-3.txt: OK
# Done.
```


## failed
```bash
sed -e s/file-1/file-2/ files.sha256sum \
  | sha256sum -c - \
  && echo Done \
  || echo Not Done.
# file-2.txt: FAILED
# file-2.txt: OK
# file-3.txt: OK
# sha256sum: WARNING: 1 computed checksum did NOT match
# Not Done.
```


# MD5 (128-bit)

## generate md5sum 
```bash
touch my-file.txt
md5sum my-file.txt > my-file.md5sum
```

## check md5sum
```bash
md5sum -c my-file.md5sum
```

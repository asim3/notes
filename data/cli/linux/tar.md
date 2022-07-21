## Files archive
```bash
# new tar file
tar -cf my_archive.tar my_file.txt
tar -cf dir_archive.tar ./my_dir/

# Extract tar file
tar -xf my_archive.tar
tar -xvf my_archive.tar # print all files verbosely

# List all files in my_archive.tar
tar -tf my_archive.tar
tar -tvf my_archive.tar

# print all files while adding to archive
tar -cvf my_archive.tar my_file.txt 
```


## gzipped archive >> super small size
```bash
# -z: use gzip compress
tar -czf my_archive.tar.gz /var/my_dir/
tar -xzf my_archive.tar.gz

# OR

gzip -k /tmp/my_backup.sql

gzip -kd /tmp/my_backup.sql.gz
gunzip /tmp/my_backup.sql.gz
```


## zip
```bash
zip -r FILE.zip DIRECTORY/

unzip FILE.zip
```

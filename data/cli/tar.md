## Files archive
- `-c` Create a new archive.
- `-v` Verbosely  list  files  processed.
- `-p --preserve-permissions, --same-permissions` extract information about file permissions (default for superuser)
- `-z, --gzip, --gunzip, --ungzip` Filter the archive through gzip(1).
- `-f, --file=my_backup.tar.gz` If this option is not given, tar will first examine the environment variable `TAPE'.  If it is set, its value will be used as the archive name.
- `--rsh-command=/usr/bin/ssh --file=10.0.0.1:/dev/sr0` An archive name that has a colon in it specifies a file or device on a remote machine.
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


## Best Practices Backup
```bash
sudo tar -cpzf my_backup.tar.gz --exclude=/do_not/include_dir /var/my_dir

mkdir /home/asim/my_recover_dir

sudo tar -xpzf my_backup.tar.gz -C /home/asim/my_recover_dir
```

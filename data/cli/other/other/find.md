## find
```bash
find /var -name  asim
find /var -name  asim*
find /var -name *asim
find /var -name *asim*
```


## find executable
```bash
find ./ -type f -executable
find ./ -type f -executable -print


find . -type f -readable
find . -type f -writable


# exclude/ignore hidden files and directories
find . -not -path '*/\.*'
find . -not -path '*/\.*' -name __init__.py
```


## find & delete
```bash
find ./ -path "*/my-dir/*.txt" -delete

find ./ -path "*/my-dir/*.txt" -not -name "__init__.txt" -delete
```


## exec
copy all photo in a directory
```bash
find . -name \*.jpg -exec cp {} ~/my-new-jpg \;

sudo find /var/www/my-site.com -type d -exec chmod 755 {} +
sudo find /var/www/my-site.com -type f -exec chmod 644 -- {} +
```

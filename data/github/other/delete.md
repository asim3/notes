
## stop tracking a file
To stop tracking a file you need to remove it from the index. 
```bash
git rm --cached my_file

git rm -r --cached my_folder
```

> WARNING: While this will not remove the physical file from your local, 
> it will remove the files from other developers machines on next `git pull`.

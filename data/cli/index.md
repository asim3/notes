# Command-line Interface (cli)

Ubuntu Operating System using the `bash shell` to control the `Linux kernel`

The `Linux kernel` main job is to control the `hardware`

GNU is an collection of free software like `bash`, `nano`, `grep` and `tar`


```bash
mkdir add_new_folders

rm *.pdf
rm -rf remove_directories_and_contents_by_force

cp copy_this.txt /to_directorie/
cp duplicate.txt .

mv rename_folders to_downloads
mv rename_files.js to_other.js
```


## Read and Edit
```bash
touch add_new_file.txt

cat read_file_in_terminal.txt
less read_file_in_terminal.txt # press "q" to exit

nano edit_file.txt
gedit edit_file.txt
```


## Permissions
```bash
sudo chown asim:asim /www
sudo chown myusername file.txt

sudo chmod +rwx file.txt
sudo chmod -rwx file.txt
sudo chmod -x file.txt
sudo chmod +x file.txt
sudo chmod 664 file.txt

0 = ---
1 = --x
2 = -w-
3 = -wx
4 = r-
5 = r-x
6 = rw-
7 = rwx
```

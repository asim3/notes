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


## basics
```bash
sleep 3; echo done 
# execute 1 then 2

sleep 3 && echo 3 
# execute 1 then (if 1 is ok) run 2

echo 1 || echo 3 
# execute 1 then (if 1 is error) run 2
```


## grep 
```bash
# filter
cat my.txt | grep asim
cat my.txt | grep " asim"
cat my.txt | grep -v asim

# show 4 lines before matches
cat my.txt | grep -B 4 asim

# show 4 lines after matches
cat my.txt | grep -A 4 asim
```


## cat
```bash
cat my.txt | head
cat my.txt | tail

# scroll
cat my.txt | less
cat my.txt | more

cat my.txt | sort
cat my.txt | sort -r
# sort for numbers
cat my.txt | sort -n

cat my.txt | grep '[0-9]' | sort -n
```


## append
```bash
ls -al  >      my_file_1.txt
ls -al  |  tee my_file_2.txt

# append
ls -al >> my_file_1.txt
ls -al  |  tee -a my_file_2.txt
```


```bash
NAME="John"

echo $NAME
# John

echo 'Hello $NAME!'
# Hello $NAME!

echo "Hello $NAME!"
# Hello John!

echo "Hello $(echo $NAME)!"
# Hello John!

echo "Hello ${NAME}!"
# Hello John!
```


## Run in Background
```bash
# executes in background
sleep 3 &

# list background
jobs

# go to background
fg
```


## curl
```bash
app_version=v1.6.3
app_link="https://github.com/releases/download/app-${app_version}-amd64.tar.gz"


mkdir -p /tmp/my_app \
    && curl -Lo /tmp/my_app/my_app.tar.gz ${app_link} \
    && cd /tmp/my_app/ \
    && tar -xvf ./my_app.tar.gz \
    && sudo mv ./app-${app_version}-amd64.tar.gz/my_app /usr/local/bin/my_app
```

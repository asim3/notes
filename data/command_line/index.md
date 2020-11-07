> `kernel` controls the `hardware`    
> `shell`  controls the `kernel`

Ubuntu Operating System using `Linux kernel` and `bash shell`    
GNU is an collection of free software like `bash`, `nano`, `grep` and `tar`


```txt
mkdir add_new_folders

rm *.pdf
rm -rf remove_directories_and_contents_by_force

cp copy_this.txt /to_directorie/
cp duplicate.txt .

mv rename_folders to_downloads
mv rename_files.js to_other.js
```


## Read and Edit
```txt
touch add_new_file.txt

cat read_file_in_terminal.txt
less read_file_in_terminal.txt # press "q" to exit

nano edit_file.txt
gedit edit_file.txt
```


## CURL
```txt
curl google.com

# Follow redirects
curl -L google.com

# write to file instead of stdout
curl -o my_new_file_name.txt google.com

# O capital: write to a file with the original name
curl -O https://raw.githubusercontent.com/asim3/notes/master/data/master.txt

# Silent mode
curl -s -O https://raw.githubusercontent.com/asim3/notes/master/data/master.txt
curl -sO https://raw.githubusercontent.com/asim3/notes/master/data/master.txt

# run the file in command line
curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash

# Allow insecure server connections when using SSL
curl -k https://0.0.0.0:40499

# sending multiple headers
curl -H "Accept: application/json" -H "Content-Type: application/json" https://google.com

# CURL in readable JSON format
curl https://jsonplaceholder.typicode.com/users | json_pp

# embedded text
curl -s https://storage.googleapis.com/kubernetes-release/`echo release`/stable.txt
```


## curl POST
```txt
curl --request POST \
  --url 'http://google.com' \
  --header 'Authorization: Bearer GUiOiJ1c2VyoX8' \
  --header 'Content-Type: application/json' \
  --data '{"name": "asim"}'


# PUT
curl --request PUT \
  --url 'http://google.com' \
  --header 'Authorization: Bearer GUiOiJ1c2VyoX8' \
  --header 'Content-Type: application/json'


# DELETE
curl --request DELETE \
  --url 'http://google.com' \
  --header 'Authorization: Bearer GUiOiJ1c2VyoX8' \
  --header 'Content-Type: application/json'


# GET
curl --request GET \
  --url 'http://google.com' \
  --header 'Authorization: Bearer GUiOiJ1c2VyoX8' \
  --header 'Content-Type: application/json'
```


## Permissions
```txt
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

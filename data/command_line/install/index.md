## update all
```bash
sudo apt -y update \
  && sudo apt -y upgrade \
  && sudo apt -y autoremove \
  && sudo apt -y autoclean \
  && sudo apt-get --fix-broken autoremove \
  && echo Done.
```


## Install deb Package
```txt
sudo dpkg -i <name of package>.deb
```


## Extract tar file
```txt
tar -xf  my_archive.tar
tar -xzf my_archive.tar.gz

# print all files verbosely
tar -xvf my_archive.tar 
```


## Temporary Install
delete all 18 packages installed with the first command
```txt
sudo apk add --virtual .asim-package gcc vim

sudo apk del           .asim-package
```

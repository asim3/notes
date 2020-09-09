[Install Debian 10 Buster](https://www.debian.org/)


## Unpack an archive
```bash
tar -xzf Postman.tar.gz 
```


## Install RPM Packages On Ubuntu
```bash
sudo apt update
apt show virtualbox
sudo apt install virtualbox
```


## Install RPM Packages On Ubuntu
```bash
# setup
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install alien

# convert .rpm package to .deb
sudo alien <name of package>.rpm
```


## Install deb Package On Ubuntu
```bash
sudo dpkg -i <name of package>.deb
```


## Install RPM Package Directly on Ubuntu
```bash
sudo alien -i <name of package>.rpm
```


## install the Java Runtime Environment (JRE)
```bash
sudo apt install default-jre
java -version

sudo apt install default-jdk
javac -version
```


## Installing the Oracle JDK
```bash
# ???? not working
# add its package repository
sudo add-apt-repository ppa:webupd8team/java
sudo apt update

sudo apt install oracle-java8-installer
```

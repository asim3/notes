[Install Debian 10 Buster](https://www.debian.org/)


## Unpack an archive
```txt
tar -xzf Postman.tar.gz 
```


## Install RPM Packages On Ubuntu
```txt
sudo apt update
apt show virtualbox
sudo apt install -y virtualbox
```


## Install RPM Packages On Ubuntu
```txt
# setup
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install -y alien

# convert .rpm package to .deb
sudo alien <name of package>.rpm
```


## Install deb Package On Ubuntu
```txt
sudo dpkg -i <name of package>.deb
```


## Install RPM Package Directly on Ubuntu
```txt
sudo alien -i <name of package>.rpm
```


## install the Java Runtime Environment (JRE)
```txt
sudo apt install -y default-jre
java -version

sudo apt install -y default-jdk
javac -version
```


## Installing the Oracle JDK
```txt
# ???? not working
# add its package repository
sudo add-apt-repository ppa:webupd8team/java
sudo apt update

sudo apt install -y oracle-java8-installer
```

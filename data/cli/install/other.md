[install VS Code](https://code.visualstudio.com/Download)


## Install RPM Package Directly on Debian
```txt
sudo alien -i <name of package>.rpm
```


## Install RPM Packages On Debian
```txt
sudo add-apt-repository universe
sudo apt-get update
sudo apt-get install -y alien

# convert .rpm package to .deb
sudo alien <name of package>.rpm
```


## install the Java Runtime Environment (JRE)
```txt
sudo apt install -y default-jre default-jdk

java  -version
javac -version
```

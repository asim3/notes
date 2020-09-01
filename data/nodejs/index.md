#### Check Terminal
```
nodejs -v
node -v
npm -v
```

#### Install
```
sudo apt install nodejs
sudo apt install npm

# update npm
sudo npm install npm@latest -g
```


#### Error: listen EADDRINUSE :::3000
```
killall -g node
```



#### Install node using Linux Binaries (x64) (Download)
```
https://nodejs.org/dist/v10.16.3/node-v10.16.3-linux-x64.tar.xz

sudo mkdir -p /usr/local/lib/nodejs
sudo tar -xJvf ~/Downloads/node-v10.16.3-linux-x64.tar.xz -C /usr/local/lib/nodejs
```


#### Add node to PATH folder sudo bin link
```
sudo rm /usr/bin/node
sudo rm /usr/bin/npm
sudo rm /usr/bin/npx

sudo ln -s /usr/local/lib/nodejs/node-v10.16.3-linux-x64/bin/node /usr/bin/node
sudo ln -s /usr/local/lib/nodejs/node-v10.16.3-linux-x64/bin/npm /usr/bin/npm
sudo ln -s /usr/local/lib/nodejs/node-v10.16.3-linux-x64/bin/npx /usr/bin/npx
```

# Install

## adding node js library
```txt
curl -fLO https://nodejs.org/dist/v12.19.0/node-v12.19.0-linux-x64.tar.xz
curl -fLO https://nodejs.org/dist/v12.19.0/SHASUMS256.txt.asc

grep node-v12.19.0-linux-x64.tar.xz SHASUMS256.txt.asc | sha256sum -c -

sudo tar -xJvf node-v12.19.0-linux-x64.tar.xz -C /usr/local/lib/
```


## add node links
```txt
sudo ln -s /usr/local/lib/node-v12.19.0-linux-x64/bin/node /usr/local/bin/node
sudo ln -s /usr/local/lib/node-v12.19.0-linux-x64/bin/npm /usr/local/bin/npm
sudo ln -s /usr/local/lib/node-v12.19.0-linux-x64/bin/npx /usr/local/bin/npx
```


```txt
node -v
npm version
npx -v
```

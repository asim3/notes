# Install 

[docs](https://github.com/nodesource/distributions)

install by alternate repository maintained by [NodeSource](https://nodesource.com/)
```sh
node_version="14.x" \
  && curl -sL https://deb.nodesource.com/setup_${node_version} -o /tmp/nodesource_setup.sh \
  && sudo bash /tmp/nodesource_setup.sh \
  && sudo apt -y update \
  && sudo apt -y install nodejs \
  && echo "Done."
```


# or

## node js library
```sh
node_version="14.16.0" \
  && curl -fLO https://nodejs.org/dist/v${node_version}/node-v${node_version}-linux-x64.tar.xz \
  && curl -fLO https://nodejs.org/dist/v${node_version}/SHASUMS256.txt.asc \
  && grep node-v${node_version}-linux-x64.tar.xz SHASUMS256.txt.asc | sha256sum -c - \
  && sudo tar -xJf node-v${node_version}-linux-x64.tar.xz -C /usr/lib \
  && echo "export PATH=/usr/lib/node-v${node_version}-linux-x64/bin:$PATH" >> ~/.profile \
  && echo "Done."
```


# or
```sh
sudo apt install nodejs npm
# node -v == v10.24.0
```


## version
```txt
node -v
npm -v
npx -v
```


## remove
```sh
sudo rm -fr /usr/local/bin/node \
  && sudo rm -fr /usr/local/bin/npm \
  && sudo rm -fr /usr/local/bin/npx \
  && sudo rm -fr /usr/local/lib/nodejs \
  && echo "Done."
```

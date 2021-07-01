# Install 

[docs](https://github.com/nodesource/distributions/blob/master/README.md)


install by alternate repository maintained by [NodeSource](https://nodesource.com/)
```bash
node_version="16.x"


curl -sL https://deb.nodesource.com/setup_${node_version} -o /tmp/nodesource_setup.sh \
  && sudo bash /tmp/nodesource_setup.sh \
  && sudo apt -y update \
  && sudo apt -y install nodejs \
  && sudo npm install --global npm \
  && node -v \
  && npm -v \
  && echo "Done."
```


# or
```bash
sudo apt install nodejs npm
# node -v == v10.24.0
```


## version
```bash
node -v
npm -v
npx -v
```


## remove
```bash
sudo rm -fr /usr/local/bin/node \
  && sudo rm -fr /usr/local/bin/npm \
  && sudo rm -fr /usr/local/bin/npx \
  && sudo rm -fr /usr/local/lib/nodejs \
  && echo "Done."
```

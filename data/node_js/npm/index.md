[npm package](https://www.npmjs.com)
## update npm
```bash
sudo npm install --global npm
npm audit fix

npm -v
npm -l
```


## new
```bash 
npm init
npm init --yes

# or 

npm create
```


## install package.json
install all dependencies in package.json
```bash
npm i
npm add
npm install
npm install -P | --save-prod # default
npm install -g | --global    # @ /usr/lib/node_modules/
npm install -D | --save-dev


# uninstall 
npm uninstall
npm remove
npm rm
```


## main file
> The starting file is the value of "main" in 'package.json'
```json
{
  // ...
  "main": "index.js",
  // ...
}
```

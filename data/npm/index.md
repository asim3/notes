[npm package](https://www.npmjs.com)
```sh
npm -v
npm version

npm -l
```


## new
```sh 
npm init
npm init --yes
#or 
npm create
```


## install 
> will install all modules listed as dependencies in package.json
```sh
npm install
npm add
npm i
```


## install options
```sh
-P | --save-prod # default
-D | --save-dev
-O | --save-optional
-g | --global
     --no-save
```


## uninstall 
```sh
npm uninstall
npm unlink
npm un

npm remove
npm rm
npm r
```


## config
```sh
npm config set <key> <value>
npm config get [<key>]
npm config delete <key>

npm config list
npm config ls -l
```


> The starting file is the value of "main" in 'package.json'
```json
{
  // ...
  "main": "index.js",
  // ...
}
```

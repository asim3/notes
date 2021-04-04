> first install `node` and `npm`


## install 
```sh
npm init
npm install typescript


mkdir -p dist src/static/css src/static/images src/static/js src/static/ts
echo "console.log('hi')" >> ./src/static/ts/index.ts
```


`nano package.json`
```json
{
  "scripts": {
    "init": "tsc --init",
    "start": "tsc -w"
  },
  // ...
}
```


## run 
```sh
npm run init
npm start
```


---


# OR
## install global
```sh
sudo npm install -g typescript
tsc -v

# @ /usr/lib/node_modules/
sudo npm remove -g typescript
```


## start new project 
```sh
tsc --init
```

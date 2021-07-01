`nano package.json`
```json
{
  // ...
  "scripts": {
    "my_script": "echo This is my script",
    "premy_script": "echo This is pre my script",
    "postmy_script": "echo This is post my script",

    "start": "node main.js",
    
    "test": "echo this is test",
    "pretest": "echo this is pre test",
    "posttest": "echo this is post test"
  }
  // ...
}
```

## run my script
```sh
npm run my_script
# > echo This is pre my script
# This is pre my script

# > echo This is my script
# This is my script

# > echo This is post my script
# This is post my script
```


## run test
```sh
npm test
# > echo this is pre test
# this is pre test

# > echo this is test
# this is test

# > echo this is post test
# this is post test
```

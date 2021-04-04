[playground](https://jwt.io/)

1- POST /user/login {email, pass}   
2- respond with JWT `if request {email, pass} valid`    
3- POST with JWT  
4- respond `if request JWT valid`    


## how it works
> not working, only to understand the general idea
```sh
value_1='{"alg": "HS256", "typ": "JWT"}'
value_2='{"id": "4560", "name": "Asim", "expiry_date": 987}'
secret_key='my-256-bit-secret'

base64_1="$(echo -n $value_1 | base64)"
base64_2="$(echo -n $value_2 | base64)"

echo -n "${base64_1}.${base64_2}" \
 | openssl dgst -sha256 -hmac "$secret_key" -binary \
 | base64


JWT = $base64_1 + '.' + $base64_2 + '.' + base64_openssl
```


[json web token](https://www.npmjs.com/package/jsonwebtoken)    
> you need to share the secret key among your servers
```js
var jwt = require('jsonwebtoken');

var token = jwt.sign({ foo: 'bar' }, 'secret_key');

console.log(token)
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJpYXQiOjE2MTc1Njg5NzF9.jmx018orxqGdvxf6GqqfilZRUL_PhCDW2noP3dRMTpI
```

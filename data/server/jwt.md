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
secret_key='my-secret-key-shared-among-my-servers'

base64_1="$(echo -n $value_1 | base64)"
base64_2="$(echo -n $value_2 | base64)"

echo -n "${base64_1}.${base64_2}" \
 | openssl dgst -sha256 -hmac "$secret_key" -binary \
 | base64


JWT = $base64_1 + '.' + $base64_2 + '.' + base64_openssl
```

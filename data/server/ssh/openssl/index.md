# openssl
```txt
openssl version 
```


## private key
```txt
openssl genrsa -out my_private_key 4096
```

## public key 
```txt
openssl rsa -in my_private_key -pubout -out my_public.pub
```


## server stamp
CERTIFICATE REQUEST
```txt
openssl req -new -key my_private_key -out my_stamp.csr
```


## verify certificate 
```txt
openssl req -text -in my_stamp.csr -noout -verify
```


## public certificate
CERTIFICATE    
stamp the certificate    
sign the certificate using certificate authority     
```txt
openssl x509 -in my_stamp.csr -out my_public.crt -req -signkey my_private_key -days 365
```

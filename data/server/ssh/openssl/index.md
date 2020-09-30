# openssl
```txt
openssl version 
```


## private key
```txt
openssl genrsa -out my_private.key 4096

# Check a private key
openssl rsa -check -in my_private.key 
```


## public key 
```txt
openssl rsa -in my_private.key -pubout -out my_public.pub
```


## server stamp
CERTIFICATE REQUEST
> Take care of are the “Organizational Name” and the “Common Name”. 
  These two values help verify to whom the certificate has been issued to.
```txt
openssl req -new -key my_private.key -out my_stamp.csr
```


## check a Cert Request
check a Certificate Signing Request (CSR)
```txt
openssl req -text -noout -verify -in my_stamp.csr 
```


## public certificate
CERTIFICATE    
stamp the certificate    
sign the certificate using certificate authority     
```txt
openssl x509 -in my_stamp.csr -out my_public.crt -req -signkey my_private.key -days 365
```


## Check a certificate
```txt
openssl x509 -text -noout -in my_public.crt 
```
# openssl
```bash
openssl version 

# OpenSSL 1.1.1f  31 Mar 2020
```


## new certificates
Generate self-signed certificates for private registry
```bash
openssl req -sha256 -nodes -x509 -days 365 \
  -newkey rsa:4096 \
  -keyout ./my_private.key \
  -out    ./my_https.crt

#  -nodes              Don't encrypt the output key
#  -x509               Output a x509 structure instead of a cert request
#  -days +int          Number of days cert is valid for

#  -newkey val         Specify as type:bits
#  -keyout outfile     File to send the key to
#  -out outfile        Output file
```


# OR using stamp
You can use Certificate request "stamp" so you don't 
need to reenter the company info every time 
you want to generate a public certificate "HTTPS"


## private key
```bash
openssl genrsa -out my_private.key 4096
```


## server stamp
check a Certificate Signing Request (CSR)
```bash
openssl req -new \
  -key my_private.key \
  -out my_stamp.csr

# Take care of are the “Organizational Name” and the “Common Name”. 
# These two values help verify to whom the certificate has been issued to.
```
> Certificate request: holds the company informations 


## public https certificate
sign the certificate using certificate authority     
```bash
openssl x509 -req -days 365 \
  -signkey my_private.key \
  -in my_stamp.csr \
  -out my_https.crt 
```


## public key 
```bash
openssl rsa -in my_private.key -pubout -out my_public.pub
```

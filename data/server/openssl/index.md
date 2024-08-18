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
> Certificate Signing Request (CSR): holds the company informations 
```bash
openssl req -new \
  -key my_private.key \
  -out my_stamp.csr

#            C = SA
#           ST = Province
#            L = Dammam
#            O = Company *important
#           OU = Section
#           CN = Common Name *important
# emailAddress = my@mail.co

# ** These two values help verify to whom the certificate has been issued to.
```


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


## Get Site Cert
```bash
echo | openssl s_client -showcerts -servername google.com -connect google.com:443 2>/dev/null

# print cert as text
echo | openssl s_client -showcerts -servername google.com -connect google.com:443 2>/dev/null | openssl x509 -noout -text

# print cert as .crt file
echo | openssl s_client -showcerts -servername google.com -connect google.com:443 2>/dev/null | sed -ne '/-BEGIN CERTIFICATE-/,/-END CERTIFICATE-/p'


openssl x509 -text -noout -in ./my_https.crt
```


## default CA certificate store
> Add the root CA (the CA signing the server certificate) to `/etc/ssl/certs/ca-certificates.crt` && `update-ca-certificates`
```bash
# Convert it from crt to PEM using the OpenSSL tool
openssl x509 -inform DES -in yourdownloaded.crt -out outcert.pem -text

openssl x509 -inform der -in certificate.cer -out certificate.pem

openssl x509 -outform der -in your-cert.pem -out your-cert.crt

openssl x509 -outform der -in certificate.pem -out certificate.crt
```

[Convert Docs](https://stackoverflow.com/questions/13732826/convert-pem-to-crt-and-key)

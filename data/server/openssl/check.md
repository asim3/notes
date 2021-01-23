## check a private key
```bash
openssl rsa -check -in my_private.key

# RSA key ok
# writing RSA key
# -----BEGIN RSA PRIVATE KEY-----
# MIIJKAIBAAKCAgEAu/SPUqbLUD+zlh9T/E4Wp01bF/rYFLfiNYSoa2mDdAq4sgE9
# SxP1yat2C+x+lsi7D7cp42TKQPXLfnucJVbz4btHFoTXBGcvK+vasidWwECSOq6+
# SfZin7p5v5/I1Vknj8QeFF+91j4dXSXXqo/KWYdmlSz+KMB2vBXXdljF0BI=
# -----END RSA PRIVATE KEY-----
```


## check a https certificate
```bash
openssl x509 -text -noout -in my_https.crt


# Certificate:
#     Data:
#         Version: 3 (0x2)
#         Serial Number:
#             24:01:63:0d:f8:03:55:68:81:ad:cd:ef:3b:f4:d4:ff:65:91:38:4d
#         Signature Algorithm: sha256WithRSAEncryption
#         Issuer: C = SA, ST = Province, L = Dammam, O = Company, 
#                 OU = Section, CN = Common Name, emailAddress = my@mail.co
#         Validity
#             Not Before: Jan 23 18:53:26 2021 GMT
#             Not After : Jan 23 18:53:26 2022 GMT
#         Subject: C = SA, ST = Province, L = Dammam, O = Company, 
#                  OU = Section, CN = Common Name, emailAddress = my@mail.co
```


## check a stamp
> has no deadline
```bash
openssl req -text -noout -verify -in my_stamp.csr 

# verify OK
# Certificate Request:
#     Data:
#         Version: 1 (0x0)
#         Subject: C = SA, ST = Province, L = Dammam, O = Company, 
#                  OU = Section, CN = Common Name, emailAddress = my@mail.co
```

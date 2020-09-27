## Manual
> `man ssh-keygen`
> `man ssh_config`


```txt
-q              Silence ssh-keygen.
-t              Specifies the type of key to create. [dsa|ecdsa|ed25519|rsa]
-f filename     Specifies the filename of the key file.
```


## certificates
```txt
-s ca_key                   Certify (sign) a public key using the specified CA key.
-I certificate_identity     Specify the key identity when signing a public key.
-h                          When signing a key, create a host certificate instead of a user certificate.
```
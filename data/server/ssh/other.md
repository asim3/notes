## Get fingerprint
```bash
ssh-keygen -l -f ~/.ssh/id_ed25519
# 256 SHA256:KHzEcaes5BlSwvrhbVOs7QTNbL2J3ZD4c7rIkyun4+0 test-1 (ED25519)

ssh-keygen -l -f ~/.ssh/id_ed25519.pub
# 256 SHA256:KHzEcaes5BlSwvrhbVOs7QTNbL2J3ZD4c7rIkyun4+0 test-1 (ED25519)
```


## ssh config
change SSH port number 
`sudo nano ~/.ssh/config`
```bash
Host github.com
    Hostname ssh.github.com
    Port 443
```


## !!!
```txt
# Start the ssh-agent in the background
eval "$(ssh-agent -s)"
ssh-add ./.ssh/id_rsa
```

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


# !!!
```bash
ssh-keygen -s /path/to/ca_key -I key_id    /path/to/user_key.pub
ssh-keygen -s /path/to/ca_key -I key_id -h /path/to/host_key.pub
```

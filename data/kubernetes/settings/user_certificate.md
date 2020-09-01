for testing create namespace
```shell
sudo kubectl get ns
sudo kubectl create ns my-test-namespace
```


```shell
mkdir my-new-user && cd my-new-user/
# Generating private key
openssl genrsa -out asim.key 4096

# Generating "csr" certificate signing request 
openssl req -new -key asim.key -out asim.csr -subj "/CN=asim/O=my-group-name"
```


Copy kubernetes ca.crt & ca.key from the master node
```shell
scp root@kmaster:/etc/kubernetes/pki/ca.{crt,key} .
```

Sign the certificate using certificate authority
```shell
openssl x509 -req -in asim.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out asim.crt -days 365
```

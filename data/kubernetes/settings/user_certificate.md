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
# to locate certificate-authority
sudo kubectl config view | grep certificate-authority

scp root@kmaster:/etc/kubernetes/pki/ca.{crt,key} .
```

> if the certificate isn't in a separate file \
you can copy and paste the certificate text then decode it

```shell
sudo kubectl config view --raw | grep certificate-authority > ca.txt

nano ca.txt

cat ca.txt | base64 --decode > ca.crt
```


Sign the certificate using certificate authority
```shell
openssl x509 -req -in asim.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out asim.crt -days 365
```

for testing create namespace
```  bash
kubectl get ns
kubectl create ns my-test-namespace
```


```  bash
mkdir my-new-user && cd my-new-user/
# Generating private key
openssl genrsa -out asim.key 4096

# Generating "csr" certificate signing request 
openssl req -new -key asim.key -out asim.csr -subj "/CN=asim/O=my-group-name"
```

Copy kubernetes ca.crt & ca.key from the master node
> To locate certificate-authority    
> `kubectl config view | grep certificate-authority`
```  bash
scp root@kmaster:/etc/kubernetes/pki/ca.{crt,key} .
```

> If the certificate isn't in a separate file    
> you can decode the certificate
>  ```  bash
>  kubectl config view --raw | grep certificate-authority > ca.txt
>  nano ca.txt
>  cat ca.txt | base64 --decode > ca.crt
>  ```


Sign the certificate using certificate authority
```  bash
openssl x509 -req -in asim.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out asim.crt -days 365
```

# Certificate manager
[docs](https://cert-manager.io/docs/installation/kubernetes)


## install 
> Certificate manager is a "CRD" `api extension`    
[releases](https://github.com/jetstack/cert-manager/tags)
```bash
version='1.2.0'

kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v${version}/cert-manager.yaml


kubectl get all  -n cert-manager
kubectl get pods -n cert-manager
```


## add certificate
`kubectl apply -f - <<eof`
```yaml
apiVersion: cert-manager.io/v1
kind: Issuer
metadata:
  name: my-issuer-test
spec:
  selfSigned: {}

---

apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: my-certificate-name
spec:
  dnsNames:
    - asim.example.com
  secretName: my-certificate-secret
  issuerRef:
    name: my-issuer-test
```


# list certs
```bash
kubectl get cert
kubectl get certificate
# NAME                  READY   SECRET                  AGE
# my-certificate-name   True    my-certificate-secret   13s


kubectl get cr
kubectl get crs
kubectl get certificaterequest
# NAME                        READY   AGE
# my-certificate-name-7cs6h   True    36s


kubectl get issuer
# NAME                  READY   AGE
# my-issuer-test        True    93s
```


## check a https certificate
```bash
openssl x509 -text -noout -in my_https.crt
```

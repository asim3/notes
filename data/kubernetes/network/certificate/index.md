# Certificate manager
[docs](https://cert-manager.io/docs/installation/kubernetes)

> Certificate manager is an `k8s API extension`


# issuer
> `Issuers` and `ClusterIssuers`, are Kubernetes resources that represent 
> `certificate authorities` (CAs) that are able to generate signed certificates
```bash
kubectl get issuer
# NAME           READY   AGE
# my-ca-issuer   True    20m
```


# certificate
```bash
kubectl get cert
kubectl get certificate
# NAME                  READY   SECRET               AGE
# my-certificate-name   True    my-new-certificate   71s
```


# certificate request
```bash
kubectl get cr
kubectl get crs
kubectl get certificaterequest
# NAME                        READY   AGE
# my-certificate-name-fgckh   True    90s
```


## check the certificate
> The certificate will be issued automatically as a `secret`.
```bash
cert_as_base64=$(kubectl get secret my-new-certificate -o jsonpath="{.data.tls\.crt}")

echo $cert_as_base64 | base64 -d | openssl x509 -text -noout -in -
```

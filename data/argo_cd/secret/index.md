[git](https://github.com/bitnami-labs/sealed-secrets)


## install chart
```bash
kubectl apply -f https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.16.0/controller.yaml


# OR 


helm repo add sealed-secrets-repo https://bitnami-labs.github.io/sealed-secrets

helm install my-sealed-secrets sealed-secrets/sealed-secrets
```


## install kubeseal cli
```bash
curl -SL -o /tmp/kubeseal_tmp https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.16.0/kubeseal-linux-amd64 \
    && sudo mv /tmp/kubeseal_tmp /usr/local/bin/kubeseal \
    && sudo chmod +x /usr/local/bin/kubeseal


kubeseal --version
# kubeseal version: v0.16.0
```


## private key
```bash
kubectl get secrets sealed-secrets-keyjfrth -n kube-system \
    -o go-template='{{index .data "tls.key" | base64decode}}' \
    > my-sealed-private.key


openssl rsa -check -in my-sealed-private.key
# RSA key ok
```



## Public key
```bash
kubeseal --fetch-cert > my-bitnami-sealed-cert.pem

# OR

kubectl get secrets sealed-secrets-keyjfrth -n kube-system \
    -o go-template='{{index .data "tls.crt" | base64decode}}' \
    > my-bitnami-sealed-cert.pem


# check
openssl x509 -text -noout -in my-bitnami-sealed-cert.pem
# Certificate:
#     Data:
#         Version: 3 (0x2)
#         Signature Algorithm: sha256WithRSAEncryption
#         Validity
#             Not Before: Sep 24 22:21:30 2021 GMT
#             Not After : Sep 22 22:21:30 2031 GMT
```
> Since v0.9.x certificates get automatically renewed every 30 days.

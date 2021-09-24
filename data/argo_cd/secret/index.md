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



## add new
```yaml
cat <<EOF | kubeseal --cert my-bitnami-sealed-cert.pem -o yaml
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: my-sealed-1
data:
  my_username: "$(echo -n "Asim bitnami sealed SecreT" | base64)"
EOF


cat <<EOF | kubectl apply -f -
apiVersion: bitnami.com/v1alpha1
kind: SealedSecret
metadata:
  creationTimestamp: null
  name: my-sealed-1
  namespace: default
spec:
  encryptedData:
    my_username: AgCWNxQ/yiD3XTV8bkDUJzWZIDt6VgFN7Fw7a9PSfPJkIXgYTgriDq7hzY5M7xz7AYcO+a95lZizSdPCL/c8loOXfRJdQz0R+/7Z22cqRfCuScGb4WNxO8Y1ZhJvwVtwtkUhR21zIBjec7MpTKtmMjVt963kYR7r6J26pXdj1zISnpcUcR0HwrKw2cP1pRSFWrM64J/PDiSLxuM1Q9KRBHpSy2Lvow6jzBCGkvkCllsSU57lDL79GAlT+tcqDucHMCNqIJvzFh81hW5exeDFDeZ9X6mvVhE+yB1M4kCA6xMXvFfkvErB2Wo+jpiqf8DKSqY28lcgmK4kCeqAjUslGC/kmH3/QW9O179MPvNfo0JsjapdPa7jzaKYS0kfek1gIOAEJAeNBaDQ6EuezSIzB0xHkYcE+eBe6PBEbV+C4HVvkASkf2SDFQKBi9nq0ZoBXiaN/fIlxwym5mTUJ+SIi3DqRIiU+SdNGYabZm7nHDkZFImgkafyhr9wBrO2OKQyv2pE+sX1ZigDdEUga3iIsgeyPxgwMG+6Y9/Vwm6udVNN6UJ0oC5JOfZOZ2D/VSI1DDRYGnxDaX+kkbt0lo8KDgJMCSMKj2dcWdNpBxBAK+QWIgNssBTiCu9nR2avO6rL0hfBx6BDUgFOwgg6w7fCEhEDP0kBLd3mpVzfg4ptZbtQzeGdCbT0dFTI7h8aomaUt77eNSI04R5m+S9szk9bVsE3P/tcndqnVo8bnw==
  template:
    data: null
    metadata:
      creationTimestamp: null
      name: my-sealed-1
      namespace: default
    type: Opaque
EOF
```
> We don't technically use an independent private key
> for each namespace, but instead we include the
> namespace name during the encryption process,
> effectively achieving the same result.



## list
```bash
kubectl get sealedsecrets
# NAME          AGE
# my-sealed-1   2s


kubectl get secrets
# NAME          TYPE     DATA   AGE
# my-sealed-1   Opaque   1      7s
```


`kubectl get secrets my-sealed-1 -o yaml`
```yaml
apiVersion: v1
data:
  my_username: QXNpbSBiaXRuYW1pIHNlYWxlZCBTZWNyZVQ=
kind: Secret
metadata:
  creationTimestamp: "2021-09-24T22:47:07Z"
  name: my-sealed-1
  namespace: default
  ownerReferences:
  - apiVersion: bitnami.com/v1alpha1
    controller: true
    kind: SealedSecret
    name: my-sealed-1
    uid: 72d2cd8f-3500-4821-9676-5e3e450031aa
  resourceVersion: "1805"
  uid: 8d7f4006-cc84-4d39-badf-ef13f44b613a
type: Opaque
```

# Certificate manager
[docs](https://cert-manager.io/docs/installation/kubernetes)

> Certificate manager is an `k8s API extension`


## install 
[releases](https://github.com/jetstack/cert-manager/tags)
```bash
version='1.2.0'

kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v${version}/cert-manager.yaml


kubectl get all  -n cert-manager
kubectl get pods -n cert-manager
```


## Issuer
> `Issuers` and `ClusterIssuers`, are Kubernetes resources that represent 
> `certificate authorities` (CAs) that are able to generate signed certificates
```bash
openssl req -sha256 -nodes -x509 -days 365 \
  -newkey rsa:4096 \
  -keyout /tmp/my_private.key \
  -out    /tmp/my_https.crt
```


`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-ca-key-pair
  namespace: default
  # namespace: not required for ClusterIssuers
data:
  tls.crt: $(cat /tmp/my_https.crt | base64 -w0)
  tls.key: $(cat /tmp/my_private.key | base64 -w0)

---

apiVersion: cert-manager.io/v1
kind: Issuer
metadata:
  name: my-ca-issuer
  namespace: default
spec:
  ca:
    secretName: my-ca-key-pair

---

apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: my-certificate-name
spec:
  secretName: my-new-certificate 
  # secretName: will be added automaticly 
  issuerRef:
    name: my-ca-issuer
  dnsNames:
    - whoami.example.com
  commonName: example.com

---

apiVersion: v1
kind: Pod
metadata:
  name: apppppp-name
  namespace: default
  labels:
    my: test-ingress
spec:
  containers:
  - image: containous/whoami
    name: apppppp-name

---

apiVersion: v1
kind: Service
metadata:
  name: apppppp-name
  namespace: default
  labels:
    my: test-ingress
spec:
  type: ClusterIP
  selector:
    my: test-ingress
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80

---

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  # name: must be a valid DNS subdomain name
  name: my-ingress-resource
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  tls:
  # hosts: need to explicitly match spec.rules.host
  - hosts:
      - whoami.example.com
    secretName: my-new-certificate
  rules:
  - host: whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: apppppp-name
            port: 
              number: 80
```


## check the certificate
> The certificate will be issued automatically as a `secret`.
```bash
cert_as_base64=$(kubectl get secret my-new-certificate -o jsonpath="{.data.tls\.crt}")

echo $cert_as_base64 | base64 -d | openssl x509 -text -noout -in -
```



# list
```bash
kubectl get issuer
# NAME           READY   AGE
# my-ca-issuer   True    20m


kubectl get cert
kubectl get certificate
# NAME                  READY   SECRET               AGE
# my-certificate-name   True    my-new-certificate   71s



kubectl get cr
kubectl get crs
kubectl get certificaterequest
# NAME                        READY   AGE
# my-certificate-name-fgckh   True    90s
```


# OR


## ACME
Automated Certificate Management Environment (ACME)    
`kubectl apply -f - <<eof`
```yaml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging
  # name: letsencrypt-prod
spec:
  acme:
    # You must replace this email address with your own.
    # Let's Encrypt will use this to contact you about expiring
    # certificates, and issues related to your account.
    email: asim@asim.com
    server: https://acme-staging-v02.api.letsencrypt.org/directory
    # server: https://acme-v02.api.letsencrypt.org/directory

    privateKeySecretRef:
      # Secret resource that will be used to store the account's private key.
      name: letsencrypt-staging-private-key
      # name: letsencrypt-prod-private-key

    # Add a single challenge solver, HTTP01 using nginx
    solvers:
    - http01:
        ingress:
          class: nginx

---

apiVersion: cert-manager.io/v1
kind: Certificate
metadata:
  name: my-certificate-name
spec:
  secretName: my-new-certificate 
  # secretName: will be added automaticly 
  issuerRef:
    name: letsencrypt-staging
  dnsNames:
    - whoami.asim.com
  commonName: asim.com
```


## describe 
```bash
kubectl describe clusterissuer
kubectl describe cert my-certificate-name
```

## add certificate authorities
```bash
openssl req -sha256 -nodes -x509 -days 365 \
  -newkey rsa:4096 \
  -keyout /tmp/my_private.key \
  -out    /tmp/my_https.crt
```


## Issuer
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-issuer-certificate-authorities-key
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
    secretName: my-issuer-certificate-authorities-key

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


## Status
```bash
kubectl get      cert my-certificate-name
kubectl describe cert my-certificate-name
```


## debugging
```bash
kubectl describe cr
# Error: IssuerNotReady: Referenced issuer does not have a Ready status condition

kubectl describe issuer
# Error: Error getting keypair for CA issuer: secret "my-issuer-certificate-authorities-key" not found
```

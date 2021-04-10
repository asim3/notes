## describe 
```bash
kubectl describe clusterissuer
kubectl describe cert my-secret-added-by-ingress
```


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

apiVersion: v1
kind: Pod
metadata:
  name: apppppp-2-name
  namespace: default
  labels:
    my: test-2-ingress
spec:
  containers:
  - image: containous/whoami
    name: apppppp-2-name

---

apiVersion: v1
kind: Service
metadata:
  name: apppppp-2-name
  namespace: default
  labels:
    my: test-2-ingress
spec:
  type: ClusterIP
  selector:
    my: test-2-ingress
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80

---

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  # name: must be a valid DNS subdomain name
  name: my-2-ingress-resource
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
    cert-manager.io/cluster-issuer: letsencrypt-staging
spec:
  tls:
  # hosts: need to explicitly match spec.rules.host
  - hosts:
      - whoami-2.example.com
    # secretName: will be added automaticly as a certificate
    secretName: my-secret-added-by-ingress
  rules:
  - host: whoami-2.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: apppppp-2-name
            port: 
              number: 80
```


## Status
```bash
kubectl describe cert my-secret-added-by-ingress

kubectl get secret my-secret-added-by-ingress
kubectl get order
kubectl get challenge


kubectl describe challenge
# Error: 
#     Accepting challenge authorization failed: acme: authorization error 
#     for whoami-2.example.com: 400 urn:ietf:params:acme:error:dns: DNS 
#     problem: NXDOMAIN looking up A for whoami-2.example.com - check that 
#     a DNS record exists for this domain
```


## check the certificate
> The certificate will be issued automatically as a `secret`.
```bash
certificate_name="my-secret-added-by-ingress"
secret_name=$(kubectl get cert ${certificate_name} -o jsonpath="{.spec.secretName}")
cert_as_base64=$(kubectl get secret ${secret_name} -o jsonpath="{.data.tls\.crt}")

echo $cert_as_base64 | base64 -d | openssl x509 -text -noout -in -
```


## debugging
```bash
kubectl describe cert my-secret-added-by-ingress
# Error: Issuing certificate as Secret does not exist

kubectl describe cr my-secret-added-by-ingress-rcj5w
# Error: Referenced issuer does not have a Ready status condition

kubectl describe clusterissuer
# Error: Error getting keypair for CA issuer: secret "my-issuer-certificate-authorities-key" not found
```

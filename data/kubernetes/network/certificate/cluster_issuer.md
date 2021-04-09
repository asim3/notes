## describe 
```bash
kubectl describe clusterissuer
kubectl describe cert my-certificate-name
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

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress-resource
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  tls:
  - hosts:
    - whoami.example.com
    - blue.whoami.example.com
    - green.whoami.example.com
    secretName: my-ingress-resource-tls
  rules:
  # ...
```

`kubectl describe certificate my-ingress-resource-tls`


## install CRDs
The custom resources you require for cert-manager
```bash
kubectl apply --validate=false -f https://github.com/jetstack/cert-manager/releases/download/v0.14.1/cert-manager.crds.yaml
```


## install Cert-Manager
```bash
kubectl create namespace cert-manager

# add the Jetstack Helm repository
helm repo add jetstack https://charts.jetstack.io

helm install cert-manager --version v0.14.1 --namespace cert-manager jetstack/cert-manager
```


## ClusterIssuer
`nano production_issuer.yaml`
```yaml
apiVersion: cert-manager.io/v1alpha2
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    # Email address used for ACME registration
    email: your_email_address
    server: https://acme-v02.api.letsencrypt.org/directory
    privateKeySecretRef:
      # Name of a secret used to store the ACME account private key
      name: letsencrypt-prod-private-key
    # Add a single challenge solver, HTTP01 using nginx
    solvers:
    - http01:
        ingress:
          class: nginx
```

## install 
[releases](https://github.com/jetstack/cert-manager/tags)
```bash
version='1.2.0'

kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v${version}/cert-manager.yaml


kubectl get all  -n cert-manager
kubectl get pods -n cert-manager
```

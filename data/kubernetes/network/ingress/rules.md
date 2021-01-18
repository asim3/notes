
## domain ingress
`nano domain-ingress-rule.yaml`
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-resource-1
spec:
  rules:
  - host: whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-whoami-main-deploy
            port: 
              number: 80
```


## sub domain ingress
`nano sub-domain-ingress-rule.yaml`
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-resource-2
spec:
  rules:
  - host: whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-whoami-main-deploy
            port:
              number: 80
  - host: blue.whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-whoami-blue-deploy
            port:
              number: 80
  - host: green.whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-whoami-green-deploy
            port:
              number: 80
```



## sub directory ingress
`nano sub-folder-ingress-rule.yaml`
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
  name: ingress-resource-3
spec:
  rules:
  - host: whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: my-whoami-main-deploy
            port:
              number: 80
      - path: /blue
        pathType: Prefix
        backend:
          service:
            name: my-whoami-blue-deploy
            port:
              number: 80
      - path: /green
        pathType: Prefix
        backend:
          service:
            name: my-whoami-green-deploy
            port:
              number: 80
```


## deploy
```bash
kubectl apply -f domain-ingress-rule.yaml
kubectl apply -f sub-domain-ingress-rule.yaml
kubectl apply -f sub-folder-ingress-rule.yaml

kubectl get ingress
```

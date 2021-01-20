## list ingress rules
```bash
kubectl get ingress
```


## domain ingress
`nano domain-ingress-rule.yaml`
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-resource-1
  annotations:
    kubernetes.io/ingress.class: nginx
spec:
  rules:
  - host: whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: test-ingress-main
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
  annotations:
    kubernetes.io/ingress.class: nginx
spec:
  rules:
  - host: whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: test-ingress-main
            port:
              number: 80
  - host: blue.whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: test-ingress-blue
            port:
              number: 80
  - host: green.whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: test-ingress-green
            port:
              number: 80
```



## sub directory ingress
`nano sub-folder-ingress-rule.yaml`
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-resource-3
  annotations:
    kubernetes.io/ingress.class: nginx
    # !!!
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  rules:
  - host: whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: test-ingress-main
            port:
              number: 80
      - path: /blue
        pathType: Prefix
        backend:
          service:
            name: test-ingress-blue
            port:
              number: 80
      - path: /green
        pathType: Prefix
        backend:
          service:
            name: test-ingress-green
            port:
              number: 80
```


## deploy
```bash
kubectl apply -f domain-ingress-rule.yaml
kubectl apply -f sub-domain-ingress-rule.yaml
kubectl apply -f sub-folder-ingress-rule.yaml

kubectl get      ingress
kubectl describe ingress
```


## test
```bash
kubectl get ep/kubernetes -o jsonpath='{.subsets[].addresses[].ip}'
# 192.168.99.100

kubectl get svc -l app.kubernetes.io/component=controller -o jsonpath='{.items[].spec.ports[*].nodePort}' && echo;
# 32230 31301

curl -s http://whoami.example.com:32230/
# Hostname: test-ingress-main-78b689cfc8-xl4c8
# IP: 172.17.0.8
# Host: whoami.example.com:32230


curl -s http://blue.whoami.example.com:32230/
# Hostname: test-ingress-blue-7bffdd4d7c-rh7rs
# IP: 172.17.0.9
# Host: blue.whoami.example.com:32230

curl -s http://green.whoami.example.com:32230/
# Hostname: test-ingress-green-7f8dfb9944-dz8t4
# IP: 172.17.0.10
# Host: green.whoami.example.com:32230

curl -s http://whoami.example.com:31301/
# <head><title>
#   400 The plain HTTP request was sent to HTTPS port
# </title></head>

curl -s http://whoami.example.com:32230/blue

curl -s http://whoami.example.com:32230/blue
# <title>   503 Service Temporarily Unavailable   </title>

curl -s 192.168.99.100:32230/blue
# <title>   404 Not Found   </title>

curl -s 192.168.99.100:31301
# <head><title>
#   400 The plain HTTP request was sent to HTTPS port
# </title></head>

curl -s 192.168.99.100:32230
# <!DOCTYPE html>
# <html>
# <title>   Welcome to nginx!   </title>
```

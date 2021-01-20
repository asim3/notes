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


## check
```bash
curl -s http://whoami.example.com:8000/
# Hostname: test-ingress-main-78b689cfc8-v7ssr
# IP: 172.17.0.8

curl -s http://whoami.example.com:8000/blue
# Hostname: test-ingress-blue-7bffdd4d7c-rh7rs
# IP: 172.17.0.9

curl -s http://whoami.example.com:8000/green
# Hostname: test-ingress-green-7f8dfb9944-dz8t4
# IP: 172.17.0.10

curl -s 'http://whoami.example.com:8000/data?size=19'
# |ABCDEFGHIJKLMNOPQ|
```


## error
```bash
curl -s 'http://whoami.example.com:8000/green/data?size=19'
# Hostname: test-ingress-green-7f8dfb9944-7qqt9
# IP: 172.17.0.6
curl -s http://whoami.example.com:8000/green/api
# Hostname: test-ingress-green-7f8dfb9944-7qqt9
# IP: 172.17.0.6
```

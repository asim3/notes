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


## check
```bash
curl -s http://whoami.example.com:8000/
# Hostname: test-ingress-main-78b689cfc8-xl4c8
# IP: 172.17.0.8

curl -s http://blue.whoami.example.com:8000/
# Hostname: test-ingress-blue-7bffdd4d7c-rh7rs
# IP: 172.17.0.9

curl -s http://green.whoami.example.com:8000/
# Hostname: test-ingress-green-7f8dfb9944-dz8t4
# IP: 172.17.0.10
```

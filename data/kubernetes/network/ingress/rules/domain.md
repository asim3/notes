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


## check
```bash
curl -s http://whoami.example.com:8000/
# Hostname: test-ingress-main-78b689cfc8-v7ssr
# IP: 127.0.0.1
# IP: 172.17.0.4
# RemoteAddr: 172.17.0.1:59342
# GET / HTTP/1.1
# Host: whoami.example.com:8000
# User-Agent: curl/7.68.0
# Accept: */*
# X-Forwarded-For: 127.0.0.1
# X-Forwarded-Host: whoami.example.com:8000
# X-Forwarded-Port: 80
# X-Forwarded-Proto: http
# X-Real-Ip: 127.0.0.1
# X-Request-Id: 70bd00a831648405cc891e31690a9e13
# X-Scheme: http
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

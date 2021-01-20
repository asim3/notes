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

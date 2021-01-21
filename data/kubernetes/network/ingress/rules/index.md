## list ingress rules
```bash
kubectl get ingress
```


`kubectl apply -f - <<eof`
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress-resource
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
curl -s http://whoami.example.com/
# Hostname: test-ingress-main
# IP: 127.0.0.1
# IP: 172.17.0.4
# RemoteAddr: 172.17.0.3:45424
# GET / HTTP/1.1
# Host: whoami.example.com
# User-Agent: curl/7.68.0
# Accept: */*
# X-Forwarded-For: 192.168.99.1
# X-Forwarded-Host: whoami.example.com
# X-Forwarded-Port: 80
# X-Forwarded-Proto: http
# X-Real-Ip: 192.168.99.1
# X-Request-Id: 9665abe18dea6bbe405304902276806c
# X-Scheme: http
```

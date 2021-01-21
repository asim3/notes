## domain ingress
`kubectl apply -f - <<eof`
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-https-1
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

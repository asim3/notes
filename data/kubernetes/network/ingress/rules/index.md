## sub domain ingress
`kubectl apply -f - <<eof`
```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-resource-2
  annotations:
    # old school
    kubernetes.io/ingress.class: nginx
spec:
  ingressClassName: nginx
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


## set local hostname
```bash
# with minikube addons enable ingress
cat <<EOF | sudo tee -a /etc/hosts
$(minikube ip) whoami.example.com
$(minikube ip) blue.whoami.example.com
$(minikube ip) green.whoami.example.com
EOF
```


## check
```bash
curl -s http://whoami.example.com/
# Hostname: test-ingress-main-78b689cfc8-xl4c8
# IP: 172.17.0.8

curl -s http://blue.whoami.example.com/
# Hostname: test-ingress-blue-7bffdd4d7c-rh7rs
# IP: 172.17.0.9

curl -s http://green.whoami.example.com/
# Hostname: test-ingress-green-7f8dfb9944-dz8t4
# IP: 172.17.0.10
```

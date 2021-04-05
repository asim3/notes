# Ingress
An API object that manages external access to the services in a cluster, typically HTTP.
Ingress may provide load balancing, SSL termination and name-based virtual hosting.


[Nginx Ingress](https://github.com/nginxinc/kubernetes-ingress)


1- deploy pods with `labels`    
2- deploy service with same `labels`    
3- deploy ingress linked with this service    
4- check the domain from outside    


## deploy 3 pods
```bash
kubectl run test-ingress-main  --image=containous/whoami --labels="my=test-ingress,type=main"

kubectl expose pod/test-ingress-main  --port 80 --labels="my=test-ingress"


kubectl get all -l my=test-ingress
kubectl get pods
kubectl get service
```


## set local hostname
> with minikube addons enable ingress
```bash
echo "$(minikube ip) whoami.example.com" | sudo tee -a /etc/hosts
```


## apply ingress
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


## list ingress rules
```bash
kubectl get ingress
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

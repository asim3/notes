# Ingress
An API object that manages external access to the services in a cluster, typically HTTP.
Ingress may provide load balancing, SSL termination and name-based virtual hosting.


[docs](https://kubernetes.io/docs/concepts/services-networking/ingress)
[Nginx Ingress](https://github.com/nginxinc/kubernetes-ingress)


1- deploy pods with `labels`    
2- deploy service with same `labels`    
3- install ingress controller    
4- deploy ingress linked to this service    
5- check the domain from outside    


## list 
```bash
kubectl get all -l my=test-ingress
kubectl get pods
kubectl get service
kubectl get ingress
```


## set local hostname
> with minikube addons enable ingress
```bash
echo "$(minikube ip) whoami.example.com" | sudo tee -a /etc/hosts
```


## apply ingress
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: apppppp-name
  namespace: default
  labels:
    my: test-ingress
    type: main
spec:
  containers:
  - image: containous/whoami
    name: apppppp-name

---

apiVersion: v1
kind: Service
metadata:
  name: apppppp-name
  namespace: default
  labels:
    my: test-ingress
spec:
  type: ClusterIP
  selector:
    my: test-ingress
    type: main
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80

---

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  # name: must be a valid DNS subdomain name
  name: my-ingress-resource
  annotations:
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
            name: apppppp-name
            port: 
              number: 80
```


## check
```bash
curl -s http://whoami.example.com/
# Hostname: apppppp-name
# IP: 127.0.0.1
# IP: 172.17.0.3
# RemoteAddr: 172.17.0.5:36350
# GET / HTTP/1.1
# Host: whoami.example.com
# User-Agent: Mozilla/5.0 (X11; Linux x86_64; rv:78.0) Gecko/20100101 Firefox/78.0
# Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8
# Accept-Encoding: gzip, deflate
# Accept-Language: en-US,en;q=0.5
# Cache-Control: max-age=0
# Upgrade-Insecure-Requests: 1
# X-Forwarded-For: 192.168.99.1
# X-Forwarded-Host: whoami.example.com
# X-Forwarded-Port: 80
# X-Forwarded-Proto: http
# X-Real-Ip: 192.168.99.1
# X-Request-Id: 4c97c40cc722aa7756c14f6e646ec637
# X-Scheme: http
```

# Ingress
An API object that manages external access to the services in a cluster, typically HTTP.
Ingress may provide load balancing, SSL termination and name-based virtual hosting.


[Nginx Ingress](https://github.com/nginxinc/kubernetes-ingress)


## install by helm
```bash
helm install   nginx-ingress bitnami/nginx-ingress-controller # --set rbac.create=true

helm uninstall nginx-ingress
helm ls


kubectl get service -l app.kubernetes.io/name=nginx-ingress-controller
# NAME                                    TYPE           EXTERNAL-IP   PORT(S)                   
# nginx-ingress-nginx-ingress-controller  LoadBalancer   <pending>     80:31277/TCP,443:31764/TCP
```


## run on localhost
```bash
sudo kubectl port-forward deployment/nginx-ingress-nginx-ingress-controller 80:80
```


# For testing
## deploy 3 Deployments
```bash
kubectl run test-ingress-main  --image=containous/whoami --labels="my-labels=test-ingress"
kubectl run test-ingress-blue  --image=containous/whoami --labels="my-labels=test-ingress"
kubectl run test-ingress-green --image=containous/whoami --labels="my-labels=test-ingress"

kubectl expose pod/test-ingress-main  --port 80
kubectl expose pod/test-ingress-blue  --port 80
kubectl expose pod/test-ingress-green --port 80
```


## list
```bash
kubectl get pod -l my-labels=test-ingress
kubectl get svc -l my-labels=test-ingress
```


## set local hostname
```bash
cat <<EOF | sudo tee -a /etc/hosts
127.0.0.1 whoami.example.com
127.0.0.1 blue.whoami.example.com
127.0.0.1 green.whoami.example.com
EOF

# OR

cat <<EOF | sudo tee -a /etc/hosts
192.168.99.100 whoami.example.com
192.168.99.100 blue.whoami.example.com
192.168.99.100 green.whoami.example.com
EOF
```

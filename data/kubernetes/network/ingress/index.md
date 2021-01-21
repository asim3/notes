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

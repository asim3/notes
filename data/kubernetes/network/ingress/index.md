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
# Bare Metal
# EXTERNAL-IP 
# <pending>
```

> LoadBalancer running on a `Bare Metal Cluster` needs a !!! 


## list all
```bash
clear \
&& kubectl get service -l app.kubernetes.io/name=nginx-ingress-controller \
&& printf "\n---------------------------------\nservice account\n\n" \
&& kubectl get serviceaccount nginx-ingress-nginx-ingress-controller \
&& printf "\n--------------------------------\ncluster role bindings\n\n" \
&& kubectl get clusterrolebindings nginx-ingress-nginx-ingress-controller \
&& printf "\n---------------------------------\ncluster role\n\n" \
&& kubectl get clusterrole nginx-ingress-nginx-ingress-controller \
&& printf "\n--------------------------------\nconfig maps\n\n" \
&& kubectl get configmap nginx-ingress-nginx-ingress-controller
```


## logs
```bash
clear && \
kubectl logs -l app.kubernetes.io/name=nginx-ingress-controller -f
```


## TroubleShooting
```txt
kubectl get svc -l my-labels=my-whoami-test-ingress
```

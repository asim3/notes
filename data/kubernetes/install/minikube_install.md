## add new cluster
don't use sudo
```bash
minikube start
minikube start -p cluster-nickname
minikube start -p cluster-nickname --nodes 2


minikube status
minikube status -p cluster-nickname
```
> underscore are not allowed because of subdomain


## Add ons
```txt
minikube addons list

minikube addons enable ingress
minikube addons enable ingress-dns
minikube addons enable metallb
minikube addons enable storage-provisioner
```


## k8s state metrics
```txt
minikube dashboard

minikube addons enable metrics-server
```


## service
```bash
minikube service list
# |-------------|--------------------|--------------|-----|
# |  NAMESPACE  |        NAME        | TARGET PORT  | URL |
# |-------------|--------------------|--------------|-----|
# | default     | kubernetes         | No node port |
# | default     | test-ingress-blue  | No node port |
# | default     | test-ingress-green | No node port |
# | default     | test-ingress-main  | No node port |
# | kube-system | kube-dns           | No node port |
# |-------------|--------------------|--------------|-----|
```



## delete
```bash
minikube delete -p cluster-nickname
minikube stop   -p cluster-nickname
```


## ssh
```bash
minikube ssh
```

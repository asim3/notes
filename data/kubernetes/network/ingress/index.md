# Ingress
An API object that manages external access to the services in a cluster, typically HTTP.
Ingress may provide load balancing, SSL termination and name-based virtual hosting.


[Nginx Ingress](https://github.com/nginxinc/kubernetes-ingress)


# install
## by minikube
```text
minikube addons enable ingress
```


## or by helm
```bash
helm install nginx-ingress stable/nginx-ingress --set controller.publishService.enabled=true

helm install nginx-ingress bitnami/nginx-ingress-controller --set rbac.create=true

# access ingress through localhost
kubectl port-forward deployment/nginx-ingress-nginx-ingress-controller 8000:80
# OR
# install metallb
```


## or by github
```bash
ingress_V='v0.34.1'

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-$ingress_V/deploy/static/provider/do/deploy.yaml
```


# Testing
## deploy 3 Deployments
```bash
kubectl run test-ingress-main  --image=containous/whoami --labels="my=test-ingress,type=main"
kubectl run test-ingress-blue  --image=containous/whoami --labels="my=test-ingress,type=blue"
kubectl run test-ingress-green --image=containous/whoami --labels="my=test-ingress,type=green"

kubectl expose pod/test-ingress-main  --port 80 --labels="my=test-ingress"
kubectl expose pod/test-ingress-blue  --port 80 --labels="my=test-ingress"
kubectl expose pod/test-ingress-green --port 80 --labels="my=test-ingress"


kubectl get all -l my=test-ingress
```


## set local hostname
```bash
# with minikube addons enable ingress
cat <<EOF | sudo tee -a /etc/hosts
$(minikube ip) whoami.example.com
$(minikube ip) blue.whoami.example.com
$(minikube ip) green.whoami.example.com
EOF


# with kubectl port-forward
cat <<EOF | sudo tee -a /etc/hosts
127.0.0.1 whoami.example.com
127.0.0.1 blue.whoami.example.com
127.0.0.1 green.whoami.example.com
EOF
```

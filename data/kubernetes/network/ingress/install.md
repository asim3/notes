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

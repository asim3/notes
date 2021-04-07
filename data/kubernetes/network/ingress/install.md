## Ingress Controllers
[deploy](https://kubernetes.github.io/ingress-nginx/deploy)

> The first time the ingress controller starts, two Jobs create 
> the SSL Certificate used by the admission webhook. For this reason, 
> there is an initial delay of up to two minutes until it is possible 
> to create and validate Ingress definitions.


## minikube
install `Ingress Controllers` for minikube
```text
minikube addons enable ingress
```


## Digital Ocean
install `Ingress Controllers` for Digital Ocean
```bash
# https://github.com/kubernetes/ingress-nginx/blob/master/Changelog.md
ingress_V='v0.34.1'

kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-$ingress_V/deploy/static/provider/do/deploy.yaml
```


## Helm
```bash
helm repo add ingress-nginx https://kubernetes.github.io/ingress-nginx
helm repo update

helm install ingress-nginx ingress-nginx/ingress-nginx

# get ingress controllers version
POD_NAME=$(kubectl get pods -l app.kubernetes.io/name=ingress-nginx -o jsonpath='{.items[0].metadata.name}')
kubectl exec -it $POD_NAME -- /nginx-ingress-controller --version
```


## Version
```bash
# for minikube
POD_NAMESPACE=kube-system

POD_NAMESPACE=ingress-nginx
POD_NAME=$(kubectl get pods -n $POD_NAMESPACE -l app.kubernetes.io/name=ingress-nginx --field-selector=status.phase=Running -o jsonpath='{.items[0].metadata.name}')

kubectl exec -it $POD_NAME -n $POD_NAMESPACE -- /nginx-ingress-controller --version
```


# Certificate Controller
[docs](https://cert-manager.io/docs)

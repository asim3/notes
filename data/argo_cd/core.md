## install core
```bash
kubectl apply -n argocd -f https://github.com/argoproj/argo-cd/blob/master/manifests/core-install.yaml

kubectl config set-context --current --namespace=argocd # change current kube context to argocd namespace
argocd login --core

argocd admin dashboard
```

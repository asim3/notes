[docs](https://argo-cd.readthedocs.io/en/stable/)


> `minikube delete && minikube start`


## install core
```bash
kubectl create namespace argocd

kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/core-install.yaml


# new custom resource definition
kubectl api-resources | grep argo
# applications                      app,apps           argoproj.io/v1alpha1                   true         Application
# appprojects                       appproj,appprojs   argoproj.io/v1alpha1                   true         AppProject
```


## install Argo CD CLI
```bash
curl -SL -o /tmp/argocd_tmp https://github.com/argoproj/argo-cd/releases/latest/download/argocd-linux-amd64 \
    && sudo mv /tmp/argocd_tmp /usr/local/bin/argocd \
    && sudo chmod +x /usr/local/bin/argocd

argocd version
```


## Access API Server
```bash
argocd login --core

argocd admin dashboard

# fix: FATA[0000] configmap "argocd-cm" not found 
kubectl config set-context --current --namespace=argocd
```


## adde new app
```bash
argocd app create my-new-app \
    --repo https://github.com/argoproj/argocd-example-apps.git \
    --path guestbook \
    --dest-server https://kubernetes.default.svc \
    --dest-namespace default
```


## OR
```yaml
cat <<EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-new-app
  namespace: argocd
spec:
  project: default
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  source:
    repoURL: https://github.com/argoproj/argocd-example-apps.git
    targetRevision: HEAD
    path: guestbook
EOF
```

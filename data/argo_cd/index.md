[docs](https://argo-cd.readthedocs.io/en/stable/)


> `minikube delete && minikube start`


## install
```bash
kubectl create namespace argocd

kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml

kubectl apply -n argocd -f https://github.com/argoproj/argo-cd/blob/master/manifests/ha/install.yaml


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
kubectl port-forward svc/argocd-server -n argocd 8000:443

# user name: admin
# API password
kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 -d && echo

# delete
kubectl -n argocd delete secret argocd-initial-admin-secret



argocd login localhost:8000

# Change the password
argocd account update-password
```


## adde new app
```bash
argocd app create my-guestbook \
    --repo https://github.com/argoproj/argocd-example-apps.git \
    --path guestbook \
    --dest-server https://kubernetes.default.svc \
    --dest-namespace default
```

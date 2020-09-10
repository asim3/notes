# Helm

## Installation
``` txt
sudo snap install helm --classic

sudo helm version --short
```

## Repository
``` txt
sudo helm repo list

# add new repository
sudo helm repo add my-stable https://kubernetes-charts.storage.googleapis.com/

sudo helm repo update
sudo helm repo remove my-stable
```


## search
``` txt
sudo helm search repo wordpress

sudo helm search repo my-stable
sudo helm search repo bitnami
```


## list all releases
``` txt
sudo helm ls
sudo helm ls -a

sudo helm status smiling-penguin
```


## Install Chart
``` txt
sudo helm install my-test-1 bitnami/wordpress

sudo helm ls
sudo helm uninstall my-test-1
```



## Bitnami Repository
``` txt
sudo helm repo add bitnami https://charts.bitnami.com/bitnami
sudo helm install my-kubeapps bitnami/kubeapps

watch 'kubectl get pods'
```

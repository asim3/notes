# Helm

## Add Repository
```txt
helm repo add my-repository https://kubernetes-charts.storage.googleapis.com/
helm repo add    bitnami    https://charts.bitnami.com/bitnami
helm repo remove bitnami

helm repo list
```


## update a repo
```txt
helm repo update
```


## search for charts
```txt
helm search hub  wordpress
helm search repo wordpress
helm search repo my-repository

helm repo list
```


## download a chart
```txt
helm pull  [chart URL] --verify --untar
helm pull  my-repository/wordpress --untar
helm fetch my-repository/wordpress --untar
```


## deploy to kubernetes
```txt
helm install   my-site my-repository/wordpress
helm install   my-site my-repository/wordpress -f       my-values.yaml
helm install   my-site my-repository/wordpress --values my-values.yaml

helm uninstall my-site
```


## status releases charts
```txt
helm ls   -a
helm list -aA
helm ls   -n kubeapps

helm status my-site
```


## customizing the chart
```txt
helm show values my-repository/wordpress

# override any of these settings
helm install -f config.yaml my-repository/wordpress --generate-name

helm get values my-site
```


## dry run
```txt
helm install my-site my-bitnami/wordpress --dry-run --debug
```


## upgrade helm deployment
```txt
helm upgrade -f config.yaml  my-site  my-repository/wordpress
```


## rollback helm deployment
```txt
helm rollback my-site 1
# OR
helm rollback my-site 2
```

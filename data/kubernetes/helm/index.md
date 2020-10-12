# Helm

## search for charts
```txt
helm search hub  wordpress
helm search repo wordpress
helm search repo my-repository
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
helm ls
helm ls   -a
helm list -a

helm status my-site
```


## customizing the chart
```txt
helm show values my-repository/wordpress

# override any of these settings
helm install -f config.yaml my-repository/wordpress --generate-name

helm get values my-site
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

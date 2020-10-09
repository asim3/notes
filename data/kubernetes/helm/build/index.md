## build helm Chart
```txt
helm create my-test-chart
```


## OR
`mkdir my-first-chart`    
`nano  my-first-chart/Chart.yaml`
```yaml
apiVersion: v2
name: my-first-chart
description: A Helm chart for Kubernetes
version: 0.1.0
appVersion: 1.16.0
```

```txt
mkdir my-first-chart/templates
kubectl create deploy my-nginx --image nginx --dry-run=client -o yaml > my-first-chart/templates/deployment.yaml

tree my-first-chart
my-first-chart
├── Chart.yaml
└── templates
    └── deployment.yaml
```


## deploy helm Chart
```txt
helm install my-nickname ./my-first-chart/
helm list
```

---

## update helm Chart
```txt
kubectl expose deploy my-nginx --port 80 --dry-run=client -o yaml > my-first-chart/templates/service.yaml
# update Chart.yaml version to 0.2.0
nano my-first-chart/Chart.yaml
tree my-first-chart
my-first-chart
├── Chart.yaml
└── templates
    ├── deployment.yaml
    └── service.yaml
```


## upgrade helm deployment
```txt
helm upgrade my-nickname ./my-first-chart/
helm list
watch kubectl get service
```


## upgrade helm deployment
```txt
helm rollback my-nickname 1
# OR
helm rollback my-nickname 2
```

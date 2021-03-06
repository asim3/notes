## delete all
```txt
kubectl delete --all all

kubectl delete --all pod,svc,sts,ing,deploy,secret,persistentvolumeclaim
```


## labels
```txt
kubectl get pod/my-pod --show-labels

kubectl get pod/my-pod -o yaml | grep -A 10 labels:
```


## JSON path
get data using JSON
```txt
kubectl get pod/my-pod -o jsonpath='{.metadata.labels.app}'      && echo 
kubectl get pod/my-pod -o jsonpath='{"metadata" "labels" "app"}' && echo 

kubectl get pod/asim-joomla-mariadb-0 -o jsonpath='{index .metadata.labels "app"}' && echo 

kubectl get ns -o jsonpath='{.kind}' && echo
kubectl get ns -o jsonpath='{.items[].kind}' && echo
kubectl get ns -o jsonpath='{.items[].metadata.name}' && echo
```


## Golang Templates
get data using Golang Templates
```txt
kubectl get secrets/my-secret -o go-template='{{.data.username | base64decode}}' && echo

kubectl get secrets/my-secret -o go-template='{{index .data "ca.crt" | base64decode}}'
```


## get url
```txt
google-chrome $(kubectl get service/wordpress-1602541355 -o jsonpath='http://192.168.99.100:{.spec.ports[].nodePort}')
```


## system info
```txt
kubectl get nodes

kubectl describe nodes/cluster-nickname
```


```txt
kubectl top node
kubectl top pod
```


# Kubernetes limits
At v1.19
- No more than 100 pods per node
- No more than 5000 nodes
- No more than 150000 total pods
- No more than 300000 total containers

[details](https://kubernetes.io/docs/setup/best-practices/cluster-large/)

---

## statefulset  List

## HorizontalPodAutoscaler

## PodDisruptionBudget

## PodPreset

## StatefulSet

# Replica Set
```txt
kubectl get rs
```


## scaling
```txt
kubectl scale deploy my-metadata-name --replicas=5
```


`nano ./my-replica-set.yml`
```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: nginx-replicaset
spec:
  replicas: 2
  template:
    spec:
      containers:
      - image: nginx
        name: my-nginx
```


## deploy
```txt
kubectl apply -f ./my-replica-set.yml
```

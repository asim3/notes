# Replica Set
> It is recommend to use Deployments instead of directly using ReplicaSets, 
> unless you require custom update orchestration.


```yaml
kubectl apply -f - <<eof

apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: my-replicaset
spec:
  replicas: 3
  selector:
    matchLabels:
      app.kubernetes.io/instance: my-replicaset-123
  template:
    metadata:
      labels:
        app.kubernetes.io/instance: my-replicaset-123
    spec:
      containers:
      - image: busybox
        name: my-busybox
        command:
        - /bin/sh
        - -c
        - sleep 3000
eof
```


```bash
kubectl get rs

kubectl get po
# NAME                  READY   STATUS    RESTARTS   AGE
# my-replicaset-8ps4p   1/1     Running   0          40s
# my-replicaset-gjv82   1/1     Running   0          40s
# my-replicaset-tjg44   1/1     Running   0          40s
```


## scaling
```txt
kubectl scale replicaset my-replicaset --replicas=5
```

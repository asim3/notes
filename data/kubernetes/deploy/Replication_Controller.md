# Replication Controller
> It is recommend to use `Deployments` instead of directly using `ReplicationController`, 


```yaml
kubectl apply -f - <<eof

apiVersion: v1
kind: ReplicationController
metadata:
  name: my-replica-control
spec:
  replicas: 3
  selector:
    app.kubernetes.io/instance: my-replica-control-456
  template:
    metadata:
      labels:
        app.kubernetes.io/instance: my-replica-control-456
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
kubectl get replicationcontroller/my-replica-control


kubectl get po
# NAME                       READY   STATUS    RESTARTS   AGE
# my-replica-control-tf448   1/1     Running   0          48s
# my-replica-control-vdbwp   1/1     Running   0          48s
# my-replica-control-z5b9h   1/1     Running   0          48s
```


## scaling
```txt
kubectl scale replicationcontroller my-replica-control --replicas=5
```

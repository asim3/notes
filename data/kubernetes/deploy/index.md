## Deployment Manifest
```yaml
kubectl apply -f - <<eof

apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deploy-name
spec:
  replicas: 3
  selector:
    # required field
    matchLabels:
      my-labels: my-template-label
  template:
    metadata:
      labels:
        # also used to link service
        my-labels: my-template-label
    spec:
      containers:
      - name: my-container
        image: busybox
        command:
        - /bin/sh
        - -c
        - sleep 3000

eof
```


## pods
```bash
kubectl get pods
# NAME                              READY   STATUS              RESTARTS   AGE
# my-deploy-name-5c8596ccd5-84xjg   0/1     ContainerCreating   0          11s
# my-deploy-name-5c8596ccd5-8zjw6   0/1     ContainerCreating   0          11s
# my-deploy-name-5c8596ccd5-nwbjm   0/1     ContainerCreating   0          11s
```


## ReplicaSet
```bash
kubectl get rs
# NAME                        DESIRED   CURRENT   READY   AGE
# my-deploy-name-5c8596ccd5   3         3         3       105s
```


## Logs
```bash
kubectl logs deployment/my-deploy-name

kubectl describe deploy my-deploy-name
kubectl scale deploy my-deploy-name --replicas=5
```


# see updating status
```bash
kubectl rollout status deployment/my-deploy-name
# Waiting for deployment "my-deploy-name" rollout to finish: 1 out of 3 new replicas have been updated...
# Waiting for deployment "my-deploy-name" rollout to finish: 1 out of 3 new replicas have been updated...
# Waiting for deployment "my-deploy-name" rollout to finish: 1 out of 3 new replicas have been updated...
# Waiting for deployment "my-deploy-name" rollout to finish: 2 out of 3 new replicas have been updated...
# Waiting for deployment "my-deploy-name" rollout to finish: 2 out of 3 new replicas have been updated...
# Waiting for deployment "my-deploy-name" rollout to finish: 2 old replicas are pending termination...
# Waiting for deployment "my-deploy-name" rollout to finish: 1 old replicas are pending termination...
# Waiting for deployment "my-deploy-name" rollout to finish: 1 old replicas are pending termination...
# deployment "my-deploy-name" successfully rolled out
```


## delete
```bash
kubectl delete deployment my-deploy-name
```

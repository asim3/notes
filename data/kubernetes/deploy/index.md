## Deployment Manifest
`nano my-k8s/my-first-deployment.yml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-metadata-name
  labels:
    my-app: my-metadata-label
spec:
  selector:
    matchLabels:
      app: my-spec-temp-meta-label
  template:
    metadata:
      labels:
        app: my-spec-temp-meta-label
    spec:
      containers:
      - name: my-nginx-container
        image: nginx:1.7.9
        ports:
        - containerPort: 80
  replicas: 3
```


## deploy
```txt
kubectl apply -f my-k8s/my-first-deployment.yml
```


## list
```txt
kubectl get deploy
kubectl get deployment

kubectl get pods
```


## delete
```txt
kubectl delete -f my-k8s/my-first-deployment.yml
# OR
kubectl delete deployment my-metadata-name
# OR
kubectl delete deploy my-metadata-name
```


## deployment details
```txt
kubectl describe deploy     my-metadata-name
kubectl describe deployment/my-metadata-name
```


# see updating status
```txt
kubectl rollout status deployment/my-metadata-name
```

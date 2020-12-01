## Deployment Manifest
`nano ./my-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deploy-name
spec:
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
      - name: my-nginx-container
        image: nginx:1.7.9
  replicas: 2
```

> you can not update selector once deployment is created.


## deploy
```txt
kubectl apply -f ./my-deployment.yaml

kubectl expose deploy/my-deploy-name --type NodePort --port 80


# print url
echo http://$(kubectl get ep/kubernetes -o jsonpath='{.subsets[].addresses[].ip}'):$(kubectl get svc/my-deploy-name -o jsonpath='{.spec.ports[].nodePort}')
```


## list
```txt
kubectl get deploy
kubectl get deployment

kubectl get pods --show-labels
```


## deployment details
```txt
kubectl describe deploy     my-deploy-name
kubectl describe deployment/my-deploy-name
```


## deployment Logs
```txt
kubectl logs deploy/my-deploy-name
kubectl logs deployment/my-deploy-name
```


# see updating status
```txt
kubectl rollout status deployment/my-deploy-name
```


## delete
```txt
kubectl delete -f ./my-deployment.yaml
# OR
kubectl delete deployment my-deploy-name
```

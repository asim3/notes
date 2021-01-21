## Creating objects
```txt
kubectl run asim-pod --image=nginx --port=80
```

## OR

`nano asim2-pod.yaml`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: asim2-pod
spec:
  containers:
  - name: asim2-container
    image: nginx
```


```txt
kubectl apply  -f ./asim2-pod.yaml
kubectl create -f   asim2-pod.yaml

# Deleting resources
kubectl delete -f asim2-pod.yaml
```


## select a namespace
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-nickname
  namespace: namespace-nickname # <<<<<< 
spec: 
  serviceAccountName: service-nickname 
  containers:
  - # ...
```


## add pod object
```txt
kubectl run asim-pod --image=nginx --port=80
```

## OR
`kubectl apply -f - <<eof`
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


# delete
```txt
kubectl delete asim2-pod
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


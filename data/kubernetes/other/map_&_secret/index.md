## Secret
```txt
kubectl get secrets
kubectl get secrets/my-secret -o yaml

kubectl describe secret
kubectl describe secret my-secret
```


## show secret
```txt
kubectl get secrets/my-secret -o yaml
kubectl get secrets/my-secret -o go-template='{{.data.username | base64decode}}' && echo
```


## secret from JSON
```txt
kubectl get secrets/my-secret -o json
kubectl get secrets/my-secret -o jsonpath='{.data.username}' && echo
```

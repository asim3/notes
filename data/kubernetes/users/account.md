## service account
```txt
kubectl get sa
kubectl get sa my-user -o yaml
kubectl describe sa my-user
```


## user manifest
add a new user in the current namespace    
```txt
kubectl create serviceaccount my-user
```

## OR 
write a manifest for new user    
`nano sa-my-user.yaml`
```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-user
  namespace: default
```


## add a new user
```txt
kubectl apply -f sa-my-user.yaml
```


## view secret
```txt
kubectl get secrets

kubectl get secret my-user-token-9q5x2 -o yaml

kubectl describe secret my-user-token-9q5x2
```

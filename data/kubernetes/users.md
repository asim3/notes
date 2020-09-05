### users management

list all users
```bash
# service account
kubectl get sa

# view user details
kubectl get sa default -o yaml
```



write a manifest for new user
`nano sa-my-user.yaml`
```bash
apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-user
  namespace: default
```

add a new user
```bash
kubectl apply -f sa-my-user.yaml

kubectl get sa my-user -o yaml
```


write a manifest for new Cluster Role Binding
`nano crb-my-user.yaml`
```bash
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: my-cluster-binding
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: my-cluster-role
subjects:
- kind: ServiceAccount
  name: my-user
  namespace: default
```


add a new Cluster Role Binding
```bash
kubectl apply -f crb-my-user.yaml

# list all cluster role bindings
kubectl get clusterrolebindings
kubectl get clusterrolebindings my-new-crb -o yaml
```



view user secret
```bash
list all secrets
kubectl get secrets

kubectl describe secrets my-user-token-9q5x2
```









# !!!
```bash
kubectl expose deploy my-metadata-name

kubectl get svc my-metadata-name

kubectl describe svc my-metadata-name

# ENDPOINTS
kubectl get ep my-metadata-name

kubectl get secrets
```
## Cluster Role Binding
```txt
# list all cluster role bindings
kubectl get clusterrolebindings

kubectl get clusterrolebindings my-cluster-binding -o yaml
kubectl describe clusterrolebindings my-cluster-binding
```


## CRB Manifest
write a manifest for new Cluster Role Binding    
`nano crb-my-user.yaml`
```yaml
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


## apply
```txt
kubectl apply -f crb-my-user.yaml
```








# !!!
`nano my_cluster_role_binding.yml`
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: cluster-role-binding-nickname
  # The namespace of the RoleBinding determines where the permissions are granted.
  # This only grants permissions within the "development" namespace.
  namespace: default
subjects:
- kind: User
  name: dave
  apiGroup: rbac.authorization.k8s.io
roleRef:
  kind: ClusterRole
  name: cluster-role-nickname
  apiGroup: rbac.authorization.k8s.io
```

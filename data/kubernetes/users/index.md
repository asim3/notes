# users management
[Authentication](https://kubernetes.io/docs/reference/access-authn-authz/authentication/)
[Creating sample user](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)



## service account
```txt
# list all users
kubectl get sa

# view user details
kubectl get sa default -o yaml
```


## user manifest
add a new user in the current namespace    
```txt
kubectl create serviceaccount my-user
```

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

# list all Service Account
kubectl get sa
kubectl get sa my-user -o yaml

kubectl describe sa my-user
```


## Cluster Role Binding
CRB Manifest
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


## new CRB
new Cluster Role Binding
```txt
kubectl apply -f crb-my-user.yaml

# list all cluster role bindings
kubectl get clusterrolebindings
kubectl get clusterrolebindings my-cluster-binding -o yaml

kubectl describe clusterrolebindings my-cluster-binding
```



## view user secret
```txt
# list all secrets
kubectl get secrets

kubectl get secret my-user-token-9q5x2 -o yaml

kubectl describe secret my-user-token-9q5x2
```


## test user connection
```txt
curl -k https://localhost:36871

curl -u asim4:mypasswd -k https://localhost:36871
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



`nano my_service_file.yml`
```yaml
apiVersion: v1
kind: ServiceAccount
metadata:
  name: service-nickname
  namespace: namespace-nickname
```

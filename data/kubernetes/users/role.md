## Cluster Role
```txt
# list all cluster role
kubectl get clusterrole

kubectl get clusterrole my-cluster-role -o yaml
kubectl describe clusterrole my-cluster-role
```


## Manifest
`nano cr-my-user.yaml`
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: my-cluster-role
  # "namespace" omitted since ClusterRoles are not namespaced
rules:
- apiGroups:
  - ""
  resources:
  - services
  - endpoints
  - pods
  - secrets
  verbs:
  - get
  - list
  - watch
```


## apply
```txt
kubectl apply -f cr-my-user.yaml
```

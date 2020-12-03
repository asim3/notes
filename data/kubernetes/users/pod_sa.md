## pods service account
```txt
kubectl get sa
kubectl describe sa my-user

kubectl get event
```

`nano my-err-deploy.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-sa-err
spec:
  replicas: 1
  selector:
      matchLabels:
        my-name: my-label
  template:
    metadata:
      labels:
        my-name: my-label
    spec:
      containers:
      - image: bitnami/kubectl:latest
        name: my-test-pod
        command: ["/bin/sh", "-c", "kubectl get pods; kubectl config view"]
```


```bash
kubectl apply -f ./my-err-deploy.yaml

kubectl logs deploy/my-sa-err
# Error from server (Forbidden): pods is forbidden: User 
# "system:serviceaccount:default:default" cannot list resource 
# "pods" in API group "" in the namespace "default"
# 
# apiVersion: v1
# clusters: null
# contexts: null
# current-context: ""
# kind: Config
# preferences: {}
# users: null

kubectl get events
```

--------------

## service account error
`nano my-err-deploy.yaml`
```yaml
kind: Deployment
# ...
spec:
  template:
    spec:
      serviceAccountName: my-err-user
      containers:
      # ...
```


```bash
kubectl apply -f ./my-err-deploy.yaml

kubectl get events
# 21s
# Warning
# FailedCreate
# replicaset/my-sa-err-6b5c58654b
# Error creating: pods "my-sa-err-6b5c58654b-" is forbidden: 
# error looking up service account default/my-err-user: 
# serviceaccount "my-err-user" not found
```


--------------


## bind SA with a role
`nano my-deploy.yaml`
```yaml
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRole
metadata:
  name: my-clus-role
  # "namespace" omitted since ClusterRoles are not namespaced
rules:
- apiGroups: [""]
  resources: ["services", "endpoints", "pods", "secrets"]
  verbs: ["get", "list", "watch"]
---
apiVersion: rbac.authorization.k8s.io/v1
kind: ClusterRoleBinding
metadata:
  name: my-clus-binding
subjects:
- kind: ServiceAccount
  name: my-user
  namespace: default
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: ClusterRole
  name: my-clus-role
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-sa-test
spec:
  replicas: 1
  selector:
      matchLabels:
        my-name: my-label
  template:
    metadata:
      labels:
        my-name: my-label
    spec:
      # link pod with a service account
      serviceAccountName: my-user
      containers:
      - image: bitnami/kubectl:latest
        name: my-test-pod
        command: ["/bin/sh", "-c", "kubectl get pods; echo; kubectl get services; echo; kubectl get nodes;"]
```


```bash
kubectl create serviceaccount my-user
kubectl apply -f ./my-deploy.yaml

kubectl logs deploy/my-sa-test
# NAME                          READY   STATUS    RESTARTS   AGE
# my-sa-test-65b679d688-rcpl4   1/1     Running   4          113s
# 
# NAME         TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
# kubernetes   ClusterIP   10.96.0.1    <none>        443/TCP   31d
# 
# (Forbidden): nodes is forbidden: User "system:serviceaccount:default:my-user"
```

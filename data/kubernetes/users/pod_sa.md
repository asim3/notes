## pods service account
```txt
kubectl get sa
kubectl describe sa my-user
```

`nano my-err-deploy.yaml`
```yaml
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
      containers:
      - image: bitnami/kubectl:latest
        name: my-test-pod
        command: ["/bin/sh", "-c", "kubectl get pods; kubectl config view"]
```


```bash
kubectl apply -f ./my-err-deploy.yaml

kubectl logs deploy/my-sa-test
# (Forbidden): pods is forbidden: User "system:serviceaccount:default:default"
# apiVersion: v1
# clusters: null
# contexts: null
# current-context: ""
# kind: Config
# preferences: {}
# users: null
```


## bind SA with a role
`nano my-role.yaml`
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
```


`nano my-bind.yaml`
```yaml
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
```


`nano my-deploy.yaml`
```yaml
kind: Deployment
# ...
    spec:
      # link pod with a service account
      serviceAccountName: my-user
      containers:
      - image: bitnami/kubectl:latest
        name: my-test-pod
        command: ["/bin/sh", "-c", "kubectl get pods; printenv;"]
```


```bash
kubectl create serviceaccount my-user
kubectl apply -f ./my-role.yaml
kubectl apply -f ./my-bind.yaml
kubectl apply -f ./my-deploy.yaml

kubectl logs deploy/my-sa-test
# NAME                          READY   STATUS      RESTARTS   AGE
# my-sa-test-5c8cd78c86-qvdxp   0/1     Completed   0          10s
```
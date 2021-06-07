## list users
```txt
kubectl get sa

kubectl get sa my-user -o yaml

kubectl describe sa my-user
```


## add a new user
```yaml
kubectl apply -f - <<EOF

apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-user
  namespace: default
EOF
```


## OR 
```txt
kubectl -n default create serviceaccount my-user
```


## add user to config
```bash
NAMESPACE=my-namespace
SECRET_NAME=my-user-token-79m7r

kubectl -n ${NAMESPACE} get secrets/${SECRET_NAME} -o jsonpath='{.data.ca\.crt}' \
  | base64 -d > ca.pem
kubectl -n ${NAMESPACE} get secrets/${SECRET_NAME} -o jsonpath='{.data.token}'   \
  | base64 -d > my-token


kubectl config --kubeconfig my-config set-cluster       my-cluster  \
  --certificate-authority=./ca.pem \
  --embed-certs \
  --server="https://84.200.100.201:6443"


kubectl config --kubeconfig my-config set-credentials   my-user     \
  --token=$(cat ./my-token)


kubectl config --kubeconfig my-config set-context       my-context  \
  --user=my-user \
  --cluster=my-cluster


kubectl config --kubeconfig my-config use-context       my-context


kubectl --kubeconfig my-config -n ${NAMESPACE} get po


rm ca.pem my-token
```


## add user role
```yaml
kubectl apply -f - <<EOF

apiVersion: rbac.authorization.k8s.io/v1
kind: Role
metadata:
  name: my-role
  namespace: ${NAMESPACE}
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

---

apiVersion: rbac.authorization.k8s.io/v1
kind: RoleBinding
metadata:
  name: my-binding
  namespace: ${NAMESPACE}
roleRef:
  apiGroup: rbac.authorization.k8s.io
  kind: Role
  name: my-role
subjects:
- kind: ServiceAccount
  name: my-user
  namespace: ${NAMESPACE}

EOF
```

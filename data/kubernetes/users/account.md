## service account
```txt
kubectl get sa
kubectl get sa my-user -o yaml
kubectl describe sa my-user
```


## add a new user
```txt
kubectl -n default create serviceaccount my-user
```


## OR 
```yaml
kubectl apply -f - <<EOF

apiVersion: v1
kind: ServiceAccount
metadata:
  name: my-user
  namespace: default
EOF
```


## add user to config
```bash
CLUSTER_NAME=free-spot-namespaces
CLUSTER_NAMESPACE=default


kubectl config set-credentials my-new-user \
    --token=$(kubectl -n ${CLUSTER_NAMESPACE} get secrets/my-user-token-9q5x2  -o jsonpath='{.data.token}')


kubectl config set-context context_nickname \
  --user=my-new-user \
  --cluster=free-spot-namespaces-csky08
```


## view secret
```txt
kubectl get secret my-user-token-9q5x2 -o yaml

kubectl get secret my-user-token-9q5x2 -o jsonpath='{.data.token}'
```

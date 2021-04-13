## add secret
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Secret
type: Opaque
metadata:
  name: my-secret-1
data:
  my_username: "$(echo -n "Asim" | base64)"
  my_password: "$(echo -n "password" | base64)"
  my_phone: "$(echo -n "098765431" | base64)"
```


## show secret
```bash
kubectl describe secret my-secret-1 

kubectl get secret my-secret-1 -o yaml | grep "data:" -A 4


kubectl get secrets my-secret-1 -o go-template='{{.data.my_username | base64decode}}'
# Asim
```


## OR
```bash
kubectl create secret generic my-secret-2 \
  --from-literal=my_username=Asim \
  --from-literal=my_password=my-password


kubectl get secrets/my-secret-2 -o go-template='{{.data.my_username | base64decode}}' && echo
# Asim
```

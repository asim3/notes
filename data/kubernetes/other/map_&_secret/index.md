## Secret
```txt
kubectl get secrets
kubectl get secrets/my-secret -o yaml

kubectl describe secret
kubectl describe secret my-secret
```


## ConfigMap
```txt
kubectl get cm
kubectl get cm -A

helm customconfigMap
```


## secret from JSON
```txt
kubectl get secrets/my-secret -o go-template='{{.data.username | base64decode}}' && echo


kubectl get serviceaccount default -o jsonpath='{.secrets[].name}' && echo

NS_NAME=default
SA_NAME=default
kubectl get -n $NS_NAME secret $(kubectl get -n $NS_NAME serviceaccount $SA_NAME -o jsonpath='{.secrets[].name}') -o go-template='{{.data.token | base64decode}}' && echo
```
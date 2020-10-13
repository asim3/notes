## Secret
```txt
kubectl get secrets

kubectl describe secret
kubectl describe secret my-secret
```


## ConfigMap
```txt
helm customconfigMap
```


## secret from JSON
```txt
kubectl get serviceaccount default -o jsonpath='{.secrets[].name}' && echo

NS_NAME=default
SA_NAME=default
kubectl get -n $NS_NAME secret $(kubectl get -n $NS_NAME serviceaccount $SA_NAME -o jsonpath='{.secrets[].name}') -o go-template='{{.data.token | base64decode}}' && echo
```
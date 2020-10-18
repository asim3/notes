
`nano my-secret.yaml`
```yaml
apiVersion: v1
kind: Secret
metadata:
  name: my-secret
type: Opaque
data:
  username: QXNpbQ==
  # echo -n "Asim" | base64
  password: cGFzc3dvcmQ=
  # echo -n "password" | base64
```


## add secret
```txt
kubectl apply -f my-secret.yaml
```


## show secret
```txt
kubectl get secrets/my-secret -o go-template='{{.data.username | base64decode}}' && echo

# delete
kubectl delete secrets/my-secret
```

> if you change the secrets, maybe the running pods will be updated.


## OR
```txt
kubectl create secret generic my-secret \
  --from-literal=username=Asim \
  --from-literal=password=my-password


kubectl get secrets/my-secret -o go-template='{{.data.username | base64decode}}' && echo
```


## reference in Pod
As environment variable
`nano my-env-secret.yaml`
```yaml
kind: Pod
spec:
  containers:
    # ...
    env:
    - name: MY-USERNAME
      valueFrom:
        secretKeyRef:
          name: my-secret
          key: username
```

```txt
kubectl exec my-pod -- env | grep MY-USERNAME
```


As a volume
`nano my-volume-secret.yaml`
```yaml
kind: Pod
spec:
  containers:
    # ...
    volumeMounts:
    - name: my-volume
      mountPath: /mydata
  volumes:
  - name: my-volume
    secret:
      secretName: my-secret
```


```txt
kubectl exec my-pod-volume -- cat /mydata/username && echo
kubectl exec my-pod-volume -- cat /mydata/password && echo
```

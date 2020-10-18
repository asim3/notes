## Config Map
```txt
kubectl get cm
kubectl get configmap

kubectl describe configmap/my-conf
```

`nano my-config-map.yaml`
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-conf
data:
  my-info.name: "Asim Ahmed"
  my-info.city: "Dammam"
```


## add config map
```txt
kubectl apply -f my-config-map.yaml
```


## OR
```txt
kubectl create configmap my-conf2 \
  --from-literal=username=Asim \
  --from-literal=password=my-password


kubectl describe configmap/my-conf2

kubectl get configmap my-conf2 -o jsonpath='{.data.username}' && echo
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
    - name: MY-INFO-NAME
      valueFrom:
        configMapKeyRef:
          name: my-conf
          key: name
    - name: MY-INFO-CITY
      valueFrom:
        configMapKeyRef:
          name: my-conf
          key: city
```

```txt
kubectl exec my-pod -- env | grep MY-INFO
```


## As a volume
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
    configMap:
      name: my-conf
```


```txt
kubectl exec my-pod-volume -- cat /mydata/name && echo
kubectl exec my-pod-volume -- cat /mydata/city && echo
```

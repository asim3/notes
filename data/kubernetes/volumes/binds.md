## Persistent Volume Claims
```txt
kubectl get pvc
```


`nano my-pvc.yaml`
```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc-claim
spec:
  storageClassName: manual
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 100Mi
```

```txt
kubectl apply -f my-pvc.yaml

kubectl get persistentvolumeclaim  my-pvc-claim
kubectl get persistentvolume       my-pv-hostpath

# NAME             STATUS      CLAIM
# my-pv-hostpath   Bound       default/my-pvc-claim
```

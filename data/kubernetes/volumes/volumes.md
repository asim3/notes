# Persistent Volumes
```txt
kubectl get pv
```

`nano my-pv.yaml`
```yaml
apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-pv-hostpath
  labels:
    type: local
spec:
  storageClassName: manual
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/my-pv-in-node"
```

```txt
kubectl apply -f my-pv.yaml

kubectl get persistentvolume/my-pv-hostpath
# NAME             STATUS      CLAIM
# my-pv-hostpath   Available  
```
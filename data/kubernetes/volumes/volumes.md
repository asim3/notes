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
  persistentVolumeReclaimPolicy: Retain
  # Retain | Recycle | Delete
```

```txt
kubectl apply -f my-pv.yaml

kubectl get persistentvolume/my-pv-hostpath

# NAME             STATUS      CLAIM                   MY Note
# my-pv-hostpath   Available                           not linked with a PVC
# my-pv-hostpath   Bound       default/my-pvc-claim    linked with a PVC
# my-pv-hostpath   Released    default/my-pvc-claim    not linked with a PVC "claim deleted"
```

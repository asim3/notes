## reclaim policy
```yaml
kubectl apply -f - <<eof
                                       
apiVersion: storage.k8s.io/v1          
kind: StorageClass
metadata:     
  labels:
    addonmanager.kubernetes.io/mode: EnsureExists
  name: standard-retain
provisioner: k8s.io/minikube-hostpath
reclaimPolicy: Retain       
volumeBindingMode: Immediate

---

apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-pvc-4
  namespace: default
spec:
  # volumeName: my-main-volume-3
  storageClassName: standard-retain
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 3Gi
eof
```


## Released !!
```bash
kubectl get pvc,pv

# NAME                             STATUS   VOLUME             CAPACITY   ACCESS MODES   STORAGECLASS      AGE
# persistentvolumeclaim/my-pvc-4   Bound    pvc-1b8bb32-577d   3Gi        RWO            standard-retain   8s

# NAME                             CAPACITY   ACCESS MODES   RECLAIM POLICY   STATUS     CLAIM             AGE
# persistentvolume/pvc-1b8bb-77d   3Gi        RWO            Retain           Bound      default/my-pvc-4  8s
# persistentvolume/pvc-d6ebc-a57   3Gi        RWO            Retain           Released   default/my-pvc-4  3m41s
```

## Persistent Volume Claims
binds Pods to Persistent Volumes
> you cannot bind 2 pvc to the same pv, but you can bind a pvc to multiple Pods


## Storage Classes
if pvc has storageClassName the Pod will be bind to Storage Classes
```bash
kubectl get pv,pvc,sc
```


## Persistent Volume
```yaml
kubectl apply -f - <<eof

apiVersion: v1
kind: PersistentVolume
metadata:
  name: my-persistent-volume
spec:
  storageClassName: ""
  capacity:
    storage: 1Gi
  accessModes:
    - ReadWriteOnce
  hostPath:
    path: "/my/persistent/dir"
  persistentVolumeReclaimPolicy: Delete
  # persistentVolumeReclaimPolicy: Retain
  # persistentVolumeReclaimPolicy: Recycle # deprecated
```


## deploy
```yaml
kubectl apply -f - <<eof

apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-claim-1
spec:
  storageClassName: "" # Must be Empty string, otherwise default StorageClass will be set
  # volumeName: my-persistent-volume
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 100Mi

---

apiVersion: v1
kind: Pod
metadata:
  name: test-1
spec:
  containers:
  - image: busybox
    name: my-busybox
    command:
      - "/bin/sh"
    args: 
      - "-c"
      - "sleep 3000"
    volumeMounts:
    - name: my-volume
      mountPath: /my-volume-data
  volumes:
  - name: my-volume
    persistentVolumeClaim:
      claimName: my-claim-1
eof
```


## show in node
```bash
minikube ssh

ls -al /my/persistent/dir/
# drwxr-xr-x  2 root root  60 May  6 16:15 .
# drwxr-xr-x 20 root root 520 May  6 16:11 ..
```


## add files
```bash
kubectl exec test-1 -- touch /my-volume-data/my-file.txt
kubectl exec test-1 -- ls /my-volume-data
# my-file.txt

kubectl delete po test-1

kubectl exec test-2 -- ls /my-volume-data
# my-file.txt
```


## delete
```bash
kubectl delete pv my-persistent-volume
# PV will be deleted after you delete the linked PVC

kubectl delete pvc my-claim-1
# PVC will be deleted after you delete all the linked pods

kubectl delete po test-1


ssh -i ~/.minikube/machines/minikube/id_rsa docker@$(minikube ip) "ls -al /my/persistent/dir/"
# drwxr-xr-x 2 root root 60 May  7 06:08 .
# drwxr-xr-x 3 root root 60 May  7 06:04 ..
# -rw-r--r-- 1 root root  0 May  7 06:08 my-file.txt
```

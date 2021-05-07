## Persistent Volume Claims
```txt
kubectl get pvc
```

## PVC
> after you add new `PVC` a new `PV` will be added automatically by the `StorageClass`
```yaml
kubectl apply -f - <<eof

apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: my-claim-2
spec:
  # will be assigned to the default storage class
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      # storage: 100Ki
      storage: 100Mi
      # storage: 100Gi
      # storage: 100Ti
      # storage: 100Pi
---

apiVersion: v1
kind: Pod
metadata:
  name: test-2
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
      claimName: my-claim-2
eof
```


## add files
```bash
kubectl exec test-2 -- touch /my-volume-data/my-file-2.txt
kubectl exec test-2 -- ls /my-volume-data
# my-file-2.txt
```


## show in node
```bash
ssh -i ~/.minikube/machines/minikube/id_rsa docker@$(minikube ip) \
  "ls -al /tmp/hostpath-provisioner/default/my-claim-2/"
# drwxr-xr-x 3 root root 4096 May  7 06:22 .
# drwxr-xr-x 3 root root 4096 May  7 06:22 ..
# drwxrwxrwx 2 root root 4096 May  7 06:22 my-file-2
```


## delete
```bash
kubectl delete pvc my-claim-2
# PVC will be deleted after you delete all the linked pods
# PV will be deleted automatically

kubectl delete po test-2


ssh -i ~/.minikube/machines/minikube/id_rsa docker@$(minikube ip) \
  "ls -al /tmp/hostpath-provisioner/default/my-claim-2/"
# No such file or directory
```

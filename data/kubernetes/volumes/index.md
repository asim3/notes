## Persistent Volumes
```txt
kubectl get pv,pvc,sc
```

## Persistent Volume Claims
binds Pods to Persistent Volumes (if possible)
> you cannot bind 2 pvc to the same pv, but you can bind a pvc to multiple Pods


## Storage Classes
> if pvc has storageClassName the Pod will be bind to Storage Classes



## deploy
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-busybox
spec:
  volumes:
  - name: my-volume
    persistentVolumeClaim:
      claimName: my-pvc-claim
  containers:
  - image: busybox
    name: my-busybox
    command: ["/bin/sh"]
    args: ["-c", "sleep 600"]
    volumeMounts:
    - name: my-volume
      mountPath: /my-data-in-container
```

```txt
kubectl describe po/my-busybox

kubectl exec po/my-busybox -- touch /my-data-in-container/my-file.txt
kubectl exec po/my-busybox -- ls /my-data-in-container

kubectl exec --stdin --tty po/my-busybox -- /bin/sh
```
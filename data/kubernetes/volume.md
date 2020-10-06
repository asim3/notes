[delete](https://www.youtube.com/watch?v=I9GMUn15Nes)

# Persistent Volumes
```txt
kubectl get pv
kubectl describe asim-pv
```


## Storage Classes
```txt
kubectl get sc
```


## Persistent Volume Claims
 finds a matching PV , and 
binds Pods to Persistent Volumes (if possible)
> if pvc has storageClassName the Pod will be bind to Storage Classes
```txt
kubectl get pvc
```
> you cannot bind 2 pvc to the same pv, but you can bind a pvc to multiple Pods
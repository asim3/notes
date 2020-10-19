## DaemonSet
`nano my-daemon.yaml`
```yaml
apiVersion: v1
kind: DaemonSet
metadata:
  name: my-daemon-pod
spec:
  containers:
  - name: my-daemon-container
    image: nginx
```

```txt
kubectl apply  -f ./my-daemon.yaml

kubectl get daemonset/my-daemon-pod -o yaml
kubectl describe daemonset/my-daemon-pod

kubectl delete -f ./my-daemon.yaml
```

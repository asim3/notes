## DaemonSet
`nano my-daemon.yaml`
```yaml
apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: my-daemon-pod
spec:
  selector:
      matchLabels:
        name: my-label
  template:
    metadata:
      labels:
        name: my-label
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

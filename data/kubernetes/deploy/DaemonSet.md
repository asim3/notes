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
        name: my-daemon-label
  template:
    metadata:
      labels:
        name: my-daemon-label
    spec:
      containers:
      - name: my-daemon-container
        image: nginx
```

```txt
kubectl apply  -f ./my-daemon.yaml

kubectl get ds
kubectl get daemonset

kubectl get daemonset/my-daemon-pod -o yaml
kubectl describe daemonset/my-daemon-pod

kubectl delete -f ./my-daemon.yaml
```


## add service
`nano my-daemon-port.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-daemon-port
spec:
  type: NodePort
  selector:
    name: my-daemon-label
  ports:
  - port: 123
    targetPort: 80
    nodePort: 30000
```

```txt
kubectl apply  -f ./my-daemon-port.yaml
```

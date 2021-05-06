## DaemonSet
```yaml
kubectl apply -f - <<eof

apiVersion: apps/v1
kind: DaemonSet
metadata:
  name: my-daemon-pod
spec:
  selector:
      matchLabels:
        app.kubernetes.io/instance: my-daemon-159
  template:
    metadata:
      labels:
        app.kubernetes.io/instance: my-daemon-159
    spec:
      containers:
      - name: my-daemon-container
        image: nginx

eof
```


```txt
kubectl describe ds my-daemon-pod

kubectl delete ds my-daemon-pod
```

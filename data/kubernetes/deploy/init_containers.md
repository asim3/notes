## init container
runs a temp container before the main container    
`nano my-init.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-init-nginx
spec:
  replicas: 1
  selector:
      matchLabels:
        my-name: my-label
  template:
    metadata:
      labels:
        my-name: my-label
    spec:
      initContainers:
      - image: busybox
        name: busybox
        command: ["/bin/sh"]
        args: ["-c", "echo '<h1>Hello Kubernetes</h1>' > /nginx-data/index.html"]
        volumeMounts:
        - name: my-shared-volume
          mountPath: /nginx-data

      containers:
      - image: nginx
        name: nginx
        volumeMounts:
        - name: my-shared-volume
          mountPath: /usr/share/nginx/html
      
      volumes:
      - name: my-shared-volume
        emptyDir: {}
```


```txt
kubectl apply -f ./my-init.yaml
```


## add service
```txt
kubectl expose deploy/my-init-nginx --type NodePort --port 80
```


## get node port
```txt
kubectl get service/my-init-nginx -o jsonpath='{.spec.ports[].nodePort}' && echo
```


## init container
runs a temp container before the main container
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-nginx
spec:
  replicas: 1
  template:
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

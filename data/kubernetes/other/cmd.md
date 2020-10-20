## container command line
`nano cmd-test.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-cmd-test
spec:
  selector:
    matchLabels:
      my-labels: my-nginx-cmd
  template:
    metadata:
      labels:
        my-labels: my-nginx-cmd
    spec:
      containers:
      - image: busybox
        ###########
        ##  CMD  ##
        ###########

        # command override the default image ENTRYPOINT
        command: ["/docker-entrypoint.sh"]
        # args    override the default image CMD
        args: ["nginx" "-g", "daemon off;", "/bin/sh", "-c", "echo '<h1>Hello By CMD</h1>' > /data.txt"]
---
apiVersion: v1
kind: Service
metadata:
  name: my-cmd-port
spec:
  type: NodePort
  selector:
    my-labels: my-nginx-cmd
  ports:
  - port: 1234
    targetPort: 80
    nodePort: 32100
```


```txt
kubectl apply -f ./cmd-test.yaml
```

## container command line
`nano cmd-pod.yaml`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
  labels:
    my-pod: my-cmd-pod
spec:
  containers:
  - name: my-container
    image: busybox
    ###########
    ##  CMD  ##
    ###########
    # command: override the default image ENTRYPOINT
    command: ["/bin/sh", "-c"]
    # args: override the default image CMD
    args:    ["echo hi from cmd && echo 'I am Asim' && ls -al /var;"]
```

```txt
kubectl apply -f ./cmd-pod.yaml

kubectl logs pod/my-pod
```




---




`nano cmd-deploy.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-cmd-deploy
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
      - name: my-nginx
        image: nginx
        command: ["cat /docker-entrypoint.sh"]
        args: ["nginx", "-g", "daemon off && echo '<h1>Hello By CMD</h1>' > /usr/share/nginx/html/index.html"]
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
kubectl apply -f ./cmd-deploy.yaml

kubectl logs deploy/my-cmd-deploy -c my-nginx

kubectl exec --stdin --tty deploy/my-cmd-deploy -- /bin/bash
```

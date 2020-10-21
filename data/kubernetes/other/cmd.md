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
  restartPolicy: Never # <<<
  containers:
  - name: my-container
    image: busybox
    ###########
    ##  CMD  ##
    ###########
    # command: override the default image ENTRYPOINT
    command: 
      - /bin/sh
      - -c
    # args: override the default image CMD
    args: 
      - echo 111;echo 222 && echo 333;
      - echo not loged

# $ kubectl logs pod/my-pod
# 111
# 222
# 333
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
      my-labels: my-busybox-label
  template:
    metadata:
      labels:
        my-labels: my-busybox-label
    spec:
      containers:
      - name: my-busybox
        image: busybox
        ###########
        ##  CMD  ##
        ###########
        command: 
        - echo
        - Hello
        args: 
        - World
        - from 
        - busybox   
        - CMD
```


```txt
kubectl apply -f ./cmd-deploy.yaml

kubectl logs deploy/my-cmd-deploy -c my-busybox
# Hello World from busybox CMD
```

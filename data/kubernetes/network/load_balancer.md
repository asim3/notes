# LoadBalancer

`nano ./my-load-balancer-port.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: asim
  name: my-whoami-deploy-1
spec:
  selector:
    matchLabels:
      my-labels: my-whoami-label-1
  template:
    metadata:
      labels:
        my-labels: my-whoami-label-1
    spec:
      containers:
      - name: my-whoami-container
        image: containous/whoami
  replicas: 1
---
apiVersion: v1
kind: Service
metadata:
  namespace: asim
  name: my-whoami-node-port
spec:
  type: LoadBalancer
  selector:
    my-labels: my-whoami-label-1
  ports:
  - name: my-whoami-http
    protocol: TCP
    port: 80
    targetPort: 80
```


## deploy
```sh
kubectl apply -f ./my-load-balancer-port.yaml

kubectl get service my-whoami-node-port -n asim
# NAME                  TYPE           CLUSTER-IP     EXTERNAL-IP    PORT(S)        AGE
# my-whoami-node-port   LoadBalancer   10.233.47.70   10.230.0.246   80:30690/TCP   4m25s

curl 10.230.0.246
```

`nano ./my-node-port.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-whoami-deploy
spec:
  selector:
    matchLabels:
      my-labels: my-whoami-label
  template:
    metadata:
      labels:
        my-labels: my-whoami-label
    spec:
      containers:
      - name: my-whoami-container
        image: containous/whoami
  replicas: 5
---
apiVersion: v1
kind: Service
metadata:
  name: my-whoami-node-port
spec:
  type: NodePort
  selector:
    my-labels: my-whoami-label
  ports:
  - name: my-whoami-http
    protocol: TCP
    port: 80
    nodePort: 32001
```


## deploy
```txt
kubectl apply -f ./my-node-port.yaml

# ip
kubectl get ep/kubernetes -o jsonpath='{.subsets[].addresses[].ip}'

# port
kubectl get svc/my-whoami-node-port -o jsonpath='{.spec.ports[].nodePort}'
```


```bash
curl -s 192.168.99.100:32001 | grep Hostname
# Hostname: my-whoami-deploy-7b89cf6475-75lx2
curl -s 192.168.99.100:32001 | grep Hostname
# Hostname: my-whoami-deploy-7b89cf6475-kngtz
curl -s 192.168.99.100:32001 | grep Hostname
# Hostname: my-whoami-deploy-7b89cf6475-kngtz
curl -s 192.168.99.100:32001 | grep Hostname
# Hostname: my-whoami-deploy-7b89cf6475-nw2qz
curl -s 192.168.99.100:32001 | grep Hostname
# Hostname: my-whoami-deploy-7b89cf6475-sv66n
curl -s 192.168.99.100:32001 | grep Hostname
# Hostname: my-whoami-deploy-7b89cf6475-kngtz
curl -s 192.168.99.100:32001 | grep Hostname
# Hostname: my-whoami-deploy-7b89cf6475-sv66n
curl -s 192.168.99.100:32001 | grep Hostname
# Hostname: my-whoami-deploy-7b89cf6475-kngtz
curl -s 192.168.99.100:32001 | grep Hostname
# Hostname: my-whoami-deploy-7b89cf6475-kngtz
curl -s 192.168.99.100:32001 | grep Hostname
# Hostname: my-whoami-deploy-7b89cf6475-75lx2
curl -s 192.168.99.100:32001 | grep Hostname
# Hostname: my-whoami-deploy-7b89cf6475-sv66n
```

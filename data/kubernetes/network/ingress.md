# Ingress
An API object that manages external access to the services in a cluster, typically HTTP.
Ingress may provide load balancing, SSL termination and name-based virtual hosting.

## deploy 3 containers
```BASH
kubectl apply -f - <<EOF
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
  replicas: 3
EOF
```


## add new ingress
`nano my-ingress.yaml`
```yaml

```

## deploy 3 Deployments
```BASH
for appname in 'main' 'blue' 'green'; do
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: test-ingress-$appname
  namespace: default
  labels:
    my-labels: test-ingress
spec:
  selector:
    matchLabels:
      my-labels: my-whoami-$appname
  template:
    metadata:
      labels:
        my-labels: my-whoami-$appname
    spec:
      containers:
      - name: my-whoami-container
        image: containous/whoami
---
apiVersion: v1
kind: Service
metadata:
  name: test-ingress-$appname
  namespace: default
  labels:
    my-labels: test-ingress
spec:
  type: ClusterIP
  selector:
    my-labels: my-whoami-$appname
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80
EOF
done;
```


## list
```bash
kubectl get deploy -l my-labels=my-whoami-test-ingress
```


## set local hostname
```bash
cat <<EOF | sudo tee -a /etc/hosts
127.0.0.1 whoami.example.com
127.0.0.1 blue.whoami.example.com
127.0.0.1 green.whoami.example.com
EOF
```

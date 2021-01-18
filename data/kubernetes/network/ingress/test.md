## deploy 3 Deployments
```BASH
for appname in 'main' 'blue' 'green'; do
kubectl apply -f - <<EOF
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-whoami-$appname-deploy
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
EOF
done;
```


## set local hostname
```bash
kube_ip=$(kubectl get ep/kubernetes -o jsonpath='{.subsets[].addresses[].ip}')

cat <<EOF | sudo tee -a /etc/hosts
$kube_ip whoami.example.com
$kube_ip blue.whoami.example.com
$kube_ip green.whoami.example.com
EOF
```

## update
```txt
kubectl apply -f my-k8s/my-first-deployment.yml
# OR
kubectl edit deploy my-metadata-name
# OR
kubectl set image deploy my-metadata-name nginx-container=nginx:1.9.1
```


## rollback
```txt
# if rollout isn't updating
# look for error in history
kubectl rollout history deployment/my-metadata-name

# undo the last update
kubectl rollout undo deployment/my-metadata-name
kubectl rollout status deployment/my-metadata-name
```


## update docker image
`nano Dockerfile`
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
```

```txt
cat <<EOF > index.html
<h1> version 1 </h1>
EOF

sudo docker build -t asim3/my-html-image:v1 .

sudo docker login
sudo docker push asim3/my-html-image:v1
```

`nano ./my-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment-name
spec:
  selector:
    matchLabels:
      my-labels: my-template-label
  template:
    metadata:
      labels:
        my-labels: my-template-label
    spec:
      containers:
      - name: my-html-image
        image: asim3/my-html-image:v1
  replicas: 1
```

```txt
kubectl apply -f ./my-deployment.yaml
kubectl expose deploy/my-deployment-name --type NodePort --port 80
echo http://$(kubectl get ep/kubernetes -o jsonpath='{.subsets[].addresses[].ip}'):\
$(kubectl get svc/my-deployment-name -o jsonpath='{.spec.ports[].nodePort}')
```
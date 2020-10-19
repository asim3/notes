## Creating objects
`nano asim2-pod.yaml`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: asim2-pod
spec:
  containers:
  - name: asim2-container
    image: nginx
```


```txt
kubectl apply  -f ./asim2-pod.yaml
kubectl create -f asim2-pod.yaml

# Deleting resources
kubectl delete -f asim2-pod.yaml
```


## OR
```txt
kubectl run asim-pod --image=gcr.io/google-samples/kubernetes-bootcamp:v1 --port=8000
```


## select a namespace
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: pod-nickname
  namespace: namespace-nickname # <<<<<< 
spec: 
  serviceAccountName: service-nickname 
  containers:
  - # ...
```


## Manifest file
`nano my-k8s/my-first-deployment.yml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-metadata-name
  labels:
    my-app: my-metadata-label
spec:
  selector:
    matchLabels:
      app: my-spec-temp-meta-label
  template:
    metadata:
      labels:
        app: my-spec-temp-meta-label
    spec:
      containers:
      - name: my-nginx-container
        image: nginx:1.7.9
        ports:
        - containerPort: 80
  replicas: 3
```


## deploy
```txt
kubectl apply -f my-k8s/my-first-deployment.yml
```


## delete
```txt
kubectl delete -f my-k8s/my-first-deployment.yml
# OR
kubectl delete deployment my-metadata-name
# OR
kubectl delete deploy my-metadata-name
```



## list
```txt
kubectl get deploy -o wide
kubectl get pods -o wide
```


## deployment details
```txt
kubectl describe deploy my-metadata-name
kubectl describe deployment/my-metadata-name

# see updating status
kubectl rollout status deployment/my-metadata-name
```

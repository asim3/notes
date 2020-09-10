## Creating objects
```yaml
nano asim2-pod.yaml
apiVersion: v1
kind: Pod
metadata:
  name: asim2-pod
spec:
  containers:
  - name: asim2-container
    image: nginx
```


```bash
kubectl apply  -f ./asim2-pod.yaml
kubectl create -f asim2-pod.yaml

# Deleting resources
kubectl delete -f asim2-pod.yaml
```


## OR
```bash
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
```bash
kubectl apply -f my-k8s/my-first-deployment.yml
```


## delete
```bash
kubectl delete -f my-k8s/my-first-deployment.yml
# OR
kubectl delete deployment my-metadata-name
# OR
kubectl delete deploy my-metadata-name
```



## list
```bash
kubectl get deploy -o wide
kubectl get pods -o wide

# ReplicaSet
kubectl get rs
```


## deployment details
```bash
kubectl describe deploy my-metadata-name
kubectl describe deployment/my-metadata-name

# see updating status
kubectl rollout status deployment/my-metadata-name
```


## update
```bash
kubectl apply -f my-k8s/my-first-deployment.yml
# OR
kubectl edit deploy my-metadata-name
# OR
kubectl set image deploy my-metadata-name nginx-container=nginx:1.9.1
```


## rollback
```bash
# if rollout isn't updating
# look for error in history
kubectl rollout history deployment/my-metadata-name

# undo the last update
kubectl rollout undo deployment/my-metadata-name
kubectl rollout status deployment/my-metadata-name
```


## scaling
```bash
kubectl scale deploy my-metadata-name --replicas=5
```

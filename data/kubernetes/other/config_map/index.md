## Config Map
```bash
kubectl get cm
kubectl get configmap

kubectl describe configmap my-conf
kubectl describe configmap my-conf2
```


## add config map
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-conf
data:
  my-name: "Asim Mohammed"
  my-city: "Dammam"
  my-phone: "098765431"
  my-settings: |
    1. Across the top, scroll to the tab you want.
    2. Tap a tab:
    
      ​​Home
        Personal info
        Update basic info in your Account. Learn how to change your name and other info.
        
        Data & personalization
        See your data, activity, and preferences that can make services more useful to you. Learn how to choose what activity gets saved.
        
        
        
        Security
```


## OR
```bash
kubectl create configmap my-conf2 \
  --from-literal=username=Asim \
  --from-literal=password=my-password
```


## reference in Pod
> It is Forbidden to change fields other than 
> `spec.containers[*].image`,
> `spec.initContainers[*].image`,
> `spec.activeDeadlineSeconds`,
> `spec.tolerations`

`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod-with-conf-map
spec:
  containers:
  - name: my-2-container
    image: docker.io/asim3/whoami:1.3
    env:
    - name: MY-NEW-NAME
      valueFrom:
        configMapKeyRef:
          name: my-conf
          key: my-name
    - name: MY-NEW-CITY
      valueFrom:
        configMapKeyRef:
          name: my-conf2
          key: password
```


```bash
kubectl describe pod my-pod-with-conf-map

kubectl exec my-pod-with-conf-map -- env | grep MY-NEW
```


## As a volume
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod-with-conf-map-as-volume
spec:
  containers:
  - name: my-2-container
    image: docker.io/asim3/whoami:1.3
    volumeMounts:
    - name: my-volume
      mountPath: /mydata
  volumes:
  - name: my-volume
    configMap:
      name: my-conf
```


```bash
kubectl describe pod my-pod-with-conf-map-as-volume

kubectl exec my-pod-with-conf-map-as-volume -- ls /mydata
# my-city
# my-name


kubectl exec my-pod-with-conf-map-as-volume -- cat /mydata/my-name && echo
# Asim Mohammed
kubectl exec my-pod-with-conf-map-as-volume -- cat /mydata/my-phone && echo
# 098765431


kubectl exec my-pod-with-conf-map-as-volume -- cat /mydata/my-settings && echo
# 1. Across the top, scroll to the tab you want.
# 2. Tap a tab:

#   ​​Home
#     Personal info
#     Update basic info in your Account. Learn how to change your name and other info.
    
#     Data & personalization
#     See your data, activity, and preferences that can make services more useful to you. Learn how to choose what activity gets saved.
    
    
    
#     Security
```

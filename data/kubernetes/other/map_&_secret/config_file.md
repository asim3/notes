`nano my-config-map.yaml`
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: my-conf3
data:
  my-file.txt: |
    my name: Asim Ahmed
    my city: "Dammam"
    Phone: +699
    Country: Saudi Arabia - 'SA'
```


## add config map
```txt
kubectl apply -f my-config-map.yaml
```


## OR
`nano my-file.txt`
```text
my name: Asim Ahmed
my city: "Dammam"
Phone: +699
Country: Saudi Arabia - 'SA'
```


```txt
kubectl create configmap my-conf3 --from-file=./my-file.txt

kubectl describe configmap/my-conf3
```


## link to a pod
`nano my-volume-secret.yaml`
```yaml
kind: Pod
spec:
  containers:
    # ...
    volumeMounts:
    - name: my-volume
      mountPath: /mydata
  volumes:
  - name: my-volume
    configMap:
      name: my-conf
      items:
        - key: my-file.txt
          path: in-pod.conf
```

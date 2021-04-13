`nano /tmp/my-file.txt`
```text
my name: Asim Ahmed
my city: "Dammam"
Phone: +699
Country: Saudi Arabia - 'SA'
```


## from a file
```txt
kubectl create configmap my-conf3 --from-file=/tmp/my-file.txt

kubectl describe configmap/my-conf3
```


## link to a pod
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod-with-conf-map-from-file
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
      name: my-conf3
      items:
        - key: my-file.txt
          path: in-pod.conf
```


```bash
kubectl delete pod my-pod-with-conf-map-from-file
kubectl describe pod my-pod-with-conf-map-from-file

kubectl exec my-pod-with-conf-map-from-file -- ls /mydata
# in-pod.conf

kubectl exec my-pod-with-conf-map-from-file -- cat /mydata/in-pod.conf
# my name: Asim Ahmed
# my city: "Dammam"
# Phone: +699
# Country: Saudi Arabia - 'SA'
```

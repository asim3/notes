## Deploy node port
`nano ./my-node-port.yaml`
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-node-port
spec:
  type: NodePort
  selector:
    # select any Pod containing this label. {.metadata.labels.my-labels}
    my-labels: my-template-label
  ports:
  - name: my-http
    protocol: TCP
    
    # port inside the Pod (required)
    port: 123
    
    # if none will default to port "above"
    # port inside the container pod
    targetPort: 80
    
    # you can access through the hosted node IP
    nodePort: 30000 # range 30000 - 32767
```


## deploy
```txt
kubectl apply -f ./my-node-port.yaml

kubectl get service/my-node-port
kubectl get ep      my-node-port
```

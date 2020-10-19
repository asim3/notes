## list all 
```txt
kubectl get services
kubectl get services/kubernetes -o yaml

kubectl describe services/kubernetes
```


## update
```txt
kubectl port-forward service/kubeapps 8080:80
```


## update
```txt
kubectl expose deployment my-nginx --type NodePort --port 80
```


## ClusterIP
Exposes the Service on a cluster-internal IP. Choosing this value makes the Service only reachable from within the cluster. This is the default ServiceType.


## NodePort
Exposes the Service on each Node's IP at a static port (the NodePort). A ClusterIP Service, to which the NodePort Service routes, is automatically created. You'll be able to contact the NodePort Service, from outside the cluster, by requesting <NodeIP>:<NodePort>.


## LoadBalancer
Exposes the Service externally using a cloud provider's load balancer. NodePort and ClusterIP Services, to which the external load balancer routes, are automatically created.


## ExternalName
Maps the Service to the contents of the externalName field (e.g. foo.bar.example.com), by returning a CNAME record with its value. No proxying of any kind is set up.
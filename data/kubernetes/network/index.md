## services 
```txt
kubectl get svc

kubectl get services --show-labels

kubectl describe svc
```


## end points 
```txt
kubectl get ep

kubectl get endpoints --show-labels

kubectl describe ep
```


## print URL
```bash
# ip
kubectl get ep/kubernetes -o jsonpath='{.subsets[].addresses[].ip}'
# port
kubectl get svc/my-deploy-name -o jsonpath='{.spec.ports[].nodePort}'

# all
echo http://$(kubectl get ep/kubernetes -o jsonpath='{.subsets[].addresses[].ip}'):$(kubectl get svc/my-deploy-name -o jsonpath='{.spec.ports[].nodePort}')
```


## ClusterIP
This is the default ServiceType. 
Exposes the Service on a cluster-internal IP. 
Choosing this value makes the Service only reachable from within the cluster. 


## LoadBalancer
> expensive to scale
Exposes the Service externally using a cloud provider's 
load balancer. NodePort and ClusterIP Services, to which the 
external load balancer routes, are automatically created.


## ExternalName
Maps the Service to the contents of the externalName 
field (e.g. foo.bar.example.com), by returning a CNAME 
record with its value. No proxying of any kind is set up.

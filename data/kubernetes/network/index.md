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


## localhost
```bash
kubectl port-forward service/my-init-nginx 8000:80
# Forwarding from 127.0.0.1:8000 -> 80

kubectl port-forward deployment/my-init-nginx 8080:80
# Forwarding from 127.0.0.1:8000 -> 80

sudo kubectl port-forward service/my-init-nginx 80:80
# Forwarding from 127.0.0.1:80   -> 80

# test:
curl localhost:8080
# <h1>Hello Kubernetes by asim. test port forward</h1>


# Errors:
kubectl port-forward service/my-init-nginx 80:80
# Unable to listen on port 80: permission denied

kubectl port-forward service my-init-nginx 8080:80
# Error from server (NotFound): pods "my-init-nginx" not found
```


## add service
```bash
kubectl expose deploy/my-deploy-name --port 80
# NAME                     TYPE        PORT(S)    AGE
# service/my-deploy-name   ClusterIP   80/TCP     10s

kubectl expose deploy/my-deploy-name --port 443
# NAME                     TYPE        PORT(S)   AGE
# service/my-deploy-name   ClusterIP   443/TCP   4s

kubectl expose deploy/my-deploy-name --port 8000 --type NodePort
# NAME                     TYPE        PORT(S)
# service/my-deploy-name   NodePort    8000:32413/TCP
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


## NodePort
Exposes the Service on each Node's IP at a static port (the NodePort). 
A ClusterIP Service, to which the NodePort Service routes, is 
automatically created. You'll be able to contact the NodePort Service, 
from outside the cluster, by requesting `<Node ip>:<Node port>`.


## LoadBalancer
> expensive to scale
Exposes the Service externally using a cloud provider's 
load balancer. NodePort and ClusterIP Services, to which the 
external load balancer routes, are automatically created.


## ExternalName
Maps the Service to the contents of the externalName 
field (e.g. foo.bar.example.com), by returning a CNAME 
record with its value. No proxying of any kind is set up.

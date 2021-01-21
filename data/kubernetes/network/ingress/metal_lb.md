# MetalLB
Metal Load Balancer
```bash
kubectl get service | grep LoadBalancer
# nginx-ingress-nginx-ingress-controller  LoadBalancer   <pending>     80:31277/TCP,443:31764/TCP

kubectl get node -o wide
# NAME       STATUS   ROLES   INTERNAL-IP      EXTERNAL-IP
# minikube   Ready    master  192.168.99.100   <none>     

kubectl get ep/kubernetes -o jsonpath='{.subsets[].addresses[].ip}'; echo;
# 192.168.99.100
```


## enable strict ARP mode
> you don’t need this if you’re using kube-router as service-proxy because it is enabling strict arp by default.
```bash
kubectl get configmap kube-proxy -n kube-system -o yaml | \
sed -e "s/strictARP: false/strictARP: true/" | \
kubectl apply -f - -n kube-system
```


## install MetalLB
> install MetalLB to balance load between `nodes` on a `Bare Metal Cluster`
```bash
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/namespace.yaml
kubectl apply -f https://raw.githubusercontent.com/metallb/metallb/v0.9.5/manifests/metallb.yaml

# On first install only
kubectl create secret generic -n metallb-system memberlist --from-literal=secretkey="$(openssl rand -base64 128)"

# list
kubectl get all -n metallb-system
```
> The memberlist secret contains the secretkey to encrypt the 
> communication between speakers for the fast dead node detection.


## configuration
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: config
  namespace: metallb-system
data:
  config: |
    address-pools:
    - name: default
      protocol: layer2
      addresses:
      - 192.168.99.100-192.168.99.105
```

> After creating the following ConfigMap, MetalLB takes ownership 
> of one of the IP addresses in the pool and updates the loadBalancer 
> IP field of the ingress-nginx Service accordingly.

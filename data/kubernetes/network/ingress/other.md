## list all
```bash
clear \
&& kubectl get service -l app.kubernetes.io/name=nginx-ingress-controller \
&& printf "\n---------------------------------\nservice account\n\n" \
&& kubectl get serviceaccount nginx-ingress-nginx-ingress-controller \
&& printf "\n--------------------------------\ncluster role bindings\n\n" \
&& kubectl get clusterrolebindings nginx-ingress-nginx-ingress-controller \
&& printf "\n---------------------------------\ncluster role\n\n" \
&& kubectl get clusterrole nginx-ingress-nginx-ingress-controller \
&& printf "\n--------------------------------\nconfig maps\n\n" \
&& kubectl get configmap nginx-ingress-nginx-ingress-controller
```


## logs
```bash
clear && \
kubectl logs -l app.kubernetes.io/name=nginx-ingress-controller -f
```


## TroubleShooting
```txt
kubectl get svc -l my-labels=my-whoami-test-ingress
```


# MetalLB
## install MetalLB
> install MetalLB to balance load between `nodes` on a `Bare Metal Cluster`
```bash
helm install metal-lb bitnami/metallb

# get the external IP
kubectl get node -o wide
```

## MetalLB ConfigMap
> After creating the following ConfigMap, MetalLB takes ownership 
> of one of the IP addresses in the pool and updates the loadBalancer 
> IP field of the ingress-nginx Service accordingly.
`nano metallb-config.yaml`
```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  namespace: metallb-system
  name: config
data:
  config: |
    address-pools:
    - name: default
      protocol: layer2
      addresses:
      - 192.168.99.100-192.168.99.105
```

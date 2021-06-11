## bash check
```bash
kubectl get configmap kube-proxy -n kube-system -o yaml \
| sed -e "s/strictARP: false/strictARP: true/" \
| kubectl diff -f - -n kube-system
```


## bash update
```bash
kubectl get configmap kube-proxy -n kube-system -o yaml \
| sed -e "s/strictARP: false/strictARP: true/" \
| kubectl apply -f - -n kube-system
```


## taints & tolerations
A taint allows a node to refuse a pod to be scheduled unless that pod has a matching toleration.

You apply taints to a node through the Node specification (NodeSpec) and 
apply tolerations to a pod through the Pod specification (PodSpec). When 
you apply a taint a node, the scheduler cannot place a pod on that node 
unless the pod can tolerate the taint.
```yaml
spec:
  ...
  template:
  ...
    spec:
      taints:
      - effect: NoExecute
        key: key1
        value: value1
```

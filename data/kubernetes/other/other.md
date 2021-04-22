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

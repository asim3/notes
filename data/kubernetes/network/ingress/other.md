## logs
```bash
clear; kubectl logs -l app.kubernetes.io/name=nginx-ingress-controller -f
```


## TroubleShooting
```txt
kubectl get svc -l my-labels=my-whoami-test-ingress
```


## list all
```bash
clear \
&& kubectl get service -l my-labels=test-ingress \
&& printf "\n---------------------------------\nservice account\n\n" \
&& kubectl get serviceaccount nginx-ingress-nginx-ingress-controller \
&& printf "\n--------------------------------\ncluster role bindings\n\n" \
&& kubectl get clusterrolebindings nginx-ingress-nginx-ingress-controller \
&& printf "\n---------------------------------\ncluster role\n\n" \
&& kubectl get clusterrole nginx-ingress-nginx-ingress-controller \
&& printf "\n--------------------------------\nconfig maps\n\n" \
&& kubectl get configmap nginx-ingress-nginx-ingress-controller
```

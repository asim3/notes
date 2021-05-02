## service URL
```bash
# get cluster name
kubectl config get-contexts | awk {'print $2'}

kubectl exec -it wp1 -- nslookup kubernetes.default

<service-name>.<namespace>.svc.cluster.local:<service-port>

wh1.default.svc.minikube.local:80
curl dj1.default.svc.minikube.local:80
```

## find DNS
```bash
kubectl exec -i -t dnsutils -- nslookup my-pod.default
```


## DNS debugging
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod
  namespace: default
spec:
  containers:
  - name: dnsu-123-tils
    image: gcr.io/kubernetes-e2e-test-images/dnsutils:1.3
    command:
      - sleep
      - "3600"
    imagePullPolicy: IfNotPresent
  restartPolicy: Always
```


```bash
kubectl exec -it dnsutils -- nslookup kubernetes.default
kubectl exec -it my-pod   -- nslookup kubernetes.default

kubectl exec -ti my-pod -- cat /etc/resolv.conf

# check CoreDNS add-on
kubectl get pods --namespace=kube-system -l k8s-app=kube-dns
kubectl logs -f  --namespace=kube-system -l k8s-app=kube-dns

kubectl get endpoints kube-dns --namespace=kube-system
```


## admission webhook
```bash
kubectl get mutatingwebhookconfigurations
# NAME                   WEBHOOKS   AGE
# cert-manager-webhook   1          5h6m

kubectl get validatingwebhookconfigurations
# NAME                      WEBHOOKS   AGE
# cert-manager-webhook      1          5h6m
# ingress-nginx-admission   1          5h33m
```

## service URL
`curl <service-name>.<namespace>.svc`
```bash
kubectl get endpoints


curl my-service
curl my-service.default
curl my-service.default.svc
curl my-service.default.svc.cluster
curl my-service.default.svc.cluster.local


<service-name>.<namespace>.svc:<service-port>
# or 
<service-name>.<namespace>.svc.cluster.local:<service-port>
```


## resolv debugging
```bash
kubectl exec -ti my-pod -- cat /etc/resolv.conf
```


## DNS debugging
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-dns-utils
  namespace: default
spec:
  containers:
  - name: dnsutils
    image: gcr.io/kubernetes-e2e-test-images/dnsutils:1.3
    command:
      - sleep
      - "3600"
    imagePullPolicy: IfNotPresent
  restartPolicy: Always
```


```bash
kubectl exec -it my-dns-utils   -- nslookup kubernetes.default

kubectl exec -it my-dns-utils   -- nslookup my-service
kubectl exec -it my-dns-utils   -- nslookup my-service.default
kubectl exec -it my-dns-utils   -- nslookup my-service.default.svc
kubectl exec -it my-dns-utils   -- nslookup my-service.default.svc.cluster # ERROR
kubectl exec -it my-dns-utils   -- nslookup my-service.default.svc.cluster.local
```


## check CoreDNS add-on
```bash
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

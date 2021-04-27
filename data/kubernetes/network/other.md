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

## ResourceQuota
> ResourceQuota applies to a namespace, not to the entire cluster
```bash
kubectl -n my-namespace get quota
# NAME            AGE     REQUEST   LIMIT
# default-abc12   3h37m             limits.cpu: 500m/1, limits.memory: 500Mi/1Gi
```


`nano my-quota.yaml`
```yaml
kubectl create ns my-namespace && kubectl apply  -f - <<EOF

apiVersion: v1
kind: ResourceQuota
metadata:
  name: my-quota
  namespace: my-namespace
spec:
  hard:
    pods: 3
    configmaps: 4

    requests.memory: 512Mi
    requests.cpu: 2000m

    # for the entire cluster
    limits.memory: 2Gi
    limits.cpu: 3
EOF
```


## show quota
```bash
kubectl apply  -f ./my-quota.yaml


kubectl -n abc-123 get quota
# NAME            AGE     REQUEST   LIMIT
# default-abc12   3h37m             limits.cpu: 500m/1, limits.memory: 500Mi/1Gi


kubectl get quota -A
kubectl get resourcequota

kubectl -n my-namespace describe quota/my-quota
```


## set a default limits
`nano my-limitrange.yaml`
```yaml
apiVersion: v1
kind: LimitRange
metadata:
  name: my-limitrange
  namespace: my-namespace
spec:
  limits:
  - default:
      memory: 340Mi
    defaultRequest:
      memory: 54Mi
    type: Container
```


## show limits
```txt
kubectl apply  -f ./my-limitrange.yaml

kubectl get limitrange -A

kubectl -n my-namespace describe limitrange/my-limitrange
```


## set Pod limits
```yaml
kind: Pod
# ...
spec:
  containers:
    # ...
    resources:
      limits: {}
        cpu: 560m
        memory: 1.6Gi
      requests:
        cpu: 360m
        memory: 560Mi
```


```txt
helm -n my-namespace install bitnami/wordpress --generate-name

helm -n my-namespace list

watch kubectl -n my-namespace get all
```

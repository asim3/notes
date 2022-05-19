[docs](https://kubernetes.io/docs/tasks/administer-cluster)
[Kubernetes Playground](https://www.katacoda.com/courses/kubernetes/playground)


```txt
kubectl version --short --client 
kubectl version --short

kubectl config view
kubectl config view --raw

kubectl api-versions
kubectl api-resources
kubectl cluster-info


kubectl -n my-namespace get cs,cm,ep,ev,limits,ns,no,pvc,pv,po,rc,quota,sa,svc,crd,crds,ds,deploy,rs,sts,hpa,cj,csr,config,ev,ing,ing,netpol,pdb,psp,pc,sc
```


## GET
```txt
kubectl get all

kubectl get pod,svc,sts,ing,deploy,secret,persistentvolumeclaim


# List all nodes `service` in a cluster
kubectl get nodes

kubectl get deployments

# list all pods
kubectl get pods -o wide
kubectl get pod
kubectl get po -l my-label=by-asim
```



```txt
kubectl get pod asim2-pod -o wide
kubectl get pod asim2-pod -o yaml
kubectl get pod asim2-pod -o json

kubectl describe pod asim2-pod
```

## delete
```txt
kubectl delete all --all

kubectl delete pod           --all
kubectl delete service       --all
kubectl delete deployment    --all
kubectl delete deployment,pod,service,replicaset --all

kubectl delete pod/asim2-pod

kubectl delete pod -l my-label=by-asim
```


## Namespace
```txt
kubectl get    namespace
kubectl get    ns
kubectl create ns         namespace-nickname
kubectl delete ns         namespace-nickname

kubectl get    all  -n namespace-nickname
kubectl get    pods -n namespace-nickname
```


## bash to a pod
```txt
kubectl exec -it           pod/my-pod -- /bin/sh
kubectl exec --stdin --tty pod/my-pod -- /bin/bash
# OR
kubectl exec asim2-pod -- touch /home/asim-test.txt
kubectl exec asim2-pod -- ls /home -al
```


## Pod logs
```bash
kubectl logs __pod_name__

# follow
kubectl logs __pod_name__ -f
```


## Pod Info
```bash
kubectl describe pod __pod_name__
# Events:
#   Type     Reason       Age                    From               Message
#   ----     ------       ----                   ----               -------
#   Normal   Scheduled    54m                    default-scheduler  Successfully assigned test/deploy-metadata to minikube
#   Warning  FailedMount  54m                    kubelet            MountVolume.SetUp failed for volume 
#   Normal   Pulled       52m (x5 over 54m)      kubelet            Container image "deploywebapps:1" already present on machine
#   Normal   Created      52m (x5 over 54m)      kubelet            Created container my-deploy-apps-container
#   Normal   Started      52m (x5 over 54m)      kubelet            Started container my-deploy-apps-container
#   Warning  BackOff      4m33s (x227 over 54m)  kubelet            Back-off restarting failed container
```


## List all Container images
```bash
kubectl get pods -A -o jsonpath="{..image}" \
  | tr -s '[[:space:]]' '\n' \
  | sort \
  | uniq -c
```


## TroubleShooting
```txt
kubectl get events --sort-by=.metadata.creationTimestamp
```


## kubectl force delete namespace
```sh
NAMESPACE=javeed

cd /tmp/

kubectl proxy & kubectl get namespace $NAMESPACE -o json | jq '.spec = {"finalizers":[]}' >  temp.json

curl -k -H "Content-Type: application/json" -X PUT --data-binary @temp.json 127.0.0.1:8001/api/v1/namespaces/$NAMESPACE/finalize
```


## recommended labels
```yaml

kind: Deployment
metadata:
  name: my-wordpress
  labels:
    app.kubernetes.io/name: my-wordpress 
    app.kubernetes.io/instance: abc0123 # deployment id
    app.kubernetes.io/version: "4.9.4"
    app.kubernetes.io/managed-by: asim
    app.kubernetes.io/component: server # database or network or storage
    app.kubernetes.io/part-of: wordpress
# OR
metadata:
  name: my-database
  labels:
    app.kubernetes.io/name: my-database
    app.kubernetes.io/instance: mysql-abcde # A unique name to identifying
    app.kubernetes.io/version: "5.7.21"
    app.kubernetes.io/managed-by: asim
    app.kubernetes.io/component: database # server or network or storage
    app.kubernetes.io/part-of: wordpress
```

## get by labels
```bash
kubectl get pods -A -l my-label=by-asim,my-label=by-bader

# using set-based requirements
kubectl get pods -l 'environment in (production),tier in (frontend)'
kubectl get pods -l 'environment in (production, qa)'
kubectl get pods -l 'environment,environment notin (frontend)'
```

## JSONPath
```bash
kubectl get po --sort-by='{.firstTimestamp}'

kubectl get pods --sort-by=.metadata.creationTimestamp
```

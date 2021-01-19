[Kubernetes Playground](https://www.katacoda.com/courses/kubernetes/playground)


```txt
kubectl version --short --client 
kubectl version --short

kubectl config view
kubectl config view --raw

kubectl api-versions
kubectl api-resources
kubectl cluster-info
```


## GET
```txt
kubectl get all

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


## TroubleShooting
```txt
kubectl get events --sort-by=.metadata.creationTimestamp
```


## Lables
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

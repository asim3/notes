[Kubernetes Playground](https://www.katacoda.com/courses/kubernetes/playground)
[youtube-yamls](https://github.com/justmeandopensource/kubernetes/tree/master/yamls)


```txt
kubectl version --short --client 
kubectl version --short

kubectl config view
kubectl config view --raw

kubectl cluster-info
kubectl api-resources
```


## GET
```txt
kubectl get all

# List all nodes `service` in a cluster
kubectl get nodes

kubectl get deployments

# list all pods
kubectl get pods -o wide
kubectl get pods
kubectl get pod
kubectl get po
```



```txt
kubectl get pod asim2-pod -o wide
kubectl get pod asim2-pod -o yaml
kubectl get pod asim2-pod -o json

kubectl describe pod asim2-pod

kubectl delete pod asim2-pod
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


## List secrets
```txt
kubectl get secrets

kubectl describe secret
kubectl describe secret my-secret
```


## bash to a pod
```txt
kubectl exec -it asim2-pod -- /bin/sh
# OR
kubectl exec asim2-pod -- touch /home/asim-test.txt
kubectl exec asim2-pod -- ls /home -al
```


## Pod logs
```txt
kubectl logs __pod_name__

# follow
kubectl logs __pod_name__ -f
```

```text
sudo kubectl version --short --client 
sudo kubectl version --short

sudo kubectl config view
sudo kubectl config view --raw

sudo kubectl cluster-info
sudo kubectl api-resources
```


GET
```text
sudo kubectl get all

# List all nodes `service` in a cluster
sudo kubectl get nodes

sudo kubectl get deployments

# list all pods
sudo kubectl get pods -o wide
sudo kubectl get pods
sudo kubectl get pod
sudo kubectl get po
```



```text
sudo kubectl get pod asim2-pod -o wide
sudo kubectl get pod asim2-pod -o yaml
sudo kubectl get pod asim2-pod -o json

sudo kubectl describe pod asim2-pod

sudo kubectl delete pod asim2-pod
```


Namespace
```text
sudo kubectl get    namespace
sudo kubectl get    ns
sudo kubectl create ns         namespace-nickname
sudo kubectl delete ns         namespace-nickname

sudo kubectl get    all  -n namespace-nickname
sudo kubectl get    pods -n namespace-nickname
```

List secrets
```
sudo kubectl get secrets

sudo kubectl describe secret
sudo kubectl describe secret my-secret
```


bash to a pod
```text
sudo kubectl exec -it asim2-pod -- /bin/sh
# OR
sudo kubectl exec asim2-pod -- touch /home/asim-test.txt
sudo kubectl exec asim2-pod -- ls /home -al
```


Pod logs
```text
sudo kubectl logs __pod_name__

# follow
sudo kubectl logs __pod_name__ -f
```

[Kubernetes Playground](https://www.katacoda.com/courses/kubernetes/playground)


```  bash
sudo kubectl version --short --client 
sudo kubectl version --short

sudo kubectl config view
sudo kubectl config view --raw

sudo kubectl cluster-info
sudo kubectl api-resources
```


### GET
```bash
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



```  bash
sudo kubectl get pod asim2-pod -o wide
sudo kubectl get pod asim2-pod -o yaml
sudo kubectl get pod asim2-pod -o json

sudo kubectl describe pod asim2-pod

sudo kubectl delete pod asim2-pod
```


### Namespace
```  bash
sudo kubectl get    namespace
sudo kubectl get    ns
sudo kubectl create ns         namespace-nickname
sudo kubectl delete ns         namespace-nickname

sudo kubectl get    all  -n namespace-nickname
sudo kubectl get    pods -n namespace-nickname
```


### List secrets
```bash
sudo kubectl get secrets

sudo kubectl describe secret
sudo kubectl describe secret my-secret
```


### bash to a pod
```  bash
sudo kubectl exec -it asim2-pod -- /bin/sh
# OR
sudo kubectl exec asim2-pod -- touch /home/asim-test.txt
sudo kubectl exec asim2-pod -- ls /home -al
```


### Pod logs
```  bash
sudo kubectl logs __pod_name__

# follow
sudo kubectl logs __pod_name__ -f
```

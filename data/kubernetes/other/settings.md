# setup config file
> you can find the config file in the master server at: `/etc/kubernetes/admin.conf`
```bash
kubectl config view
kubectl config view --raw

# OR
cat ~/.kube/config

# OR
export KUBECONFIG="$(pwd)/kubeconfig.yaml"
echo $KUBECONFIG
# /home/asim/kubeconfig.yaml
```


## clusters
```txt
kubectl config get-clusters
kubectl config delete-cluster my-new-k3d

kubectl config set-cluster cluster_nickname --server=https://10.68.15.202:36871
    --certificate-authority=~/.kube/my-cluster/kube.ca.crt
    --insecure-skip-tls-verify=true
```


## context
> link between Cluster and User Credentials
```txt
# all context
kubectl config use-context context_nickname

kubectl config current-context

kubectl config get-contexts

kubectl config delete-context context_nickname

kubectl config set-context    context_nickname --cluster=cluster_nickname
    --user=user_nickname
    --namespace=namespace
```


## credentials
```txt
kubectl config set-credentials user_nickname 
    --username=admin 
    --password=aaa
    --client-certificate=path/to/certfile.crt 
    --client-key=path/to/keyfile.key 
    --token=bearer_token
    --auth-provider=provider_name
    --auth-provider-arg=key=value
```


## unset
```txt
kubectl config unset current-context
kubectl config unset clusters
kubectl config unset users
kubectl config unset users.aaa
```


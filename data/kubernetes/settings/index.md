# setup config file

```  bash
sudo kubectl config view
sudo kubectl config view --raw
```


### clusters
```  bash
sudo kubectl config get-clusters
sudo kubectl config delete-cluster my-new-k3d

sudo kubectl config set-cluster cluster_nickname --server=https://10.68.15.202:36871
    --certificate-authority=~/.kube/my-cluster/kube.ca.crt
    --insecure-skip-tls-verify=true
```


### context
> link between Cluster and User Credentials
```  bash
# all context
sudo kubectl config use-context context_nickname

sudo kubectl config current-context

sudo kubectl config get-contexts

sudo kubectl config delete-context context_nickname

sudo kubectl config set-context    context_nickname --cluster=cluster_nickname
    --user=user_nickname
    --namespace=namespace
```


### credentials
```  bash
sudo kubectl config set-credentials user_nickname 
    --username=admin 
    --password=aaa
    --client-certificate=path/to/certfile.crt 
    --client-key=path/to/keyfile.key 
    --token=bearer_token
    --auth-provider=provider_name
    --auth-provider-arg=key=value
```


### unset
```  bash
sudo kubectl config unset current-context
sudo kubectl config unset clusters
sudo kubectl config unset users
sudo kubectl config unset users.aaa
```


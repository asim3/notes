
```  bash
sudo kubectl config view
sudo kubectl config view --raw
```


clusters
```  bash
sudo kubectl config get-clusters
sudo kubectl config delete-cluster my-new-k3d

sudo kubectl config set-cluster cluster_nickname --server=https://10.68.15.202:36871
sudo kubectl config set-cluster cluster_nickname --insecure-skip-tls-verify=true
# OR
sudo kubectl config set-cluster cluster_nickname --certificate-authority=~/.kube/my-cluster/kube.ca.crt
```


context
```  bash
# print current user
sudo kubectl config current-context

# switch between users
sudo kubectl config use-context    context_nickname

sudo kubectl config get-contexts
sudo kubectl config set-context    context_nickname --cluster=cluster_nickname
sudo kubectl config set-context    context_nickname --user=user_nickname
sudo kubectl config set-context    context_nickname --namespace=namespace
sudo kubectl config delete-context context_nickname
```


credentials
```  bash
sudo kubectl config set-credentials user_nickname --username=admin --password=aaa
sudo kubectl config set-credentials aaa --client-certificate=path/to/certfile.crt 
sudo kubectl config set-credentials aaa --client-key=path/to/keyfile.key 
sudo kubectl config set-credentials aaa --token=bearer_token
sudo kubectl config set-credentials aaa --auth-provider=provider_name
sudo kubectl config set-credentials aaa --auth-provider-arg=key=value
```


unset
```  bash
sudo kubectl config unset current-context
sudo kubectl config unset clusters
sudo kubectl config unset contexts
sudo kubectl config unset users
sudo kubectl config unset users.aaa
```


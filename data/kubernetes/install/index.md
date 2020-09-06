install kubectl 
a v1.2 client should work with v1.1, v1.2, and v1.3 master. Using the latest version of kubectl helps avoid unforeseen issues
```  bash
curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl

chmod +x ./kubectl
sudo mv ./kubectl /usr/local/bin/kubectl

kubectl version --short
```


install K3D 
```  bash
curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash

sudo k3d version
```


create a new single-node cluster (= 1 container running k3s + 1 loadbalancer container)
```  bash
sudo k3d cluster list
sudo k3d node    list

sudo k3d cluster create my-cluster-asim --servers 3 --agents 3
sudo k3d cluster create my-cluster-asim

sudo k3d cluster start  my-cluster-asim

sudo k3d cluster stop  my-cluster-asim
sudo k3d cluster delete my-cluster-asim

sudo k3d kubeconfig show --all
```

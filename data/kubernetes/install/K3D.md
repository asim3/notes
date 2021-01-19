## install K3D 
```txt
curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash 

sudo k3d version
```

### add new k3s cluster
create a new single-node cluster (= 1 container running k3s + 1 loadbalancer container)
```txt
sudo k3d kubeconfig show --all


sudo k3d cluster list
sudo k3d node    list

sudo k3d cluster create my-cluster-asim --servers 3 --agents 3
sudo k3d cluster create my-cluster-asim

sudo k3d cluster start  my-cluster-asim

sudo k3d cluster stop  my-cluster-asim
sudo k3d cluster delete my-cluster-asim
```

> admin password location `cat /var/lib/rancher/k3s/server/cred/passwd`
```bash
cat <<EOF >> ~/.bashrc
#sudo k3d cluster delete asim-k3s &&
#sudo k3d cluster create asim-k3s &&
sudo k3d cluster start asim-k3s &&
sudo k3d kubeconfig show --all > ~/.kube/config && 
echo "Done."
EOF
```

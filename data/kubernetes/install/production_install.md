## Install Kubernetes for production


[Install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-linux)


Install kubeadm & kubelet $ conntrack
```txt
kubeadm version
kubelet --version
sudo conntrack -S

sudo snap install --classic kubeadm
sudo snap install --classic kubelet
sudo apt install -y conntrack
sudo apt install -y socat
```


initialise master node
```txt
sudo kubeadm init
sudo kubeadm init --pod-network-cidr=192.168.100.164/24
sudo kubeadm init --pod-network-cidr=10.240.0.0/16

# configure pod network on master node only
kubectl apply -f https://raw.githubsercontent.com/coreos/flannel/v0.9.1/Documentation/kube-flannel.yml

kubectl get pods --all-namespaces
```


initialise worker node
```txt
kubeadm token create --print-join-command

kubeadm join --token [] --discovery-token-ca-cert-hash []
```

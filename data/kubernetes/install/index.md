install kubectl 
> a v1.2 client should work with v1.1, v1.2, and v1.3 master.    
Using the latest version of kubectl helps avoid unforeseen issues
```bash
kubectl_version=$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)

cd /tmp/ \
&& sudo echo 'update kubectl to ' $kubectl_version \
&& sudo curl -fLO https://storage.googleapis.com/kubernetes-release/release/$kubectl_version/bin/linux/amd64/kubectl \
&& sudo chmod +x ./kubectl \
&& sudo mv ./kubectl /usr/local/bin/kubectl \
&& echo 'done updating kubectl'

kubectl version --short
```


## Install Minikube
[releases](https://github.com/kubernetes/minikube/releases)
```bash
cd /tmp/ \
&& sudo echo 'update minikube to latest' \
&& curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 \
&& chmod +x minikube-linux-amd64 \
&& sudo mv minikube-linux-amd64 /usr/local/bin/minikube \
&& echo 'done updating minikube'

minikube config set driver virtualbox

sudo docker swarm init

minikube version
```

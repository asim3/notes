## Install Minikube


```txt
sudo apt install -y conntrack
```



[Install Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

```txt
curl -fLO https://github.com/kubernetes/minikube/releases/download/v1.13.1/minikube-linux-amd64
curl -fLO https://github.com/kubernetes/minikube/releases/download/v1.13.1/minikube-linux-amd64.sha256

echo "$(cat ./minikube-linux-amd64.sha256)  minikube-linux-amd64" | sha256sum -c
rm          ./minikube-linux-amd64.sha256

chmod +x ./minikube-linux-amd64 &&
sudo mv ./minikube-linux-amd64 /usr/local/bin/minikube && minikube version

minikube version
```

> don't use sudo, and underscore are not allowed because of subdomain must consist of lower case alphanumeric characters, '-' or '.', and must start and end with an alphanumeric character.
```txt
minikube start -p cluster-nickname
minikube start --nodes 2 -p cluster-nickname

minikube status -p cluster-nickname
minikube service list -p cluster-nickname

minikube dashboard -p cluster-nickname
minikube ssh -p cluster-nickname

minikube stop -p cluster-nickname
minikube delete -p cluster-nickname
```

OR

```txt
sudo minikube start --driver='none'
sudo minikube status
```



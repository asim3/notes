## Install Minikube


```txt
sudo apt install conntrack
```



[Install Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

```txt
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube

chmod +x ./minikube
sudo mv ./minikube /usr/local/bin/minikube

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



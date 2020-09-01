## Install Minikube


```shell
sudo apt install conntrack
```



[Install Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

```shell
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube

chmod +x ./minikube
sudo mv ./minikube /usr/local/bin/minikube

minikube version
```

> don't use sudo

```shell
minikube start
minikube start --nodes 2
minikube start --nodes 2 -p my-demo

minikube stop
minikube delete

minikube status
minikube service list
minikube dashboard
```

OR

```shell
sudo minikube start --driver='none'
sudo minikube status
```



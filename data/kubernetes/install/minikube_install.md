## Install Minikube


```  bash
sudo apt install conntrack
```



[Install Minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

```  bash
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64 && chmod +x minikube

chmod +x ./minikube
sudo mv ./minikube /usr/local/bin/minikube

minikube version
```

> don't use sudo
```  bash
minikube start -p cluster_nickname
minikube start --nodes 2
minikube start --nodes 2 -p cluster_nickname

minikube status
minikube service list
minikube dashboard

minikube ssh

minikube stop
minikube delete
```

OR

```  bash
sudo minikube start --driver='none'
sudo minikube status
```



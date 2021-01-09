## Installation by getbalto.com
```txt
cd /tmp &&
curl https://baltocdn.com/helm/signing.asc | sudo apt-key add -
sudo apt -y install apt-transport-https
echo "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list
sudo apt -y update && sudo apt -y install helm
cd ~/ &&
helm version &&
echo Done.
```


## OR
```txt
cd /tmp &&
curl -fLO https://get.helm.sh/helm-v3.3.4-linux-amd64.tar.gz &&
curl -fLO https://get.helm.sh/helm-v3.3.4-linux-amd64.tar.gz.sha256sum &&
sha256sum -c helm-v3.3.4-linux-amd64.tar.gz.sha256sum &&
tar -zxvf helm-v3.3.4-linux-amd64.tar.gz &&
sudo mv linux-amd64/helm /usr/local/bin/helm &&
cd ~/ &&
helm version &&
echo Done.
```


## Adding Repository
```txt
helm repo list
helm repo update

helm repo add my-repository https://kubernetes-charts.storage.googleapis.com/

helm repo add    my-bitnami https://charts.bitnami.com/bitnami
helm repo remove my-bitnami
```

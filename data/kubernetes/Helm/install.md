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
```bash
helm_version='v3.3.4'

cd /tmp/ \
&& sudo echo 'update helm to ' $helm_version \
&& sudo curl -fLO https://get.helm.sh/helm-$helm_version-linux-amd64.tar.gz \
&& curl -fLO https://get.helm.sh/helm-$helm_version-linux-amd64.tar.gz.sha256sum \
&& sha256sum -c helm-$helm_version-linux-amd64.tar.gz.sha256sum \
&& tar -zxvf helm-$helm_version-linux-amd64.tar.gz \
&& sudo mv linux-amd64/helm /usr/local/bin/helm \
&& helm version \
&& echo 'done updating helm'
```

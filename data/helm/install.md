## install
[releases](https://github.com/helm/helm/releases)
```bash
helm_version='v3.5.0'

cd /tmp/ \
&& sudo echo 'update helm to ' $helm_version \
&& sudo curl -fLO https://get.helm.sh/helm-$helm_version-linux-amd64.tar.gz \
&& curl -fLO https://get.helm.sh/helm-$helm_version-linux-amd64.tar.gz.sha256sum \
&& sha256sum -c helm-$helm_version-linux-amd64.tar.gz.sha256sum \
&& tar -zxvf helm-$helm_version-linux-amd64.tar.gz \
&& sudo mv linux-amd64/helm /usr/local/bin/helm \
&& echo 'done updating helm' $(helm version --template "{{.Version}}")


helm version --template "{{.Version}}"
```


## OR install using getbalto.com
```bash
cd /tmp \
&& sudo echo 'update helm using getbalto.com' \
&& curl -Lf https://baltocdn.com/helm/signing.asc -o /tmp/baltocdn_key \
&& sudo apt-key add /tmp/baltocdn_key \
&& sudo apt -y install apt-transport-https \
&& echo "deb https://baltocdn.com/helm/stable/debian/ all main" | sudo tee /etc/apt/sources.list.d/helm-stable-debian.list \
&& sudo apt -y update \
&& sudo apt -y install helm \
&& echo 'done updating helm' $(helm version --template "{{.Version}}")


helm version
helm version --template "{{.Version}}"
```

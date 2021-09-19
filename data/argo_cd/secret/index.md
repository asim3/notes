[git](https://github.com/bitnami-labs/sealed-secrets)


## install chart
```bash
helm repo add sealed-secrets-repo https://bitnami-labs.github.io/sealed-secrets

helm install my-sealed-secrets sealed-secrets/sealed-secrets
```


## install cli
```bash
curl -SL -o /tmp/kubeseal_tmp https://github.com/bitnami-labs/sealed-secrets/releases/download/v0.16.0/kubeseal-linux-amd64 \
    && sudo mv /tmp/kubeseal_tmp /usr/local/bin/kubeseal \
    && sudo chmod +x /usr/local/bin/kubeseal


kubeseal --version
# kubeseal version: v0.16.0
```

[Docs](https://github.com/bitnami/kube-prod-runtime/blob/master/docs/quickstart-generic.md)


Bitnami Kubernetes Production Runtime


## Prerequisites
```bash
sudo apt install jq

curl -OL https://github.com/bitnami/kubecfg/releases/download/v0.16.0/kubecfg-linux-amd64
chmod +x kubecfg-linux-amd64
sudo mv kubecfg-linux-amd64 /usr/local/bin/kubecfg

kubecfg version
```


## Install kubeprod
```bash
# set temporary environment variable
BKPR_VERSION=$(curl --silent "https://api.github.com/repos/bitnami/kube-prod-runtime/releases/latest" | jq -r '.tag_name')

curl -LO https://github.com/bitnami/kube-prod-runtime/releases/download/${BKPR_VERSION}/bkpr-${BKPR_VERSION}-linux-amd64.tar.gz

tar xf bkpr-${BKPR_VERSION}-linux-amd64.tar.gz

chmod +x bkpr-${BKPR_VERSION}/kubeprod
sudo mv bkpr-${BKPR_VERSION}/kubeprod /usr/local/bin/

sudo kubeprod version
```


## Deploy BKPR
`nano ~/.bashrc`
```bash
export DNS_ZONE=my-domain.com
export ADMIN_EMAIL=admin@my-domain.com
export OAUTH_AUTHZ_DOMAIN="my-domain.com"
export KEYCLOAK_PASSWORD="secretpassword"
export KEYCLOAK_GROUP=""

echo $DNS_ZONE

sudo kubeprod install generic \
  --dns-zone "${DNS_ZONE}" \
  --email "${ADMIN_EMAIL}" \
  --authz-domain "${OAUTH_AUTHZ_DOMAIN}" \
  --keycloak-password "${KEYCLOAK_PASSWORD}" \
  --keycloak-group "${KEYCLOAK_GROUP}"


kubectl get pods
kubectl get pods -n kubeprod
```


## Configure domain registration records
```bash
kubectl -n kubeprod get svc nginx-ingress-udp -o jsonpath='{.status.loadBalancer.ingress[0].ip}'
```

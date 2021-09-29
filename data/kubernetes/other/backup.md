# Backup and Migrate
[github](https://github.com/vmware-tanzu/velero)
[docs](https://velero.io/docs/v1.6/)


## Install velero CLI
```
velero_version=v1.6.3
velero_link="https://github.com/vmware-tanzu/velero/releases/download/${velero_version}/velero-${velero_version}-linux-amd64.tar.gz"


mkdir -p /tmp/velero \
    && curl -Lo /tmp/velero/velero.tar.gz ${velero_link} \
    && cd /tmp/velero/ \
    && tar -xvf ./velero.tar.gz \
    && sudo mv ./velero-${velero_version}-linux-amd64/velero /usr/local/bin/velero
```

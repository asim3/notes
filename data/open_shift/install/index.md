## Install Minishift
```bash
minishift_version=1.34.3
minishift_link=https://github.com/minishift/minishift/releases/download/v${minishift_version}/minishift-${minishift_version}-linux-amd64.tgz
minishift_sha256_link=https://github.com/minishift/minishift/releases/download/v${minishift_version}/minishift-${minishift_version}-linux-amd64.tgz.sha256


cd /tmp/ \
  && sudo echo 'update minishift to ' {$minishift_version} \
  && sudo curl -fLO ${minishift_link} \
  && sudo curl -fLO ${minishift_sha256_link} \
  && echo "$(cat minishift-${minishift_version}-linux-amd64.tgz.sha256) minishift-${minishift_version}-linux-amd64.tgz" \
  | sha256sum -c --strict \
  && tar -xzf minishift-${minishift_version}-linux-amd64.tgz \
  && cd minishift-${minishift_version}-linux-amd64 \
  && sudo chmod +x ./minishift \
  && sudo mv ./minishift /usr/local/bin/minishift \
  && echo 'done updating minishift'

minishift version
```


## run
```bash
minishift start --vm-driver virtualbox
```


## delete
```bash
minishift delete --clear-cache
```

[docs](https://docs.okd.io/latest/welcome/index.html)


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


## install VE
Setting Up the Virtualization Environment
```bash
sudo apt install qemu-kvm libvirt-daemon-system libvirt-clients bridge-utils

mkdir -p /tmp/docker-machine-kvm \
  && cd /tmp/docker-machine-kvm \
  && curl -L https://github.com/dhiltgen/docker-machine-kvm/releases/download/v0.10.0/docker-machine-driver-kvm-ubuntu16.04 -o ./docker-machine-driver-kvm \
  && chmod +x ./docker-machine-driver-kvm \
  && sudo mv ./docker-machine-driver-kvm /usr/local/bin/docker-machine-driver-kvm


# setup virsh network
sudo virsh net-start default
sudo virsh net-autostart default
```


## run
```bash
minishift start
minishift start --vm-driver virtualbox
```


## delete
```bash
minishift delete --clear-cache
```

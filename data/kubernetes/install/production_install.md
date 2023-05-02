## Production
[GitHub](https://github.com/kubernetes-sigs/kubespray)

[Kubespray](https://kubernetes.io/docs/setup/production-environment/tools/kubespray/)

[Kubespray vs Kubeadm](https://github.com/kubernetes-sigs/kubespray/blob/master/docs/comparisons.md)


## install
```bash
git clone https://github.com/kubernetes-sigs/kubespray.git
cd kubespray/

python3 -m venv .venv
source ./.venv/bin/activate
pip install -r requirements.txt

# Copy sample inventory
cp -rfp inventory/sample inventory/asim-cluster

# Update asim-cluster inventory
declare -a IPS=(10.10.1.3 10.10.1.4 10.10.1.5)
CONFIG_FILE=inventory/asim-cluster/hosts.yaml python3 contrib/inventory_builder/inventory.py ${IPS[@]}
```


## Deploy Kubespray
```bash
ansible-playbook -i inventory/asim-cluster/hosts.yaml  --become --become-user=root cluster.yml
```


## Clean up old Kubernete
```bash
ansible-playbook -i inventory/asim-cluster/hosts.yaml  --become --become-user=root reset.yml
```

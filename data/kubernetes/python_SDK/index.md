## K8s Python Client


## version
```py
from kubernetes.config import load_kube_config

load_kube_config()

# ---
from kubernetes.client import CoreApi


CoreApi().get_api_versions()
{
    'api_version': None,
    'kind': 'APIVersions',
    'server_address_by_client_cid_rs': [
        {'client_cidr': '0.0.0.0/0', 'server_address': '192.168.99.100:8443'}
    ],
    'versions': ['v1']
}


# ---
from kubernetes.client import CoreV1Api


pod_list = CoreV1Api().list_pod_for_all_namespaces(watch=False)

for pod in pod_list.items:
    print("%-15s %+15s %s" % (
            pod.status.pod_ip, 
            pod.metadata.namespace, 
            pod.metadata.name
        )
    )
```


`nano /tmp/my-deployment.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deploy-name
spec:
  selector:
    # required field
    matchLabels:
      my-labels: my-template-label
  template:
    metadata:
      labels:
        # also used to link service
        my-labels: my-template-label
    spec:
      containers:
      - name: my-nginx-container
        image: nginx:1.7.9
  replicas: 2
```


## Deploy YAML File
```py
from os import path
import yaml
from kubernetes.client import AppsV1Api, V1DeleteOptions
from kubernetes.client.exceptions import ApiException


try:
    with open("/tmp/my-deployment.yaml") as my_file:
        deploy_file = yaml.safe_load(my_file)
        AppsV1Api().create_namespaced_deployment(
            body=deploy_file, 
            namespace="default")
except ApiException as err:
    print(err.status) # 409
    pprint(err.body)
```


## delete
```py
from kubernetes.client import AppsV1Api, V1DeleteOptions
from kubernetes.client.exceptions import ApiException


try:
    AppsV1Api().delete_namespaced_deployment(
        name="my-deploy-name",
        namespace="default",
        body=V1DeleteOptions())
except ApiException as err:
    print(err.status) # 409
    pprint(err.body)
```


## list
```py
from kubernetes.client import AppsV1Api
from kubernetes.client.exceptions import ApiException


deploy_list = AppsV1Api().list_namespaced_deployment(namespace="default")
for deploy in deploy_list.items:
    print("%+20s %-5s %-5s" % (
            deploy.metadata.name,
            # deploy.metadata.labels, 
            deploy.status.available_replicas, 
            deploy.status.ready_replicas, 
        )
    )
```

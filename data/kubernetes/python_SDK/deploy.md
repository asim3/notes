```py
from kubernetes import client

# DNS-1123 subdomain must consist of lower case, '-' or '.', 
# and must start and end with an alphanumeric character
DEPLOYMENT_NAME = "asim-sdk-deployment"

def create_deployment_object():
    # Configureate Pod template container
    container = client.V1Container(
        name="nginx",
        image="nginx:1.15.4",
        ports=[client.V1ContainerPort(container_port=80)],
        resources=client.V1ResourceRequirements(
            requests={"cpu": "100m", "memory": "200Mi"},
            limits={"cpu": "500m", "memory": "500Mi"}
        )
    )

    # Create and configurate a spec section
    template = client.V1PodTemplateSpec(
        metadata=client.V1ObjectMeta(labels={"app": "nginx"}),
        spec=client.V1PodSpec(containers=[container]))

    # Create the specification of deployment
    spec = client.V1DeploymentSpec(
        replicas=3,
        template=template,
        selector={'matchLabels': {'app': 'nginx'}})

    # Instantiate the deployment object
    return client.V1Deployment(
        api_version="apps/v1",
        kind="Deployment",
        metadata=client.V1ObjectMeta(name=DEPLOYMENT_NAME),
        spec=spec)
```


## Add
```py
api_instance = client.AppsV1Api()
deployment = create_deployment_object()

def add_deployment(api_instance, deployment):
    api_response = api_instance.create_namespaced_deployment(
        body=deployment,
        namespace="default")
```


## Update
```py
api_instance = client.AppsV1Api()
deployment = create_deployment_object()

def update_deployment(api_instance, deployment):
    # Update container image
    deployment.spec.template.spec.containers[0].image = "nginx:1.16.0"
    
    api_response = api_instance.patch_namespaced_deployment(
        name=DEPLOYMENT_NAME,
        namespace="default",
        body=deployment)
```


## Delete
```py
api_instance = client.AppsV1Api()

def delete_deployment(api_instance):
    api_response = api_instance.delete_namespaced_deployment(
        name=DEPLOYMENT_NAME,
        namespace="default",
        body=client.V1DeleteOptions(
            propagation_policy='Foreground',
            grace_period_seconds=5))
```

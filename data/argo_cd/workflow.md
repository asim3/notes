# argocd workflow

[docs](https://argoproj.github.io/argo-workflows/workflow-concepts/)

[installation](https://argoproj.github.io/argo-workflows/installation/)

[youtube](https://www.youtube.com/watch?v=UMaivwrAyTA)



## template
```yaml
cat <<EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: ClusterWorkflowTemplate
metadata:
  name: my-cluster-workflow-template-whalesay-template
spec:
  templates:
  - name: my_template_command_1
    inputs:
      parameters:
      - name: message
    container:
      image: docker/whalesay
      command: [cowsay]
      args: ["{{inputs.parameters.message}}"]
EOF
```


## Workflow
```yaml
cat <<EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: Workflow
metadata:
  generateName: very-
  labels:
    workflows.argoproj.io/archive-strategy: "false"
spec:
  entrypoint: my_command_1
  serviceAccountName: workflow
  templates:
  - name: my_command_1
    container:
      image: alpine:latest
      command: [ls]
      args: ["-l"]
  - name: my_command_2
    container:
      image: alpine:latest
      command: [sleep]
      args: ["10"]
  - name: my_command_3
    steps:
      - - name: my-step-whalesay-template
          templateRef:
            name: my-cluster-workflow-template-whalesay-template
            template: my_template_command_1
            clusterScope: true
          arguments:
            parameters:
            - name: message
              value: "hi from my command 3"
EOF
```


```bash
kubectl -n workflows get pods
```


## link with events
```yaml

```

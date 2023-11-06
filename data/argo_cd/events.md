# argocd events

[docs](https://argoproj.github.io/argo-events/)

[event source](https://github.com/argoproj/argo-events/blob/master/api/event-source.md)


## install
```bash
kubectl create ns argo-events

kubectl apply -f https://raw.githubusercontent.com/argoproj/argo-events/stable/manifests/install.yaml
```


## Event Bus
```bash
kubectl -n argo-events apply -f https://raw.githubusercontent.com/argoproj/argo-events/stable/examples/eventbus/native.yaml
```


## Event Source
```yml
cat <<EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: EventSource
metadata:
  name: webhook
spec:
  service:
    ports:
      - port: 12000
        targetPort: 12000
  webhook:
    my-devops:
      port: "12000"
      endpoint: /my-devops
      method: POST
EOF
```


## Sensor
```yml
cat <<EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: Sensor
metadata:
  name: webhook
spec:
  template:
    serviceAccountName: argo-events-sa
  dependencies:
  - name: payload
    eventSourceName: webhook
    eventName: my-devops
  triggers:
  - template:
      name: payload
      k8s:
        group: ""
        version: v1
        resource: pods
        operation: create
        source:
          resource:
            apiVersion: v1
            kind: Pod
            metadata:
              generateName: payload-
              labels:
                app: payload
            spec:
              containers:
              - name: hello
                image: alpine
                command: ["echo"]
                args: ["This is the message you sent me:\n", ""]
              restartPolicy: Never
        parameters:
          - src:
              dependencyName: payload
              dataKey: body.message
            dest: spec.containers.0.args.1
EOF
```


## Test
```bash
kubectl --namespace argo-events port-forward __EVENT_SOURCE_POD_NAME__ 12000:12000


curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"message":"My first webhook 1111111111"}' \
    http://localhost:12000/my-devops
```

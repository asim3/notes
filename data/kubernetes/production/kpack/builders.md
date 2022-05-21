# Builders

[docs](https://github.com/pivotal/kpack/blob/main/docs/builders.md)

The Builder configuration will write to the registry with the secret 
configured in step one and will reference the stack and store created 
in step three and four. The builder order will determine the order in 
which buildpacks are used in the builder.
```yaml
kubectl apply -f - <<EOF

apiVersion: kpack.io/v1alpha2
kind: Builder
metadata:
  name: my-builder
  namespace: default
spec:
  serviceAccountName: tutorial-service-account
  tag: my-test-tag/builder
  stack:
    name: base
    kind: ClusterStack
  store:
    name: default
    kind: ClusterStore
  order:
  - group:
    - id: paketo-buildpacks/java
  - group:
    - id: paketo-buildpacks/nodejs
EOF
```

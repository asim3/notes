# Images

[docs](https://github.com/pivotal/kpack/blob/main/docs/image.md)


## Apply a kpack image resource
```yaml
kubectl apply -f - <<EOF

apiVersion: kpack.io/v1alpha2
kind: Image
metadata:
  name: tutorial-image
  namespace: default
spec:
  tag: <DOCKER-IMAGE-TAG>
  serviceAccountName: tutorial-service-account
  builder:
    name: my-builder
    kind: Builder
  source:
    git:
      url: https://github.com/spring-projects/spring-petclinic
      revision: 82cb521d636b282340378d80a6307a08e3d4a4c4
EOF
```

# Images

[docs](https://github.com/pivotal/kpack/blob/main/docs/image.md)


## list kpack images
```bash
kubectl -n default get img
kubectl -n default get imgs
kubectl -n default get cnbimage
kubectl -n default get cnbimages
kubectl -n default get images.kpack.io
```


## Apply a kpack image resource
```yaml
kubectl apply -f - <<EOF

apiVersion: kpack.io/v1alpha2
kind: Image
metadata:
  name: tutorial-image
  namespace: default
spec:
  tag: asim3/ci-cd-example
  # docker pull asim3/ci-cd-example
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

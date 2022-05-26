# kpack
buildpacks: from code to images

[build packs](https://buildpacks.io/)

[Tutorial](https://github.com/pivotal/kpack/blob/main/docs/tutorial.md)


## install
[releases](https://github.com/pivotal/kpack/releases)
```bash
curl -Lo /tmp/kpack-install.yaml https://github.com/pivotal/kpack/releases/download/v0.5.3/release-0.5.3.yaml


# kpack cli
# https://github.com/vmware-tanzu/kpack-cli/releases
```


## add docker registry secret
```bash
docker login
cat ~/.docker/config.json
cat /home/asim/.docker/config.json

kubectl create secret generic tutorial-registry-credentials \
    --from-file=.dockerconfigjson=/home/asim/.docker/config.json \
    --type=kubernetes.io/dockerconfigjson \
    --namespace default

# OR
kubectl create secret docker-registry tutorial-registry-credentials \
    --docker-username=asim \
    --docker-password=my-password \
    --docker-server=https://index.docker.io/v1/ \
    --namespace default
```


## add service account 
to link pods with registry secret 
```yaml
kubectl apply -f - <<EOF

apiVersion: v1
kind: ServiceAccount
metadata:
  name: tutorial-service-account
  namespace: default
secrets:
- name: tutorial-registry-credentials
imagePullSecrets:
- name: tutorial-registry-credentials
EOF
```


## add kpack store

[Buildpackages for other languages are available from paketo](https://github.com/orgs/paketo-buildpacks/repositories)

repository of buildpacks(from code to images)
```yaml
kubectl apply -f - <<EOF

apiVersion: kpack.io/v1alpha2
kind: ClusterStore
metadata:
  name: default
spec:
  sources:
  - image: gcr.io/paketo-buildpacks/java
  - image: gcr.io/paketo-buildpacks/nodejs
EOF
```


## add stack configuration
A stack resource is the specification for a cloud native buildpacks 
stack used during build and in the resulting app image.
```yaml
kubectl apply -f - <<EOF

apiVersion: kpack.io/v1alpha2
kind: ClusterStack
metadata:
  name: base
spec:
  id: "io.buildpacks.stacks.bionic"
  buildImage:
    image: "paketobuildpacks/build:base-cnb"
  runImage:
    image: "paketobuildpacks/run:base-cnb"
EOF
```


## add Builder configuration
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
  tag: docker-repo-username/app-name
  # tag:        asim3/ci-cd-example
  # docker pull asim3/ci-cd-example
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


## list kpack images
```bash
kubectl -n default get img

kubectl -n default get img tutorial-image
kubectl -n default get imgs tutorial-image

# show kpack schedule a new build
kubectl -n default get builds
```


## Debugging
```bash
kubectl -n default get secret tutorial-registry-credentials

kubectl -n default describe sa tutorial-service-account
# Name:                tutorial-service-account
# Namespace:           default
# Image pull secrets:  tutorial-registry-credentials (not found)


kubectl -n default describe builder my-builder
# Status:
#   Conditions:
#     Message:               secrets "tutorial-registry-credentials" not found
#     Status:                False
#     Type:                  Ready
#     ------------------------------
#     Message:               GET https://auth.docker.io: unexpected status code 401 
#                            Unauthorized: incorrect username or password
#     Status:             False
#     Type:               Ready


kubectl -n default describe img tutorial-image
# Status:
#   Conditions:
#     Status:                Unknown
#     Type:                  Ready
#     Message:               Builder my-builder is not ready
#     Reason:                BuilderNotReady
#     Status:                False
#     Type:                  BuilderReady


kubectl describe po tutorial-image-build-1-build-pod
# secret-volume-tutorial-registry-credentials
# object "default"/"tutorial-registry-credentials" not registered
```

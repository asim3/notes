## reference in Pod
> if you change the secrets, maybe the running pods will be updated.
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: my-pod-with-secret
spec:
  containers:
  - name: my-2-container
    image: docker.io/asim3/whoami:1.3
    env:
    - name: MY_ENV_USERNAME
      valueFrom:
        secretKeyRef:
          name: my-secret-1
          key: my_username
    - name: MY_ENV_PASS
      valueFrom:
        secretKeyRef:
          name: my-secret-1
          key: my_password
    - name: MY_ENV_PHONE
      valueFrom:
        secretKeyRef:
          name: my-secret-1
          key: my_phone
```


## describe
```bash
kubectl describe pod my-pod-with-secret

kubectl exec my-pod-with-secret -- env | grep MY_ENV
# MY_ENV_PASS=password
# MY_ENV_PHONE=098765431
# MY_ENV_USERNAME=Asim
# MY_ENV=asim
```


## from file
```bash
kubectl create secret generic regcred \
    --from-file=.dockerconfigjson=<path/to/.docker/config.json> \
    --type=kubernetes.io/dockerconfigjson
```

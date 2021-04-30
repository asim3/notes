## Pod
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: whoami
  namespace: default
spec:
  containers:
  - image: asim3/whoami:1.3
    name: whoami

    envFrom:
    - secretRef:
        name: mysecret

    env:
      - name: MY-ENV-REF
        valueFrom:
          fieldRef:
            fieldPath: metadata.name

      - name: MY-ENV
        value: "AAAAAAAAAAAAA bbbbbbbbbbbb"

      - name: MY-ENV-SECRET
        valueFrom:
          secretKeyRef:
            name: mysecret
            key: user_name
```


```yaml
apiVersion: v1
kind: Secret
metadata:
  name: mysecret
  namespace: default
type: Opaque
data:
  USER_NAME: YWRtaW4=
  user_name: case sensitive
  PASSWORD: MWYyZDFlMmU2N2Rm
```

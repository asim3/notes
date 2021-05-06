`kubectl apply -f - <<eof`
```yaml
kubectl delete po ready-test; kubectl apply -f - <<eof

apiVersion: v1
kind: Pod
metadata:
  name: ready-test
spec:
  containers:
  - image: busybox:stable
    name: ready-test
    command:
      - "/bin/sh"
    args:
      - "-c"
      - "sleep 3600"
    livenessProbe:
      failureThreshold: 3
      initialDelaySeconds: 30
      periodSeconds: 10
      successThreshold: 1
      timeoutSeconds: 1
      exec:
        command:
          - /bin/sh
          - -ec
          - echo "111" >> ./liveness.txt

    readinessProbe:
      failureThreshold: 3
      initialDelaySeconds: 15
      periodSeconds: 10
      successThreshold: 1
      timeoutSeconds: 1
      exec:
        command:
          - /bin/sh
          - -ec
          - echo "222" >> ./readiness.txt
```

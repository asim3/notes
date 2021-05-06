`kubectl apply -f - <<eof`
```yaml
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

    # if failed 3 times: restart the server
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
          - echo "liveness \$(date "+%H %M %S")" >> ./test-probe.txt

    # if failed 5 times: only warning
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
          - echo "readines \$(date "+%H %M %S")" >> ./test-probe.txt
```


`kubectl exec -it ready-test -- cat /test-probe.txt`
```txt
readines 01 37 07
readines 01 37 17
liveness 01 37 21
readines 01 37 27
liveness 01 37 31
readines 01 37 37
liveness 01 37 41
readines 01 37 47
liveness 01 37 51
readines 01 37 57
liveness 01 38 01
readines 01 38 07
liveness 01 38 11
readines 01 38 17
liveness 01 38 21
readines 01 38 27
```


## Get
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: ready-test-2
spec:
  containers:
  - image: nginx
    name: ready-test-2

    # if failed 3 times: restart the server
    livenessProbe:
      failureThreshold: 3
      httpGet:
        httpHeaders: []
        path: /install.html
        port: 80
        scheme: HTTP
      initialDelaySeconds: 30
      periodSeconds: 10
      successThreshold: 1
      timeoutSeconds: 5

    # if failed 5 times: only warning
    readinessProbe:
      failureThreshold: 5
      httpGet:
        httpHeaders: []
        path: /login.html
        port: 80
        scheme: HTTP
      initialDelaySeconds: 15
      periodSeconds: 10 # run every 10 seconds
      successThreshold: 1
      timeoutSeconds: 5
```


```bash
kubectl describe pod/ready-test-2 | tail -n 15

kubectl port-forward pod/ready-test-2 8000:80

kubectl exec -it ready-test-2 -- /bin/sh -c "echo '<h1>Hello readiness Probe</h1>' >  \
  /usr/share/nginx/html/index.html"

kubectl exec -it ready-test-2 -- /bin/sh -c "echo '<h1>install</h1>' >  \
  /usr/share/nginx/html/install.html"

kubectl exec -it ready-test-2 -- /bin/sh -c "echo '<h1>login</h1>' >  \
  /usr/share/nginx/html/login.html"

kubectl exec -it ready-test-2 -- /bin/sh -c "rm /usr/share/nginx/html/login.html"

kubectl exec -it ready-test-2 -- /bin/sh -c "rm /usr/share/nginx/html/install.html"
```

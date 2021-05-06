## Job: run once
`kubectl apply -f - <<eof`
```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: my-job
spec:
  template:
    spec:
      containers:
      - name: busybox
        image: busybox
        command: ["echo", "Hello Kubernetes!!!"]
        # command: ["sleep", "60"]
      restartPolicy: Never
      
  # run job 5 times
  completions: 5

  # allow 3 pods to run at the same time
  parallelism: 3

  # number of retries after pod is fail. (Error: backoffLimitExceeded)
  backoffLimit: 2

  # number of seconds to wait if no response from the pod before termination
  # "no response" limit in seconds (SuccessfulDelete)
  activeDeadlineSeconds: 
```


```txt
kubectl logs     pod/my-job-q4gram

kubectl describe job/my-job

kubectl delete   job/my-job
```

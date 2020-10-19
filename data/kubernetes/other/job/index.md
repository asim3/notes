## Job: run once

`nano my-job.yaml`
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
  # runs 2 time.
  # will start the 2nd after the 1st complete.
  completions: 2
  # will start 2 pods at the same time.
  parallelism: 2
  # number of retries after pod is fail. (Error: backoffLimitExceeded)
  backoffLimit: 2
  # number of seconds to wait if no response from the pod before termination.
  activeDeadlineSeconds: 10
```


## deploy
```txt
kubectl apply -f ./my-job.yaml
```

## show logs
```txt
kubectl logs pod/my-job-q4gram
```


## describe 
```txt
kubectl describe job/my-job

kubectl delete   job/my-job
```
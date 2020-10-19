## CronJob: scheduled job

`nano my-cron-job.yaml`
```yaml
apiVersion: batch/v1beta1
kind: CronJob
metadata:
  name: my-cron-job
spec:
  schedule: "* * * * *"
  # allowing jobs to run at the same time "concurrently"
  concurrencyPolicy: Allow # Forbid Replace
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: busybox
            image: busybox
            command: ["echo", "Hello Kubernetes!!!"]
          restartPolicy: Never
```


## deploy
```txt
kubectl apply -f ./my-cron-job.yaml
```


## deploy
```txt
kubectl apply -f ./my-cron-job.yaml
```

## patch
```txt
kubectl patch cronjob my-cron-job -p '{"spec":{"suspend":false}}'
```


## describe 
```txt
kubectl describe cronjob/my-cron-job

kubectl delete   cronjob/my-cron-job
```


## CronJob: scheduled job

`kubectl apply -f - <<eof`
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
            command:
            - /bin/sh
            - -c
            - date; echo Hello from the Kubernetes cluster
          restartPolicy: OnFailure
          # restartPolicy: Never
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

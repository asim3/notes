## update
```txt
kubectl apply -f my-k8s/my-first-deployment.yml
# OR
kubectl edit deploy my-metadata-name
# OR
kubectl set image deploy my-metadata-name nginx-container=nginx:1.9.1
```


## rollback
```txt
# if rollout isn't updating
# look for error in history
kubectl rollout history deployment/my-metadata-name

# undo the last update
kubectl rollout undo deployment/my-metadata-name
kubectl rollout status deployment/my-metadata-name
```

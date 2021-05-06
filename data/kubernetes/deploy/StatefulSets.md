# Stateful Sets
> Manages the ordering and uniqueness of Pods.


```yaml
kubectl apply -f - <<eof

apiVersion: v1
kind: Service
metadata:
  name: my-database-service
spec:
  ports:
  - port: 80
    name: main-data-port
  clusterIP: None
  selector:
    app.kubernetes.io/instance: my-database-789

---

apiVersion: apps/v1
kind: StatefulSet
metadata:
  name: my-database
spec:
  replicas: 3
  serviceName: "my-database-service" # required field
  selector:
    matchLabels:
      app.kubernetes.io/instance: my-database-789
  template:
    metadata:
      labels:
        app.kubernetes.io/instance: my-database-789
    spec:
      terminationGracePeriodSeconds: 10
      containers:
      - name: nginx
        image: k8s.gcr.io/nginx-slim:0.8
        ports:
        - containerPort: 80
          name: main-data-port
        volumeMounts:
        - name: my-volume-name
          mountPath: /usr/share/nginx/html
  volumeClaimTemplates:
  - metadata:
      name: my-volume-name
    spec:
      accessModes: [ "ReadWriteOnce" ]
      storageClassName: "standard"
      resources:
        requests:
          storage: 1Gi

eof
```


```bash
kubectl describe sts my-database

kubectl get sts

kubectl get pvc
# NAME                         STATUS   VOLUME         CAPACITY   ACCESS MODES   STORAGECLASS   AGE
# www-database-my-database-0   Bound    pvc-a156b8db   1Gi        RWO            standard       5m39s
# www-database-my-database-1   Bound    pvc-6fed620e   1Gi        RWO            standard       5m7s
# www-database-my-database-2   Bound    pvc-652f71dd   1Gi        RWO            standard       5m3s
# www-database-my-database-3   Bound    pvc-812254c8   1Gi        RWO            standard       47s
# www-database-my-database-4   Bound    pvc-7043070d   1Gi        RWO            standard       43s
```


## ordering
```bash
kubectl get po
# NAME            READY   STATUS              RESTARTS   AGE
# my-database-0   0/1     ContainerCreating   0          31s


kubectl get po
# NAME            READY   STATUS    RESTARTS   AGE
# my-database-0   1/1     Running   0          33s
# my-database-1   0/1     Pending   0          1s


kubectl get po
# NAME            READY   STATUS              RESTARTS   AGE
# my-database-0   1/1     Running             0          40s
# my-database-1   1/1     Running             0          8s
# my-database-2   0/1     ContainerCreating   0          4s


kubectl get po
# NAME            READY   STATUS    RESTARTS   AGE
# my-database-0   1/1     Running   0          45s
# my-database-1   1/1     Running   0          13s
# my-database-2   1/1     Running   0          9s
```


## scaling
```bash
kubectl scale sts my-database --replicas=5


kubectl get po -w
# NAME            READY   STATUS              RESTARTS   AGE
# my-database-0   0/1     Pending             0          0s
# my-database-0   0/1     Pending             0          0s
# my-database-0   0/1     ContainerCreating   0          0s
# my-database-0   1/1     Running             0          2s
# my-database-1   0/1     Pending             0          0s
# my-database-1   0/1     Pending             0          0s
# my-database-1   0/1     ContainerCreating   0          0s
# my-database-1   1/1     Running             0          2s
# my-database-2   0/1     Pending             0          0s
# my-database-2   0/1     Pending             0          0s
# my-database-2   0/1     ContainerCreating   0          0s
# my-database-2   1/1     Running             0          2s
```

### users management

list all users
```bash
# service account
sudo kubectl get sa

# view user details
kubectl get sa default -o yaml
```



add a new user
```bash

```



view a secret
```bash
sudo kubectl get secrets
```









# !!!
```bash
sudo kubectl expose deploy my-metadata-name

sudo kubectl get svc my-metadata-name

sudo kubectl describe svc my-metadata-name

# ENDPOINTS
sudo kubectl get ep my-metadata-name

sudo kubectl get secrets
```
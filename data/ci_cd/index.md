# CI/CD
Continuous integration and continuous deployment


## Example
```bash
echo -e "<h1> version 1 </h1>" > ./index.html
echo -e "FROM nginx:alpine\nCOPY . /usr/share/nginx/html" > ./Dockerfile

git init
git add .
git commit -m "initial commit"
git remote add origin git@github.com:asim3/ci-cd-example.git
git push origin master
```


## apply the example
[kubernautic](https://kubernautic.com)
```yaml
K_NAME_SPACE=abc-123


cat <<EOF | sed -e "s/__ns__/${K_NAME_SPACE}/g" | kubectl apply -f -

apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deployment-name
  namespace: __ns__
spec:
  selector:
    matchLabels:
      my-labels: my-template-label
  template:
    metadata:
      labels:
        my-labels: my-template-label
    spec:
      containers:
      - name: ci-cd-example
        image: asim3/ci-cd-example:latest
        resources:
          limits: 
            cpu: 500m
            memory: 500Mi
          requests:
            cpu: 200m
            memory: 200Mi
  replicas: 1
EOF
```


## agile methodology
```text
```


## waterfall methodology
```text
```

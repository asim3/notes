## Application
```yaml
cat <<EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-new-app
  namespace: default
spec:
  project: default
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  source:
    repoURL: https://github.com/argoproj/argocd-example-apps.git
    targetRevision: HEAD
    path: guestbook
EOF
```



## automated
```yaml
cat <<EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-new-app
  namespace: default
spec:
  project: default
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  source:
    repoURL: https://github.com/argoproj/argocd-example-apps.git
    targetRevision: HEAD
    path: guestbook
  # AUTO
  syncPolicy:
    automated: {}
```



## HELM
```yaml
cat <<EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  creationTimestamp: "2021-09-04T20:14:33Z"
  generation: 2
  name: my-word-press
  namespace: default
spec:
  project: default
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  source:
    repoURL: https://charts.bitnami.com/bitnami/
    chart: wordpress
    targetRevision: 12.1.7
    helm:
      parameters:
      - name: allowEmptyPassword
        value: "false"
      - name: ingress.enabled
        value: "true"
      - name: ingress.hostname
        value: my-new-wordpress.asim3.com
      values: |
        my:
          name:
            is: asim
EOF
```

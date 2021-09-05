## Application
```bash
kubectl get app,appproj -A
```



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
  namespace: argocd
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
EOF
```



## HELM
```yaml
cat <<EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-word-press-1
  namespace: argocd
spec:
  project: default
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  syncPolicy:
    automated: {}
  source:
    chart: wordpress
    helm:
      parameters:
      - name: service.type
        value: NodePort
    repoURL: https://charts.bitnami.com/bitnami/
    targetRevision: 12.1.7
EOF
```



## HELM
```yaml
cat <<EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: my-word-press-2
  namespace: argocd
spec:
  project: default
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  syncPolicy:
    automated: {}
  source:
    repoURL: https://charts.bitnami.com/bitnami/
    chart: wordpress
    targetRevision: 12.1.7
    helm:
      parameters:
      - name: service.type
        value: NodePort
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

# k8s-manifest


## Namespace
```bash
kubectl create ns default
kubectl create ns argocd
kubectl create ns ingress
kubectl create ns cert-manager
kubectl create ns projects-father-1217
kubectl create ns projects-notes
```


## install ArgoCD
```bash
kubectl apply -n argocd -f https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/install.yaml


## cli
curl -SL -o /tmp/argocd_tmp https://github.com/argoproj/argo-cd/releases/latest/download/argocd-linux-amd64 \
  && sudo mv /tmp/argocd_tmp /usr/local/bin/argocd \
  && sudo chmod +x /usr/local/bin/argocd


# dashboard
kubectl config set-context --current --namespace=argocd
argocd version
argocd admin dashboard
```


## tree
```txt
k8s/
├── applications
│   ├── cert-manager.yml
│   ├── django-barqalramay.yml
│   ├── django-dhil-solution.yml
│   ├── ingress-nginx.yml
│   ├── html-father-1217.yml
│   └── html-notes.yml
└── base
    ├── app-of-apps.yml
    ├── cluster-issuer-prod.yml
    └── cluster-issuer-staging.yml
```


## cert manager
```yml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: cert-manager
  namespace: argocd
  labels:
    project.type: network
spec:
  project: default
  destination:
    server: https://kubernetes.default.svc
    namespace: cert-manager
  source:
    repoURL: https://charts.jetstack.io
    chart: cert-manager
    targetRevision: v1.8.2
    helm:
      parameters:
      - name: installCRDs
        value: 'true'
  syncPolicy:
    automated:
      selfHeal: true
      prune: true
```


## ingress nginx
```yml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: ingress-nginx
  namespace: argocd
  labels:
    project.type: network
spec:
  project: default
  destination:
    server: https://kubernetes.default.svc
    namespace: ingress
  source:
    repoURL: https://kubernetes.github.io/ingress-nginx
    chart: ingress-nginx
    targetRevision: "4.0.17"
  syncPolicy:
    automated:
      selfHeal: true
      prune: true
```


## html notes
```yml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  # a-z [.] [-] 0-9
  name: notes
  namespace: argocd
  labels:
    project.type: nginx
spec:
  project: default
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  source:
    repoURL: https://github.com/asim3/notes.git
    targetRevision: main
    path: manifest
  syncPolicy:
    automated:
      selfHeal: true
      prune: true
```


## app of apps
```yml
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  # a-z [.] [-] 0-9
  name: app-of-apps
  namespace: argocd
  labels:
    project.type: argocd
spec:
  project: default
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  source:
    repoURL: https://github.com/asim3/k8s-manifest.git
    targetRevision: main
    path: k8s/applications
    directory:
      recurse: true
      jsonnet: {}
  syncPolicy:
    automated:
      selfHeal: true
      prune: false
```


## cluster issuer prod
```yml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-prod
spec:
  acme:
    email: asimwebapps@gmail.com
    server: https://acme-v02.api.letsencrypt.org/directory

    privateKeySecretRef:
      name: letsencrypt-prod-private-key

    solvers:
      - http01:
          ingress:
            class: nginx
```


## cluster issuer staging
```yml
apiVersion: cert-manager.io/v1
kind: ClusterIssuer
metadata:
  name: letsencrypt-staging
spec:
  acme:
    email: asimwebapps@gmail.com
    server: https://acme-staging-v02.api.letsencrypt.org/directory

    privateKeySecretRef:
      name: letsencrypt-staging-private-key

    solvers:
      - http01:
          ingress:
            class: nginx
```

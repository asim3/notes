```bash
cat <<EOF | kubectl apply -f -
apiVersion: argoproj.io/v1alpha1
kind: Application
metadata:
  name: notes
  namespace: argocd
spec:
  project: notes
  destination:
    server: https://kubernetes.default.svc
    namespace: default
  source:
    repoURL: https://github.com/asim3/notes.git
    targetRevision: production
    path: manifest
  syncPolicy:
    automated:
      selfHeal: true
      prune: true
EOF
```

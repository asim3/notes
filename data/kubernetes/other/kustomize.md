## base
`nano ./my-base.yaml`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-deploy-name
spec:
  replicas: 3
  selector:
    matchLabels:
      my-labels: my-template-label
  template:
    metadata:
      labels:
        my-labels: my-template-label
    spec:
      containers:
      - name: my-container
        image: nginx
```


## kustomize
`nano ./kustomization.yaml`
```yaml
resources:
  - my-base.yaml

namePrefix: ppppppppppppppppppp-
nameSuffix: "-ssssssssssssssssss"

namespace: my-kustom-namespace

commonLabels:
  my-kustom: my-kustom-label

commonAnnotations:
  my-kustom: my-kustom-annotation

images:
  - name: nginx
    newName: nnnnnnnnnnnnnnnnnnnnnnnn
    newTag: "1111111111111111111111"
```



`kubectl kustomize .`
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  annotations:
    my-kustom: my-kustom-annotation
  labels:
    my-kustom: my-kustom-label
  name: ppppppppppppppppppp-my-deploy-name-ssssssssssssssssss
  namespace: my-kustom-namespace
spec:
  replicas: 3
  selector:
    matchLabels:
      my-kustom: my-kustom-label
      my-labels: my-template-label
  template:
    metadata:
      annotations:
        my-kustom: my-kustom-annotation
      labels:
        my-kustom: my-kustom-label
        my-labels: my-template-label
    spec:
      containers:
      - image: nnnnnnnnnnnnnnnnnnnnnnnn:1111111111111111111111
        name: my-container
```

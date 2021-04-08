## Custom resources
[docs](https://kubernetes.io/docs/tasks/extend-kubernetes/custom-resources/custom-resource-definitions)
> Custom resources is an `api extension`


A custom resource is an extension of the Kubernetes API that is 
not necessarily available in a default Kubernetes installation. 
It represents a customization of a particular Kubernetes installation. 
However, many core Kubernetes functions are now built using custom 
resources, making Kubernetes more modular.


## add (CRD)
`kubectl apply -f - <<eof`
```yaml
apiVersion: apiextensions.k8s.io/v1
kind: CustomResourceDefinition
metadata:
  # name must match the spec fields below, and be in the form: <plural>.<group>
  name: mynewobjs.asim.example.com
spec:
  # either Namespaced or Cluster
  scope: Namespaced
  # group name to use for REST API: /apis/<group>/<version>
  group: asim.example.com
  names:
    # plural name to be used in the URL: /apis/<group>/<version>/<plural>
    plural: mynewobjs
    # singular name to be used as an alias on the CLI and for display
    singular: mynewobj
    # kind is normally the CamelCased singular type. Your resource manifests use this.
    kind: MyNewObj
    # shortNames allow shorter string to match your resource on the CLI
    shortNames:
    - ct
  # list of versions supported by this CustomResourceDefinition
  versions:
    - name: v1
      # Each version can be enabled/disabled by Served flag.
      served: true
      # One and only one version must be marked as the storage version.
      storage: true
      schema:
        openAPIV3Schema:
          type: object
          properties:
            spec:
              type: object
              properties:
                mySpec:
                  type: string
                image:
                  type: string
                replicas:
                  type: integer
```


## add custom objects
`kubectl apply -f - <<eof`
```yaml
apiVersion: "asim.example.com/v1"
kind: MyNewObj
metadata:
  name: my-new-object
spec:
  mySpec: "* * * * */5"
  image: my-awesome-image
```

## list
```bash
kubectl get mynewobj
```

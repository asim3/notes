# Security
[docker bench](https://github.com/docker/docker-bench-security)

[cilium](https://github.com/cilium/cilium)


## Network Policy
```yaml
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: test-network-policy
spec:
  podSelector:
    matchLabels:
      my-role: my-database
  ingress:
  - from:
    - podSelector:
        matchLabels:
          role: frontend-can-connect-to-my-database
```


## `etcd` encryption
`kubectl apply -f - <<eof`
```yaml
apiVersion: apiserver.config.k8s.io/v1
kind: EncryptionConfiguration
resources:
  - resources:
    - secrets
    providers:
    - aescbc:
        keys:
        - name: key1
          secret: $(head -c 32 /dev/urandom | base64)
    - identity: {}
```


## run as non-root
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: security-context-demo
spec:
  securityContext:
    runAsUser: 1000
    runAsGroup: 3000
    fsGroup: 2000
    readOnlyRootFilesystem: true
    allowPrivilegeEscalation: false
```


## Sandboxed Pods
```yaml

```


## gVisor
```yaml

```


## seccomp
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: security-context-demo
  annotations:
    seccomp.security.alpha.kubernetes.io/pod: runtime/default
```


## apparmor
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: security-context-demo
  annotations:
    apparmor.security.beta.kubernetes.io/hello:  'runtime/default'
spec:
  containers:
  - name: hello
  # ...
```


## SELinux
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: security-context-demo
spec:
  securityContext:
    seLinuxOptions:
      level: "s0:c123,c456"
  containers:
  - name: hello
  # ...
```


## open policya gent
[Kubernetes Admission Control](https://www.openpolicyagent.org/docs/v0.12.2/kubernetes-admission-control)


## istio
> like k8s `NetworkPolicy`

[docs](https://istio.io/latest/docs/concepts/what-is-istio)

istio: encrypt traffic between pods


## check your k8s
[docs](https://github.com/aquasecurity/kube-bench)

kube-bench is a Go application that checks whether Kubernetes is deployed securely.

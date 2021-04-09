## apply ingress
`kubectl apply -f - <<eof`
```yaml
apiVersion: v1
kind: Pod
metadata:
  name: apppppp-name
  namespace: default
  labels:
    my: test-ingress
spec:
  containers:
  - image: containous/whoami
    name: apppppp-name

---

apiVersion: v1
kind: Service
metadata:
  name: apppppp-name
  namespace: default
  labels:
    my: test-ingress
spec:
  type: ClusterIP
  selector:
    my: test-ingress
  ports:
  - port: 80
    protocol: TCP
    targetPort: 80

---

apiVersion: v1
kind: Secret
metadata:
  name: my-test-secret-tls
  namespace: default
data:
  tls.crt: $(cat /tmp/my_https.crt | base64 -w0)
  tls.key: $(cat /tmp/my_private.key | base64 -w0)
type: kubernetes.io/tls

---

apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  # name: must be a valid DNS subdomain name
  name: my-ingress-resource
  annotations:
    nginx.ingress.kubernetes.io/rewrite-target: /
spec:
  tls:
  # hosts: need to explicitly match spec.rules.host
  - hosts:
      - whoami.example.com
    secretName: my-test-secret-tls
  rules:
  - host: whoami.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: apppppp-name
            port: 
              number: 80
```
> traffic to the `Service` and its `Pods` is in plaintext


```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: my-ingress-resource
  annotations:
    kubernetes.io/ingress.class: nginx
    cert-manager.io/cluster-issuer: letsencrypt-prod
spec:
  tls:
  - hosts:
    - whoami.example.com
    - blue.whoami.example.com
    - green.whoami.example.com
    secretName: my-ingress-resource-tls
  rules:
  # ...
```

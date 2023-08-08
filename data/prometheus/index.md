[docs](https://github.com/prometheus-operator/kube-prometheus)
[prometheus](https://github.com/prometheus-operator/kube-prometheus)


## install
`docker stack deploy -c prometheus.yml prometheus`
```yaml
version: "3.8"
services:
  app:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    environment:
      TZ: Asia/Riyadh
```

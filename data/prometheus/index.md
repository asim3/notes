[docs](https://prometheus.io/docs/prometheus/latest/getting_started/)


## install
`docker stack deploy -c prometheus.yml prometheus`
```yaml
version: "3.8"
services:
  app:
    image: prom/prometheus:latest
    environment:
      TZ: Asia/Riyadh
    ports:
      - "9090:9090"

  node_exporter:
    image: quay.io/prometheus/node-exporter:latest
    command: "--path.rootfs=/host"
    environment:
      TZ: Asia/Riyadh
    volumes:
      - "/:/host:ro,rslave"
```

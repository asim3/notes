[docs](https://prometheus.io/docs/prometheus/latest/getting_started/)


## install
`docker stack deploy -c prometheus.yml prometheus`
```yaml
version: "3.8"
services:
  app:
    image: prom/prometheus:latest
    # command: --config.file="prometheus.yml" --storage.tsdb.path="data/"
    environment:
      TZ: Asia/Riyadh
    volumes:
      - "./config/prometheus.yml:/etc/prometheus/prometheus.yml"
    networks:
      - prometheus
    ports:
      - "9090:9090"
networks:
  prometheus:
```


## Metrics
`http://192.168.0.1:9090/metrics`


## Config
`nano ./config/prometheus.yml`
```yaml
global:
  scrape_interval: 5s # Default is every 1 minute.

scrape_configs:
  - job_name: "my-target_prometheus"
    static_configs:
      - targets:
        - localhost:9090
  - job_name: "my-target_job.2"
    metrics_path: /metrics
    scheme: http
    static_configs:
      - targets:
        - localhost:9090
```

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
    volumes:
      # - "./config/prometheus.yml:/etc/prometheus/prometheus.yml"
      - "./config/:/etc/prometheus/"
    networks:
      - prometheus
    ports:
      - "9090:9090"
networks:
  prometheus:

  # node_exporter:
  #   image: quay.io/prometheus/node-exporter:latest
  #   command: "--path.rootfs=/host"
  #   environment:
  #     TZ: Asia/Riyadh
  #   volumes:
  #     - "/:/host:ro,rslave"
```


## Config
`nano ./config/prometheus.yml`
```yaml
global:
  scrape_interval: 15s # Set the scrape interval to every 15 seconds. Default is every 1 minute.
  evaluation_interval: 15s # Evaluate rules every 15 seconds. The default is every 1 minute.
  # scrape_timeout is set to the global default (10s).

# Alertmanager configuration
alerting:
  alertmanagers:
    - static_configs:
        - targets:
          # - alertmanager:9093

# Load rules once and periodically evaluate them according to the global 'evaluation_interval'.
rule_files:
  # - "first_rules.yml"
  # - "second_rules.yml"

# A scrape configuration containing exactly one endpoint to scrape:
# Here it's Prometheus itself.
scrape_configs:
  # The job name is added as a label `job=<job_name>` to any timeseries scraped from this config.
  - job_name: "prometheus"

    # metrics_path defaults to '/metrics'
    # scheme defaults to 'http'.

    static_configs:
      - targets: ["localhost:9090"]
```

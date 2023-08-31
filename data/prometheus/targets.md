[demo targets](https://demo.promlabs.com/targets)


## Config
`nano ./config/prometheus.yml`
```yaml
global:
  scrape_interval: 5s # Default is every 1 minute.

scrape_configs:
  - job_name: "my-target_job"
    metrics_path: /metrics
    scheme: http
    static_configs:
      - targets:
        - localhost:9090

  # blackbox
  - job_name: 'blackbox'
    metrics_path: /probe
    params:
      module:
        - my_http_2xx_example
    static_configs:
      - targets:
        - http://prometheus.io
        - https://prometheus.io
        - http://example.com:8080
        - http://asim3.github.io
        - https://asim3.github.io
        - http://asim3.github.io/notes
        - https://asim3.github.io/notes
    relabel_configs:
      - source_labels: [__address__]
        target_label: __param_target
      - source_labels: [__param_target]
        target_label: instance
      - target_label: __address__
        replacement: 192.168.197.131:9200
```


## Node Exporter
[download](https://github.com/prometheus/node_exporter/releases)
```bash
cd /tmp
curl -Lo node_exporter.tar.gz https://github.com/prometheus/node_exporter/releases/download/v1.6.1/node_exporter-1.6.1.linux-amd64.tar.gz
tar xvfz node_exporter.tar.gz

/tmp/node_exporter-1.6.1.linux-amd64/node_exporter --help

# run Node Exporter
/tmp/node_exporter-1.6.1.linux-amd64/node_exporter --web.listen-address=:9100
```


## website monitoring
[download](https://github.com/prometheus/blackbox_exporter/releases)
```bash
cd /tmp
curl -Lo blackbox_exporter.tar.gz https://github.com/prometheus/blackbox_exporter/releases/download/v0.24.0/blackbox_exporter-0.24.0.linux-amd64.tar.gz
tar xvfz blackbox_exporter.tar.gz

/tmp/blackbox_exporter-0.24.0.linux-amd64/blackbox_exporter --help

# run Node Exporter
/tmp/blackbox_exporter-0.24.0.linux-amd64/blackbox_exporter --config.file="/tmp/my_blackbox_conf.yml" --web.listen-address=:9200
```

## blackbox config
`nano /tmp/my_blackbox_conf.yml`
```yml
modules:
  my_http_2xx_example:
    prober: http
    timeout: 5s
    http:
      valid_http_versions: ["HTTP/1.1", "HTTP/2.0"]
      valid_status_codes: []
      method: GET
```











## service discovery


## static configuration


[demo targets](https://demo.promlabs.com/targets)


## Node Exporter
[download](https://github.com/prometheus/node_exporter/releases)
```bash
cd /tmp
curl -Lo node_exporter.linux-amd64.tar.gz https://github.com/prometheus/node_exporter/releases/download/v1.6.1/node_exporter-1.6.1.linux-amd64.tar.gz
tar xvfz node_exporter.linux-amd64.tar.gz

/tmp/node_exporter-1.6.1.linux-amd64/node_exporter --help

# run Node Exporter
/tmp/node_exporter-1.6.1.linux-amd64/node_exporter --web.listen-address=:9100
```
















## service discovery


## static configuration


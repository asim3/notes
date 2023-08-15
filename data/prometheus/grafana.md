## Data Sources
- Home > Connections    > Data sources
- Home > Administration > Data sources


## Dashboards Query
Home > Dashboards > New dashboard
- histogram_quantile(0.95, sum by(le, path, method) (rate(demo_api_request_duration_seconds_bucket[$__rate_interval])))


## Dashboards
`Dashboards` > `New` > `Import` > `Import via grafana.com`
- [Full Node Exporter](https://grafana.com/grafana/dashboards/1860-node-exporter-full/)

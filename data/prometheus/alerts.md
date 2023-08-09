## Integrated Alerting
```yaml
alert: Many500Errors
expr: |
  (
      sum by(path) (rate(http_requests_total{status="500"}[5m]))
    /
      sum by(path) (rate(http_requests_total[5m]))
  ) * 100 > 5
for: 5m
labels:
  severity: critical
annotations:
  summary: "Many 500 errors for path {{$labels.path}} ({{$value}}%)"
```

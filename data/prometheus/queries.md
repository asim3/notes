## Query Language
[PromQL Cheat Sheet](https://promlabs.com/promql-cheat-sheet)


## Metric Types
- Gauge
  - `time() - process_start_time_seconds`
- Counter
  - `rate(my_counter[2h])`
  - `irate(my_counter[2h])`
  - `increase(my_counter[2h])`
- Summary
  - `http_request_duration_seconds{quantile="0.5"}`
  - `http_request_duration_seconds{quantile="0.95"}`
  - `http_request_duration_seconds{quantile="0.99"}`
- Histogram
  - `http_request_duration_seconds_bucket{le="0.05"}`
  - `http_request_duration_seconds_bucket{le="0.5"}`
  - `http_request_duration_seconds_bucket{le="2.5"}`
  - `histogram_quantile(0.9, rate(http_request_duration_seconds_bucket[5m]))`


#### Data (Exposition)
`https://demo.promlabs.com/metrics`
```
http_requests_total{path="/foo",method="GET",status="200"}  30123
http_requests_total{path="/foo",method="GET",status="517"}    165
http_requests_total{path="/foo",method="POST",status="200"}    23
http_requests_total{path="/foo",method="POST",status="500"}     3
```


```promql
http_requests_total{status="500"}

rate(http_requests_total{status="500"}[5m])

sum by(path) (rate(http_requests_total{status="500"}[5m]))
```


Returns the error percentage for each path with an error rate >5%
```
  sum by(path) (rate(http_requests_total{status="500"}[5m]))
/
  sum by(path) (rate(http_requests_total[5m]))
* 100
> 5
```

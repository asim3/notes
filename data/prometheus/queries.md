## Query Language
[PromQL Cheat Sheet](https://promlabs.com/promql-cheat-sheet)


#### Data
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

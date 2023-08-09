## Data Model

`https://demo.promlabs.com/metrics`

```
# HELP go_gc_duration_seconds A summary of the pause duration of garbage collection cycles.
# TYPE go_gc_duration_seconds summary
go_gc_duration_seconds{quantile="0"} 9.1978e-05
go_gc_duration_seconds{quantile="0.25"} 0.000131431
go_gc_duration_seconds{quantile="0.5"} 0.000164536
go_gc_duration_seconds{quantile="0.75"} 0.000206608
go_gc_duration_seconds{quantile="1"} 0.003010317
go_gc_duration_seconds_sum 13.29414753
go_gc_duration_seconds_count 60811
# HELP go_goroutines Number of goroutines that currently exist.
# TYPE go_goroutines gauge
go_goroutines 49
# HELP go_info Information about the Go environment.
# TYPE go_info gauge
go_info{version="go1.20.4"} 1
# HELP go_memstats_alloc_bytes Number of bytes allocated and still in use.
# TYPE go_memstats_alloc_bytes gauge
go_memstats_alloc_bytes 6.5532408e+07
# HELP go_memstats_alloc_bytes_total Total number of bytes allocated, even if freed.
# TYPE go_memstats_alloc_bytes_total counter
go_memstats_alloc_bytes_total 1.568094750096e+12
# HELP go_memstats_buck_hash_sys_bytes Number of bytes used by the profiling bucket hash table.
# TYPE go_memstats_buck_hash_sys_bytes gauge
go_memstats_buck_hash_sys_bytes 7.776389e+06
# HELP go_memstats_frees_total Total number of frees.
# TYPE go_memstats_frees_total counter
go_memstats_frees_total 1.037794704e+10
# HELP go_memstats_gc_sys_bytes Number of bytes used for garbage collection system metadata.
# TYPE go_memstats_gc_sys_bytes gauge
go_memstats_gc_sys_bytes 6.8309984e+07
# HELP go_memstats_heap_alloc_bytes Number of heap bytes allocated and still in use.
# TYPE go_memstats_heap_alloc_bytes gauge
go_memstats_heap_alloc_bytes 6.5532408e+07
# HELP go_memstats_heap_idle_bytes Number of heap bytes waiting to be used.
# TYPE go_memstats_heap_idle_bytes gauge
go_memstats_heap_idle_bytes 2.556346368e+09
# HELP go_memstats_heap_inuse_bytes Number of heap bytes that are in use.
# TYPE go_memstats_heap_inuse_bytes gauge
go_memstats_heap_inuse_bytes 8.0494592e+07
# HELP go_memstats_heap_objects Number of allocated objects.
# TYPE go_memstats_heap_objects gauge
go_memstats_heap_objects 283944
# HELP go_memstats_heap_released_bytes Number of heap bytes released to OS.
# TYPE go_memstats_heap_released_bytes gauge
go_memstats_heap_released_bytes 2.544795648e+09
# HELP go_memstats_heap_sys_bytes Number of heap bytes obtained from system.
# TYPE go_memstats_heap_sys_bytes gauge
go_memstats_heap_sys_bytes 2.63684096e+09
# HELP go_memstats_last_gc_time_seconds Number of seconds since 1970 of last garbage collection.
# TYPE go_memstats_last_gc_time_seconds gauge
go_memstats_last_gc_time_seconds 1.691568902627848e+09
# HELP go_memstats_lookups_total Total number of pointer lookups.
# TYPE go_memstats_lookups_total counter
go_memstats_lookups_total 0
# HELP go_memstats_mallocs_total Total number of mallocs.
# TYPE go_memstats_mallocs_total counter
go_memstats_mallocs_total 1.0378230984e+10
# HELP go_memstats_mcache_inuse_bytes Number of bytes in use by mcache structures.
# TYPE go_memstats_mcache_inuse_bytes gauge
go_memstats_mcache_inuse_bytes 2400
# HELP go_memstats_mcache_sys_bytes Number of bytes used for mcache structures obtained from system.
# TYPE go_memstats_mcache_sys_bytes gauge
go_memstats_mcache_sys_bytes 15600
# HELP go_memstats_mspan_inuse_bytes Number of bytes in use by mspan structures.
# TYPE go_memstats_mspan_inuse_bytes gauge
go_memstats_mspan_inuse_bytes 951040
# HELP go_memstats_mspan_sys_bytes Number of bytes used for mspan structures obtained from system.
# TYPE go_memstats_mspan_sys_bytes gauge
go_memstats_mspan_sys_bytes 1.676064e+07
# HELP go_memstats_next_gc_bytes Number of heap bytes when next garbage collection will take place.
# TYPE go_memstats_next_gc_bytes gauge
go_memstats_next_gc_bytes 1.11474904e+08
# HELP go_memstats_other_sys_bytes Number of bytes used for other system allocations.
# TYPE go_memstats_other_sys_bytes gauge
go_memstats_other_sys_bytes 2.248963e+06
# HELP go_memstats_stack_inuse_bytes Number of bytes in use by the stack allocator.
# TYPE go_memstats_stack_inuse_bytes gauge
go_memstats_stack_inuse_bytes 1.376256e+06
# HELP go_memstats_stack_sys_bytes Number of bytes obtained from system for stack allocator.
# TYPE go_memstats_stack_sys_bytes gauge
go_memstats_stack_sys_bytes 1.376256e+06
# HELP go_memstats_sys_bytes Number of bytes obtained from system.
# TYPE go_memstats_sys_bytes gauge
go_memstats_sys_bytes 2.733328792e+09
# HELP go_threads Number of OS threads created.
# TYPE go_threads gauge
go_threads 10
# HELP net_conntrack_dialer_conn_attempted_total Total number of connections attempted by the given dialer a given name.
# TYPE net_conntrack_dialer_conn_attempted_total counter
net_conntrack_dialer_conn_attempted_total{dialer_name="cadvisor"} 1
net_conntrack_dialer_conn_attempted_total{dialer_name="default"} 0
net_conntrack_dialer_conn_attempted_total{dialer_name="demo"} 3
net_conntrack_dialer_conn_attempted_total{dialer_name="docker-hub-exporter"} 6
net_conntrack_dialer_conn_attempted_total{dialer_name="node"} 1
net_conntrack_dialer_conn_attempted_total{dialer_name="prometheus"} 1
# HELP net_conntrack_dialer_conn_closed_total Total number of connections closed which originated from the dialer of a given name.
# TYPE net_conntrack_dialer_conn_closed_total counter
net_conntrack_dialer_conn_closed_total{dialer_name="cadvisor"} 0
net_conntrack_dialer_conn_closed_total{dialer_name="default"} 0
net_conntrack_dialer_conn_closed_total{dialer_name="demo"} 0
net_conntrack_dialer_conn_closed_total{dialer_name="docker-hub-exporter"} 5
net_conntrack_dialer_conn_closed_total{dialer_name="node"} 0
net_conntrack_dialer_conn_closed_total{dialer_name="prometheus"} 0
# HELP net_conntrack_dialer_conn_established_total Total number of connections successfully established by the given dialer a given name.
# TYPE net_conntrack_dialer_conn_established_total counter
net_conntrack_dialer_conn_established_total{dialer_name="cadvisor"} 1
net_conntrack_dialer_conn_established_total{dialer_name="default"} 0
net_conntrack_dialer_conn_established_total{dialer_name="demo"} 3
net_conntrack_dialer_conn_established_total{dialer_name="docker-hub-exporter"} 6
net_conntrack_dialer_conn_established_total{dialer_name="node"} 1
net_conntrack_dialer_conn_established_total{dialer_name="prometheus"} 1
# HELP net_conntrack_dialer_conn_failed_total Total number of connections failed to dial by the dialer a given name.
# TYPE net_conntrack_dialer_conn_failed_total counter
net_conntrack_dialer_conn_failed_total{dialer_name="cadvisor",reason="refused"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="cadvisor",reason="resolution"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="cadvisor",reason="timeout"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="cadvisor",reason="unknown"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="default",reason="refused"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="default",reason="resolution"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="default",reason="timeout"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="default",reason="unknown"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="demo",reason="refused"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="demo",reason="resolution"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="demo",reason="timeout"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="demo",reason="unknown"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="docker-hub-exporter",reason="refused"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="docker-hub-exporter",reason="resolution"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="docker-hub-exporter",reason="timeout"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="docker-hub-exporter",reason="unknown"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="node",reason="refused"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="node",reason="resolution"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="node",reason="timeout"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="node",reason="unknown"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="prometheus",reason="refused"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="prometheus",reason="resolution"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="prometheus",reason="timeout"} 0
net_conntrack_dialer_conn_failed_total{dialer_name="prometheus",reason="unknown"} 0
# HELP net_conntrack_listener_conn_accepted_total Total number of connections opened to the listener of a given name.
# TYPE net_conntrack_listener_conn_accepted_total counter
net_conntrack_listener_conn_accepted_total{listener_name="http"} 28279
# HELP net_conntrack_listener_conn_closed_total Total number of connections closed that were made to the listener of a given name.
# TYPE net_conntrack_listener_conn_closed_total counter
net_conntrack_listener_conn_closed_total{listener_name="http"} 28396
# HELP process_cpu_seconds_total Total user and system CPU time spent in seconds.
# TYPE process_cpu_seconds_total counter
process_cpu_seconds_total 39354.91
# HELP process_max_fds Maximum number of open file descriptors.
# TYPE process_max_fds gauge
process_max_fds 1.048576e+06
# HELP process_open_fds Number of open file descriptors.
# TYPE process_open_fds gauge
process_open_fds 114
# HELP process_resident_memory_bytes Resident memory size in bytes.
# TYPE process_resident_memory_bytes gauge
process_resident_memory_bytes 1.392439296e+09
# HELP process_start_time_seconds Start time of the process since unix epoch in seconds.
# TYPE process_start_time_seconds gauge
process_start_time_seconds 1.68475877697e+09
# HELP process_virtual_memory_bytes Virtual memory size in bytes.
# TYPE process_virtual_memory_bytes gauge
process_virtual_memory_bytes 3.2245751808e+10
# HELP process_virtual_memory_max_bytes Maximum amount of virtual memory available in bytes.
# TYPE process_virtual_memory_max_bytes gauge
process_virtual_memory_max_bytes 1.8446744073709552e+19
# HELP prometheus_api_remote_read_queries The current number of remote read queries being executed or waiting.
# TYPE prometheus_api_remote_read_queries gauge
prometheus_api_remote_read_queries 0
# HELP prometheus_build_info A metric with a constant '1' value labeled by version, revision, branch, goversion from which prometheus was built, and the goos and goarch for the build.
# TYPE prometheus_build_info gauge
prometheus_build_info{branch="HEAD",goarch="amd64",goos="linux",goversion="go1.20.4",revision="1ac5131f698ebc60f13fe2727f89b115a41f6558",tags="netgo,builtinassets,stringlabels",version="2.44.0"} 1
# HELP prometheus_config_last_reload_success_timestamp_seconds Timestamp of the last successful configuration reload.
# TYPE prometheus_config_last_reload_success_timestamp_seconds gauge
prometheus_config_last_reload_success_timestamp_seconds 1.6847587793502548e+09
# HELP prometheus_config_last_reload_successful Whether the last configuration reload attempt was successful.
# TYPE prometheus_config_last_reload_successful gauge
prometheus_config_last_reload_successful 1
# HELP prometheus_engine_queries The current number of queries being executed or waiting.
# TYPE prometheus_engine_queries gauge
prometheus_engine_queries 0
# HELP prometheus_engine_queries_concurrent_max The max number of concurrent queries.
# TYPE prometheus_engine_queries_concurrent_max gauge
prometheus_engine_queries_concurrent_max 20
# HELP prometheus_engine_query_duration_seconds Query timings
# TYPE prometheus_engine_query_duration_seconds summary
prometheus_engine_query_duration_seconds{slice="inner_eval",quantile="0.5"} 0.000770461
prometheus_engine_query_duration_seconds{slice="inner_eval",quantile="0.9"} 0.006979829
prometheus_engine_query_duration_seconds{slice="inner_eval",quantile="0.99"} 0.075823022
prometheus_engine_query_duration_seconds_sum{slice="inner_eval"} 7891.549409972909
prometheus_engine_query_duration_seconds_count{slice="inner_eval"} 468144
prometheus_engine_query_duration_seconds{slice="prepare_time",quantile="0.5"} 0.000125252
prometheus_engine_query_duration_seconds{slice="prepare_time",quantile="0.9"} 0.000257447
prometheus_engine_query_duration_seconds{slice="prepare_time",quantile="0.99"} 0.001914396
prometheus_engine_query_duration_seconds_sum{slice="prepare_time"} 175.22352504599542
prometheus_engine_query_duration_seconds_count{slice="prepare_time"} 468144
prometheus_engine_query_duration_seconds{slice="queue_time",quantile="0.5"} 4.5995e-05
prometheus_engine_query_duration_seconds{slice="queue_time",quantile="0.9"} 6.6839e-05
prometheus_engine_query_duration_seconds{slice="queue_time",quantile="0.99"} 0.000140059
prometheus_engine_query_duration_seconds_sum{slice="queue_time"} 22.561317736998834
prometheus_engine_query_duration_seconds_count{slice="queue_time"} 468162
prometheus_engine_query_duration_seconds{slice="result_sort",quantile="0.5"} 1.385e-06
prometheus_engine_query_duration_seconds{slice="result_sort",quantile="0.9"} 1.795e-06
prometheus_engine_query_duration_seconds{slice="result_sort",quantile="0.99"} 3.102e-06
prometheus_engine_query_duration_seconds_sum{slice="result_sort"} 0.6226511569999958
prometheus_engine_query_duration_seconds_count{slice="result_sort"} 254055
# HELP prometheus_engine_query_log_enabled State of the query log.
# TYPE prometheus_engine_query_log_enabled gauge
prometheus_engine_query_log_enabled 0
# HELP prometheus_engine_query_log_failures_total The number of query log failures.
# TYPE prometheus_engine_query_log_failures_total counter
prometheus_engine_query_log_failures_total 0
# HELP prometheus_engine_query_samples_total The total number of samples loaded by all queries.
# TYPE prometheus_engine_query_samples_total counter
prometheus_engine_query_samples_total 1.88787968618e+11
# HELP prometheus_http_request_duration_seconds Histogram of latencies for HTTP requests.
# TYPE prometheus_http_request_duration_seconds histogram
prometheus_http_request_duration_seconds_bucket{handler="/",le="0.1"} 1715
prometheus_http_request_duration_seconds_bucket{handler="/",le="0.2"} 1715
prometheus_http_request_duration_seconds_bucket{handler="/",le="0.4"} 1715
prometheus_http_request_duration_seconds_bucket{handler="/",le="1"} 1715
prometheus_http_request_duration_seconds_bucket{handler="/",le="3"} 1715
prometheus_http_request_duration_seconds_bucket{handler="/",le="8"} 1715
prometheus_http_request_duration_seconds_bucket{handler="/",le="20"} 1715
prometheus_http_request_duration_seconds_bucket{handler="/",le="60"} 1715
prometheus_http_request_duration_seconds_bucket{handler="/",le="120"} 1715
prometheus_http_request_duration_seconds_bucket{handler="/",le="+Inf"} 1715
prometheus_http_request_duration_seconds_sum{handler="/"} 0.054950245000000016
prometheus_http_request_duration_seconds_count{handler="/"} 1715
prometheus_http_request_duration_seconds_bucket{handler="/-/ready",le="0.1"} 115749
prometheus_http_request_duration_seconds_bucket{handler="/-/ready",le="0.2"} 115749
prometheus_http_request_duration_seconds_bucket{handler="/-/ready",le="0.4"} 115749
prometheus_http_request_duration_seconds_bucket{handler="/-/ready",le="1"} 115749
prometheus_http_request_duration_seconds_bucket{handler="/-/ready",le="3"} 115749
prometheus_http_request_duration_seconds_bucket{handler="/-/ready",le="8"} 115749
prometheus_http_request_duration_seconds_bucket{handler="/-/ready",le="20"} 115749
prometheus_http_request_duration_seconds_bucket{handler="/-/ready",le="60"} 115749
prometheus_http_request_duration_seconds_bucket{handler="/-/ready",le="120"} 115749
prometheus_http_request_duration_seconds_bucket{handler="/-/ready",le="+Inf"} 115749
prometheus_http_request_duration_seconds_sum{handler="/-/ready"} 2.451806511999968
prometheus_http_request_duration_seconds_count{handler="/-/ready"} 115749
prometheus_http_request_duration_seconds_bucket{handler="/alerts",le="0.1"} 40
prometheus_http_request_duration_seconds_bucket{handler="/alerts",le="0.2"} 40
prometheus_http_request_duration_seconds_bucket{handler="/alerts",le="0.4"} 40
prometheus_http_request_duration_seconds_bucket{handler="/alerts",le="1"} 40
prometheus_http_request_duration_seconds_bucket{handler="/alerts",le="3"} 40
prometheus_http_request_duration_seconds_bucket{handler="/alerts",le="8"} 40
prometheus_http_request_duration_seconds_bucket{handler="/alerts",le="20"} 40
prometheus_http_request_duration_seconds_bucket{handler="/alerts",le="60"} 40
prometheus_http_request_duration_seconds_bucket{handler="/alerts",le="120"} 40
prometheus_http_request_duration_seconds_bucket{handler="/alerts",le="+Inf"} 40
prometheus_http_request_duration_seconds_sum{handler="/alerts"} 0.0057797280000000005
prometheus_http_request_duration_seconds_count{handler="/alerts"} 40
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/*path",le="0.1"} 191
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/*path",le="0.2"} 191
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/*path",le="0.4"} 191
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/*path",le="1"} 191
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/*path",le="3"} 191
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/*path",le="8"} 191
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/*path",le="20"} 191
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/*path",le="60"} 191
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/*path",le="120"} 191
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/*path",le="+Inf"} 191
prometheus_http_request_duration_seconds_sum{handler="/api/v1/*path"} 0.007598584000000004
prometheus_http_request_duration_seconds_count{handler="/api/v1/*path"} 191
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/alertmanagers",le="0.1"} 64
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/alertmanagers",le="0.2"} 64
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/alertmanagers",le="0.4"} 64
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/alertmanagers",le="1"} 64
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/alertmanagers",le="3"} 64
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/alertmanagers",le="8"} 64
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/alertmanagers",le="20"} 64
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/alertmanagers",le="60"} 64
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/alertmanagers",le="120"} 64
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/alertmanagers",le="+Inf"} 64
prometheus_http_request_duration_seconds_sum{handler="/api/v1/alertmanagers"} 0.056589764
prometheus_http_request_duration_seconds_count{handler="/api/v1/alertmanagers"} 64
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/format_query",le="0.1"} 199
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/format_query",le="0.2"} 199
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/format_query",le="0.4"} 199
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/format_query",le="1"} 199
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/format_query",le="3"} 199
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/format_query",le="8"} 199
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/format_query",le="20"} 199
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/format_query",le="60"} 199
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/format_query",le="120"} 199
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/format_query",le="+Inf"} 199
prometheus_http_request_duration_seconds_sum{handler="/api/v1/format_query"} 0.12558110900000005
prometheus_http_request_duration_seconds_count{handler="/api/v1/format_query"} 199
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",le="0.1"} 25003
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",le="0.2"} 25003
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",le="0.4"} 25003
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",le="1"} 25003
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",le="3"} 25003
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",le="8"} 25003
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",le="20"} 25003
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",le="60"} 25003
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",le="120"} 25003
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/label/:name/values",le="+Inf"} 25003
prometheus_http_request_duration_seconds_sum{handler="/api/v1/label/:name/values"} 72.49944087500023
prometheus_http_request_duration_seconds_count{handler="/api/v1/label/:name/values"} 25003
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/labels",le="0.1"} 5621
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/labels",le="0.2"} 5657
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/labels",le="0.4"} 5675
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/labels",le="1"} 5680
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/labels",le="3"} 5680
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/labels",le="8"} 5680
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/labels",le="20"} 5681
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/labels",le="60"} 5681
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/labels",le="120"} 5681
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/labels",le="+Inf"} 5681
prometheus_http_request_duration_seconds_sum{handler="/api/v1/labels"} 35.742601865000076
prometheus_http_request_duration_seconds_count{handler="/api/v1/labels"} 5681
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/metadata",le="0.1"} 11339
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/metadata",le="0.2"} 11339
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/metadata",le="0.4"} 11339
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/metadata",le="1"} 11339
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/metadata",le="3"} 11339
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/metadata",le="8"} 11339
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/metadata",le="20"} 11339
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/metadata",le="60"} 11339
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/metadata",le="120"} 11339
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/metadata",le="+Inf"} 11339
prometheus_http_request_duration_seconds_sum{handler="/api/v1/metadata"} 59.42707234199998
prometheus_http_request_duration_seconds_count{handler="/api/v1/metadata"} 11339
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query",le="0.1"} 213765
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query",le="0.2"} 214346
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query",le="0.4"} 214566
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query",le="1"} 214750
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query",le="3"} 214800
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query",le="8"} 214824
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query",le="20"} 214832
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query",le="60"} 214832
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query",le="120"} 214832
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query",le="+Inf"} 214832
prometheus_http_request_duration_seconds_sum{handler="/api/v1/query"} 1090.568437145969
prometheus_http_request_duration_seconds_count{handler="/api/v1/query"} 214832
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_exemplars",le="0.1"} 445
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_exemplars",le="0.2"} 445
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_exemplars",le="0.4"} 445
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_exemplars",le="1"} 445
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_exemplars",le="3"} 445
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_exemplars",le="8"} 445
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_exemplars",le="20"} 445
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_exemplars",le="60"} 445
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_exemplars",le="120"} 445
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_exemplars",le="+Inf"} 445
prometheus_http_request_duration_seconds_sum{handler="/api/v1/query_exemplars"} 0.35954446000000023
prometheus_http_request_duration_seconds_count{handler="/api/v1/query_exemplars"} 445
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_range",le="0.1"} 248590
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_range",le="0.2"} 253219
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_range",le="0.4"} 254080
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_range",le="1"} 254602
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_range",le="3"} 254919
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_range",le="8"} 255019
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_range",le="20"} 255029
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_range",le="60"} 255032
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_range",le="120"} 255038
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/query_range",le="+Inf"} 255053
prometheus_http_request_duration_seconds_sum{handler="/api/v1/query_range"} 9119.432804675891
prometheus_http_request_duration_seconds_count{handler="/api/v1/query_range"} 255053
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/rules",le="0.1"} 3921
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/rules",le="0.2"} 3921
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/rules",le="0.4"} 3921
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/rules",le="1"} 3921
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/rules",le="3"} 3921
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/rules",le="8"} 3921
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/rules",le="20"} 3921
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/rules",le="60"} 3921
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/rules",le="120"} 3921
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/rules",le="+Inf"} 3921
prometheus_http_request_duration_seconds_sum{handler="/api/v1/rules"} 2.1610282319999983
prometheus_http_request_duration_seconds_count{handler="/api/v1/rules"} 3921
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/scrape_pools",le="0.1"} 174
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/scrape_pools",le="0.2"} 174
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/scrape_pools",le="0.4"} 174
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/scrape_pools",le="1"} 174
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/scrape_pools",le="3"} 174
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/scrape_pools",le="8"} 174
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/scrape_pools",le="20"} 174
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/scrape_pools",le="60"} 174
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/scrape_pools",le="120"} 174
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/scrape_pools",le="+Inf"} 174
prometheus_http_request_duration_seconds_sum{handler="/api/v1/scrape_pools"} 0.11936615399999997
prometheus_http_request_duration_seconds_count{handler="/api/v1/scrape_pools"} 174
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/series",le="0.1"} 6682
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/series",le="0.2"} 6905
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/series",le="0.4"} 6998
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/series",le="1"} 7029
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/series",le="3"} 7037
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/series",le="8"} 7039
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/series",le="20"} 7047
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/series",le="60"} 7047
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/series",le="120"} 7047
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/series",le="+Inf"} 7047
prometheus_http_request_duration_seconds_sum{handler="/api/v1/series"} 219.77641234299963
prometheus_http_request_duration_seconds_count{handler="/api/v1/series"} 7047
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/buildinfo",le="0.1"} 2902
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/buildinfo",le="0.2"} 2902
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/buildinfo",le="0.4"} 2902
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/buildinfo",le="1"} 2902
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/buildinfo",le="3"} 2902
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/buildinfo",le="8"} 2902
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/buildinfo",le="20"} 2902
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/buildinfo",le="60"} 2902
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/buildinfo",le="120"} 2902
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/buildinfo",le="+Inf"} 2902
prometheus_http_request_duration_seconds_sum{handler="/api/v1/status/buildinfo"} 1.9739935510000024
prometheus_http_request_duration_seconds_count{handler="/api/v1/status/buildinfo"} 2902
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/config",le="0.1"} 188
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/config",le="0.2"} 188
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/config",le="0.4"} 188
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/config",le="1"} 188
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/config",le="3"} 188
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/config",le="8"} 188
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/config",le="20"} 188
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/config",le="60"} 188
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/config",le="120"} 188
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/config",le="+Inf"} 188
prometheus_http_request_duration_seconds_sum{handler="/api/v1/status/config"} 0.2969664890000001
prometheus_http_request_duration_seconds_count{handler="/api/v1/status/config"} 188
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/flags",le="0.1"} 169
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/flags",le="0.2"} 169
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/flags",le="0.4"} 169
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/flags",le="1"} 169
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/flags",le="3"} 169
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/flags",le="8"} 169
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/flags",le="20"} 169
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/flags",le="60"} 169
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/flags",le="120"} 169
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/flags",le="+Inf"} 169
prometheus_http_request_duration_seconds_sum{handler="/api/v1/status/flags"} 0.17354412600000013
prometheus_http_request_duration_seconds_count{handler="/api/v1/status/flags"} 169
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/runtimeinfo",le="0.1"} 76
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/runtimeinfo",le="0.2"} 76
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/runtimeinfo",le="0.4"} 76
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/runtimeinfo",le="1"} 76
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/runtimeinfo",le="3"} 76
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/runtimeinfo",le="8"} 76
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/runtimeinfo",le="20"} 76
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/runtimeinfo",le="60"} 76
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/runtimeinfo",le="120"} 76
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/runtimeinfo",le="+Inf"} 76
prometheus_http_request_duration_seconds_sum{handler="/api/v1/status/runtimeinfo"} 0.30232957299999985
prometheus_http_request_duration_seconds_count{handler="/api/v1/status/runtimeinfo"} 76
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/tsdb",le="0.1"} 105
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/tsdb",le="0.2"} 105
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/tsdb",le="0.4"} 105
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/tsdb",le="1"} 105
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/tsdb",le="3"} 105
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/tsdb",le="8"} 105
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/tsdb",le="20"} 105
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/tsdb",le="60"} 105
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/tsdb",le="120"} 105
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/status/tsdb",le="+Inf"} 105
prometheus_http_request_duration_seconds_sum{handler="/api/v1/status/tsdb"} 0.390608687
prometheus_http_request_duration_seconds_count{handler="/api/v1/status/tsdb"} 105
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/targets",le="0.1"} 332
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/targets",le="0.2"} 332
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/targets",le="0.4"} 332
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/targets",le="1"} 332
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/targets",le="3"} 332
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/targets",le="8"} 332
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/targets",le="20"} 332
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/targets",le="60"} 332
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/targets",le="120"} 332
prometheus_http_request_duration_seconds_bucket{handler="/api/v1/targets",le="+Inf"} 332
prometheus_http_request_duration_seconds_sum{handler="/api/v1/targets"} 0.34764129500000046
prometheus_http_request_duration_seconds_count{handler="/api/v1/targets"} 332
prometheus_http_request_duration_seconds_bucket{handler="/config",le="0.1"} 40
prometheus_http_request_duration_seconds_bucket{handler="/config",le="0.2"} 40
prometheus_http_request_duration_seconds_bucket{handler="/config",le="0.4"} 40
prometheus_http_request_duration_seconds_bucket{handler="/config",le="1"} 40
prometheus_http_request_duration_seconds_bucket{handler="/config",le="3"} 40
prometheus_http_request_duration_seconds_bucket{handler="/config",le="8"} 40
prometheus_http_request_duration_seconds_bucket{handler="/config",le="20"} 40
prometheus_http_request_duration_seconds_bucket{handler="/config",le="60"} 40
prometheus_http_request_duration_seconds_bucket{handler="/config",le="120"} 40
prometheus_http_request_duration_seconds_bucket{handler="/config",le="+Inf"} 40
prometheus_http_request_duration_seconds_sum{handler="/config"} 0.005407603999999999
prometheus_http_request_duration_seconds_count{handler="/config"} 40
prometheus_http_request_duration_seconds_bucket{handler="/consoles/*filepath",le="0.1"} 6
prometheus_http_request_duration_seconds_bucket{handler="/consoles/*filepath",le="0.2"} 6
prometheus_http_request_duration_seconds_bucket{handler="/consoles/*filepath",le="0.4"} 6
prometheus_http_request_duration_seconds_bucket{handler="/consoles/*filepath",le="1"} 6
prometheus_http_request_duration_seconds_bucket{handler="/consoles/*filepath",le="3"} 6
prometheus_http_request_duration_seconds_bucket{handler="/consoles/*filepath",le="8"} 6
prometheus_http_request_duration_seconds_bucket{handler="/consoles/*filepath",le="20"} 6
prometheus_http_request_duration_seconds_bucket{handler="/consoles/*filepath",le="60"} 6
prometheus_http_request_duration_seconds_bucket{handler="/consoles/*filepath",le="120"} 6
prometheus_http_request_duration_seconds_bucket{handler="/consoles/*filepath",le="+Inf"} 6
prometheus_http_request_duration_seconds_sum{handler="/consoles/*filepath"} 0.0013584509999999999
prometheus_http_request_duration_seconds_count{handler="/consoles/*filepath"} 6
prometheus_http_request_duration_seconds_bucket{handler="/debug/*subpath",le="0.1"} 6
prometheus_http_request_duration_seconds_bucket{handler="/debug/*subpath",le="0.2"} 6
prometheus_http_request_duration_seconds_bucket{handler="/debug/*subpath",le="0.4"} 6
prometheus_http_request_duration_seconds_bucket{handler="/debug/*subpath",le="1"} 6
prometheus_http_request_duration_seconds_bucket{handler="/debug/*subpath",le="3"} 6
prometheus_http_request_duration_seconds_bucket{handler="/debug/*subpath",le="8"} 6
prometheus_http_request_duration_seconds_bucket{handler="/debug/*subpath",le="20"} 6
prometheus_http_request_duration_seconds_bucket{handler="/debug/*subpath",le="60"} 6
prometheus_http_request_duration_seconds_bucket{handler="/debug/*subpath",le="120"} 6
prometheus_http_request_duration_seconds_bucket{handler="/debug/*subpath",le="+Inf"} 6
prometheus_http_request_duration_seconds_sum{handler="/debug/*subpath"} 0.000181831
prometheus_http_request_duration_seconds_count{handler="/debug/*subpath"} 6
prometheus_http_request_duration_seconds_bucket{handler="/favicon.ico",le="0.1"} 2144
prometheus_http_request_duration_seconds_bucket{handler="/favicon.ico",le="0.2"} 2144
prometheus_http_request_duration_seconds_bucket{handler="/favicon.ico",le="0.4"} 2144
prometheus_http_request_duration_seconds_bucket{handler="/favicon.ico",le="1"} 2144
prometheus_http_request_duration_seconds_bucket{handler="/favicon.ico",le="3"} 2144
prometheus_http_request_duration_seconds_bucket{handler="/favicon.ico",le="8"} 2144
prometheus_http_request_duration_seconds_bucket{handler="/favicon.ico",le="20"} 2144
prometheus_http_request_duration_seconds_bucket{handler="/favicon.ico",le="60"} 2144
prometheus_http_request_duration_seconds_bucket{handler="/favicon.ico",le="120"} 2144
prometheus_http_request_duration_seconds_bucket{handler="/favicon.ico",le="+Inf"} 2144
prometheus_http_request_duration_seconds_sum{handler="/favicon.ico"} 1.1777082850000007
prometheus_http_request_duration_seconds_count{handler="/favicon.ico"} 2144
prometheus_http_request_duration_seconds_bucket{handler="/flags",le="0.1"} 172
prometheus_http_request_duration_seconds_bucket{handler="/flags",le="0.2"} 172
prometheus_http_request_duration_seconds_bucket{handler="/flags",le="0.4"} 172
prometheus_http_request_duration_seconds_bucket{handler="/flags",le="1"} 172
prometheus_http_request_duration_seconds_bucket{handler="/flags",le="3"} 172
prometheus_http_request_duration_seconds_bucket{handler="/flags",le="8"} 172
prometheus_http_request_duration_seconds_bucket{handler="/flags",le="20"} 172
prometheus_http_request_duration_seconds_bucket{handler="/flags",le="60"} 172
prometheus_http_request_duration_seconds_bucket{handler="/flags",le="120"} 172
prometheus_http_request_duration_seconds_bucket{handler="/flags",le="+Inf"} 172
prometheus_http_request_duration_seconds_sum{handler="/flags"} 0.02479974899999999
prometheus_http_request_duration_seconds_count{handler="/flags"} 172
prometheus_http_request_duration_seconds_bucket{handler="/graph",le="0.1"} 2100
prometheus_http_request_duration_seconds_bucket{handler="/graph",le="0.2"} 2100
prometheus_http_request_duration_seconds_bucket{handler="/graph",le="0.4"} 2100
prometheus_http_request_duration_seconds_bucket{handler="/graph",le="1"} 2100
prometheus_http_request_duration_seconds_bucket{handler="/graph",le="3"} 2100
prometheus_http_request_duration_seconds_bucket{handler="/graph",le="8"} 2100
prometheus_http_request_duration_seconds_bucket{handler="/graph",le="20"} 2100
prometheus_http_request_duration_seconds_bucket{handler="/graph",le="60"} 2100
prometheus_http_request_duration_seconds_bucket{handler="/graph",le="120"} 2100
prometheus_http_request_duration_seconds_bucket{handler="/graph",le="+Inf"} 2100
prometheus_http_request_duration_seconds_sum{handler="/graph"} 0.32101490600000016
prometheus_http_request_duration_seconds_count{handler="/graph"} 2100
prometheus_http_request_duration_seconds_bucket{handler="/manifest.json",le="0.1"} 1214
prometheus_http_request_duration_seconds_bucket{handler="/manifest.json",le="0.2"} 1214
prometheus_http_request_duration_seconds_bucket{handler="/manifest.json",le="0.4"} 1214
prometheus_http_request_duration_seconds_bucket{handler="/manifest.json",le="1"} 1214
prometheus_http_request_duration_seconds_bucket{handler="/manifest.json",le="3"} 1214
prometheus_http_request_duration_seconds_bucket{handler="/manifest.json",le="8"} 1214
prometheus_http_request_duration_seconds_bucket{handler="/manifest.json",le="20"} 1214
prometheus_http_request_duration_seconds_bucket{handler="/manifest.json",le="60"} 1214
prometheus_http_request_duration_seconds_bucket{handler="/manifest.json",le="120"} 1214
prometheus_http_request_duration_seconds_bucket{handler="/manifest.json",le="+Inf"} 1214
prometheus_http_request_duration_seconds_sum{handler="/manifest.json"} 0.16780622900000025
prometheus_http_request_duration_seconds_count{handler="/manifest.json"} 1214
prometheus_http_request_duration_seconds_bucket{handler="/metrics",le="0.1"} 454306
prometheus_http_request_duration_seconds_bucket{handler="/metrics",le="0.2"} 454312
prometheus_http_request_duration_seconds_bucket{handler="/metrics",le="0.4"} 454315
prometheus_http_request_duration_seconds_bucket{handler="/metrics",le="1"} 454316
prometheus_http_request_duration_seconds_bucket{handler="/metrics",le="3"} 454316
prometheus_http_request_duration_seconds_bucket{handler="/metrics",le="8"} 454316
prometheus_http_request_duration_seconds_bucket{handler="/metrics",le="20"} 454316
prometheus_http_request_duration_seconds_bucket{handler="/metrics",le="60"} 454316
prometheus_http_request_duration_seconds_bucket{handler="/metrics",le="120"} 454316
prometheus_http_request_duration_seconds_bucket{handler="/metrics",le="+Inf"} 454316
prometheus_http_request_duration_seconds_sum{handler="/metrics"} 3990.377007509091
prometheus_http_request_duration_seconds_count{handler="/metrics"} 454316
prometheus_http_request_duration_seconds_bucket{handler="/rules",le="0.1"} 24
prometheus_http_request_duration_seconds_bucket{handler="/rules",le="0.2"} 24
prometheus_http_request_duration_seconds_bucket{handler="/rules",le="0.4"} 24
prometheus_http_request_duration_seconds_bucket{handler="/rules",le="1"} 24
prometheus_http_request_duration_seconds_bucket{handler="/rules",le="3"} 24
prometheus_http_request_duration_seconds_bucket{handler="/rules",le="8"} 24
prometheus_http_request_duration_seconds_bucket{handler="/rules",le="20"} 24
prometheus_http_request_duration_seconds_bucket{handler="/rules",le="60"} 24
prometheus_http_request_duration_seconds_bucket{handler="/rules",le="120"} 24
prometheus_http_request_duration_seconds_bucket{handler="/rules",le="+Inf"} 24
prometheus_http_request_duration_seconds_sum{handler="/rules"} 0.00329543
prometheus_http_request_duration_seconds_count{handler="/rules"} 24
prometheus_http_request_duration_seconds_bucket{handler="/service-discovery",le="0.1"} 26
prometheus_http_request_duration_seconds_bucket{handler="/service-discovery",le="0.2"} 26
prometheus_http_request_duration_seconds_bucket{handler="/service-discovery",le="0.4"} 26
prometheus_http_request_duration_seconds_bucket{handler="/service-discovery",le="1"} 26
prometheus_http_request_duration_seconds_bucket{handler="/service-discovery",le="3"} 26
prometheus_http_request_duration_seconds_bucket{handler="/service-discovery",le="8"} 26
prometheus_http_request_duration_seconds_bucket{handler="/service-discovery",le="20"} 26
prometheus_http_request_duration_seconds_bucket{handler="/service-discovery",le="60"} 26
prometheus_http_request_duration_seconds_bucket{handler="/service-discovery",le="120"} 26
prometheus_http_request_duration_seconds_bucket{handler="/service-discovery",le="+Inf"} 26
prometheus_http_request_duration_seconds_sum{handler="/service-discovery"} 0.004048245999999999
prometheus_http_request_duration_seconds_count{handler="/service-discovery"} 26
prometheus_http_request_duration_seconds_bucket{handler="/static/*filepath",le="0.1"} 2855
prometheus_http_request_duration_seconds_bucket{handler="/static/*filepath",le="0.2"} 3130
prometheus_http_request_duration_seconds_bucket{handler="/static/*filepath",le="0.4"} 3521
prometheus_http_request_duration_seconds_bucket{handler="/static/*filepath",le="1"} 3846
prometheus_http_request_duration_seconds_bucket{handler="/static/*filepath",le="3"} 3920
prometheus_http_request_duration_seconds_bucket{handler="/static/*filepath",le="8"} 3937
prometheus_http_request_duration_seconds_bucket{handler="/static/*filepath",le="20"} 3946
prometheus_http_request_duration_seconds_bucket{handler="/static/*filepath",le="60"} 3957
prometheus_http_request_duration_seconds_bucket{handler="/static/*filepath",le="120"} 3958
prometheus_http_request_duration_seconds_bucket{handler="/static/*filepath",le="+Inf"} 3959
prometheus_http_request_duration_seconds_sum{handler="/static/*filepath"} 1265.453104113999
prometheus_http_request_duration_seconds_count{handler="/static/*filepath"} 3959
prometheus_http_request_duration_seconds_bucket{handler="/status",le="0.1"} 25
prometheus_http_request_duration_seconds_bucket{handler="/status",le="0.2"} 25
prometheus_http_request_duration_seconds_bucket{handler="/status",le="0.4"} 25
prometheus_http_request_duration_seconds_bucket{handler="/status",le="1"} 25
prometheus_http_request_duration_seconds_bucket{handler="/status",le="3"} 25
prometheus_http_request_duration_seconds_bucket{handler="/status",le="8"} 25
prometheus_http_request_duration_seconds_bucket{handler="/status",le="20"} 25
prometheus_http_request_duration_seconds_bucket{handler="/status",le="60"} 25
prometheus_http_request_duration_seconds_bucket{handler="/status",le="120"} 25
prometheus_http_request_duration_seconds_bucket{handler="/status",le="+Inf"} 25
prometheus_http_request_duration_seconds_sum{handler="/status"} 0.0036436809999999997
prometheus_http_request_duration_seconds_count{handler="/status"} 25
prometheus_http_request_duration_seconds_bucket{handler="/targets",le="0.1"} 65
prometheus_http_request_duration_seconds_bucket{handler="/targets",le="0.2"} 65
prometheus_http_request_duration_seconds_bucket{handler="/targets",le="0.4"} 65
prometheus_http_request_duration_seconds_bucket{handler="/targets",le="1"} 65
prometheus_http_request_duration_seconds_bucket{handler="/targets",le="3"} 65
prometheus_http_request_duration_seconds_bucket{handler="/targets",le="8"} 65
prometheus_http_request_duration_seconds_bucket{handler="/targets",le="20"} 65
prometheus_http_request_duration_seconds_bucket{handler="/targets",le="60"} 65
prometheus_http_request_duration_seconds_bucket{handler="/targets",le="120"} 65
prometheus_http_request_duration_seconds_bucket{handler="/targets",le="+Inf"} 65
prometheus_http_request_duration_seconds_sum{handler="/targets"} 0.009071472999999998
prometheus_http_request_duration_seconds_count{handler="/targets"} 65
prometheus_http_request_duration_seconds_bucket{handler="/tsdb-status",le="0.1"} 77
prometheus_http_request_duration_seconds_bucket{handler="/tsdb-status",le="0.2"} 77
prometheus_http_request_duration_seconds_bucket{handler="/tsdb-status",le="0.4"} 77
prometheus_http_request_duration_seconds_bucket{handler="/tsdb-status",le="1"} 77
prometheus_http_request_duration_seconds_bucket{handler="/tsdb-status",le="3"} 77
prometheus_http_request_duration_seconds_bucket{handler="/tsdb-status",le="8"} 77
prometheus_http_request_duration_seconds_bucket{handler="/tsdb-status",le="20"} 77
prometheus_http_request_duration_seconds_bucket{handler="/tsdb-status",le="60"} 77
prometheus_http_request_duration_seconds_bucket{handler="/tsdb-status",le="120"} 77
prometheus_http_request_duration_seconds_bucket{handler="/tsdb-status",le="+Inf"} 77
prometheus_http_request_duration_seconds_sum{handler="/tsdb-status"} 0.011191794000000001
prometheus_http_request_duration_seconds_count{handler="/tsdb-status"} 77
prometheus_http_request_duration_seconds_bucket{handler="/version",le="0.1"} 8
prometheus_http_request_duration_seconds_bucket{handler="/version",le="0.2"} 8
prometheus_http_request_duration_seconds_bucket{handler="/version",le="0.4"} 8
prometheus_http_request_duration_seconds_bucket{handler="/version",le="1"} 8
prometheus_http_request_duration_seconds_bucket{handler="/version",le="3"} 8
prometheus_http_request_duration_seconds_bucket{handler="/version",le="8"} 8
prometheus_http_request_duration_seconds_bucket{handler="/version",le="20"} 8
prometheus_http_request_duration_seconds_bucket{handler="/version",le="60"} 8
prometheus_http_request_duration_seconds_bucket{handler="/version",le="120"} 8
prometheus_http_request_duration_seconds_bucket{handler="/version",le="+Inf"} 8
prometheus_http_request_duration_seconds_sum{handler="/version"} 0.001270225
prometheus_http_request_duration_seconds_count{handler="/version"} 8


# HELP prometheus_http_requests_total Counter of HTTP requests.
# TYPE prometheus_http_requests_total counter
prometheus_http_requests_total{code="200",handler="/-/ready"} 115749
prometheus_http_requests_total{code="200",handler="/alerts"} 40
prometheus_http_requests_total{code="200",handler="/api/v1/alertmanagers"} 64
prometheus_http_requests_total{code="200",handler="/api/v1/format_query"} 119
prometheus_http_requests_total{code="200",handler="/api/v1/label/:name/values"} 24972
prometheus_http_requests_total{code="200",handler="/api/v1/labels"} 5681
prometheus_http_requests_total{code="200",handler="/api/v1/metadata"} 11339
prometheus_http_requests_total{code="200",handler="/api/v1/query"} 213341
prometheus_http_requests_total{code="200",handler="/api/v1/query_exemplars"} 445
prometheus_http_requests_total{code="200",handler="/api/v1/query_range"} 254055
prometheus_http_requests_total{code="200",handler="/api/v1/rules"} 3921
prometheus_http_requests_total{code="200",handler="/api/v1/scrape_pools"} 174
prometheus_http_requests_total{code="200",handler="/api/v1/series"} 6968
prometheus_http_requests_total{code="200",handler="/api/v1/status/buildinfo"} 2902
prometheus_http_requests_total{code="200",handler="/api/v1/status/config"} 188
prometheus_http_requests_total{code="200",handler="/api/v1/status/flags"} 169
prometheus_http_requests_total{code="200",handler="/api/v1/status/runtimeinfo"} 76
prometheus_http_requests_total{code="200",handler="/api/v1/status/tsdb"} 105
prometheus_http_requests_total{code="200",handler="/api/v1/targets"} 332
prometheus_http_requests_total{code="200",handler="/config"} 40
prometheus_http_requests_total{code="200",handler="/favicon.ico"} 2144
prometheus_http_requests_total{code="200",handler="/flags"} 172
prometheus_http_requests_total{code="200",handler="/graph"} 2100
prometheus_http_requests_total{code="200",handler="/manifest.json"} 1214
prometheus_http_requests_total{code="200",handler="/metrics"} 454316
prometheus_http_requests_total{code="200",handler="/rules"} 24
prometheus_http_requests_total{code="200",handler="/service-discovery"} 26
prometheus_http_requests_total{code="200",handler="/static/*filepath"} 3949
prometheus_http_requests_total{code="200",handler="/status"} 25
prometheus_http_requests_total{code="200",handler="/targets"} 65
prometheus_http_requests_total{code="200",handler="/tsdb-status"} 77
prometheus_http_requests_total{code="200",handler="/version"} 8
prometheus_http_requests_total{code="204",handler="/api/v1/*path"} 191
prometheus_http_requests_total{code="302",handler="/"} 1715
prometheus_http_requests_total{code="400",handler="/api/v1/format_query"} 80
prometheus_http_requests_total{code="400",handler="/api/v1/label/:name/values"} 31
prometheus_http_requests_total{code="400",handler="/api/v1/query"} 886
prometheus_http_requests_total{code="400",handler="/api/v1/query_range"} 837
prometheus_http_requests_total{code="400",handler="/api/v1/series"} 79
prometheus_http_requests_total{code="404",handler="/consoles/*filepath"} 6
prometheus_http_requests_total{code="404",handler="/debug/*subpath"} 6
prometheus_http_requests_total{code="404",handler="/static/*filepath"} 10
prometheus_http_requests_total{code="422",handler="/api/v1/query"} 477
prometheus_http_requests_total{code="422",handler="/api/v1/query_range"} 49
prometheus_http_requests_total{code="499",handler="/api/v1/query"} 128
prometheus_http_requests_total{code="499",handler="/api/v1/query_range"} 112


# HELP prometheus_http_response_size_bytes Histogram of response size for HTTP requests.
# TYPE prometheus_http_response_size_bytes histogram
prometheus_http_response_size_bytes_bucket{handler="/",le="100"} 1715
prometheus_http_response_size_bytes_bucket{handler="/",le="1000"} 1715
prometheus_http_response_size_bytes_bucket{handler="/",le="10000"} 1715
prometheus_http_response_size_bytes_bucket{handler="/",le="100000"} 1715
prometheus_http_response_size_bytes_bucket{handler="/",le="1e+06"} 1715
prometheus_http_response_size_bytes_bucket{handler="/",le="1e+07"} 1715
prometheus_http_response_size_bytes_bucket{handler="/",le="1e+08"} 1715
prometheus_http_response_size_bytes_bucket{handler="/",le="1e+09"} 1715
prometheus_http_response_size_bytes_bucket{handler="/",le="+Inf"} 1715
prometheus_http_response_size_bytes_sum{handler="/"} 49735
prometheus_http_response_size_bytes_count{handler="/"} 1715
prometheus_http_response_size_bytes_bucket{handler="/-/ready",le="100"} 115749
prometheus_http_response_size_bytes_bucket{handler="/-/ready",le="1000"} 115749
prometheus_http_response_size_bytes_bucket{handler="/-/ready",le="10000"} 115749
prometheus_http_response_size_bytes_bucket{handler="/-/ready",le="100000"} 115749
prometheus_http_response_size_bytes_bucket{handler="/-/ready",le="1e+06"} 115749
prometheus_http_response_size_bytes_bucket{handler="/-/ready",le="1e+07"} 115749
prometheus_http_response_size_bytes_bucket{handler="/-/ready",le="1e+08"} 115749
prometheus_http_response_size_bytes_bucket{handler="/-/ready",le="1e+09"} 115749
prometheus_http_response_size_bytes_bucket{handler="/-/ready",le="+Inf"} 115749
prometheus_http_response_size_bytes_sum{handler="/-/ready"} 3.240972e+06
prometheus_http_response_size_bytes_count{handler="/-/ready"} 115749
prometheus_http_response_size_bytes_bucket{handler="/alerts",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/alerts",le="1000"} 40
prometheus_http_response_size_bytes_bucket{handler="/alerts",le="10000"} 40
prometheus_http_response_size_bytes_bucket{handler="/alerts",le="100000"} 40
prometheus_http_response_size_bytes_bucket{handler="/alerts",le="1e+06"} 40
prometheus_http_response_size_bytes_bucket{handler="/alerts",le="1e+07"} 40
prometheus_http_response_size_bytes_bucket{handler="/alerts",le="1e+08"} 40
prometheus_http_response_size_bytes_bucket{handler="/alerts",le="1e+09"} 40
prometheus_http_response_size_bytes_bucket{handler="/alerts",le="+Inf"} 40
prometheus_http_response_size_bytes_sum{handler="/alerts"} 29360
prometheus_http_response_size_bytes_count{handler="/alerts"} 40
prometheus_http_response_size_bytes_bucket{handler="/api/v1/*path",le="100"} 191
prometheus_http_response_size_bytes_bucket{handler="/api/v1/*path",le="1000"} 191
prometheus_http_response_size_bytes_bucket{handler="/api/v1/*path",le="10000"} 191
prometheus_http_response_size_bytes_bucket{handler="/api/v1/*path",le="100000"} 191
prometheus_http_response_size_bytes_bucket{handler="/api/v1/*path",le="1e+06"} 191
prometheus_http_response_size_bytes_bucket{handler="/api/v1/*path",le="1e+07"} 191
prometheus_http_response_size_bytes_bucket{handler="/api/v1/*path",le="1e+08"} 191
prometheus_http_response_size_bytes_bucket{handler="/api/v1/*path",le="1e+09"} 191
prometheus_http_response_size_bytes_bucket{handler="/api/v1/*path",le="+Inf"} 191
prometheus_http_response_size_bytes_sum{handler="/api/v1/*path"} 0
prometheus_http_response_size_bytes_count{handler="/api/v1/*path"} 191
prometheus_http_response_size_bytes_bucket{handler="/api/v1/alertmanagers",le="100"} 64
prometheus_http_response_size_bytes_bucket{handler="/api/v1/alertmanagers",le="1000"} 64
prometheus_http_response_size_bytes_bucket{handler="/api/v1/alertmanagers",le="10000"} 64
prometheus_http_response_size_bytes_bucket{handler="/api/v1/alertmanagers",le="100000"} 64
prometheus_http_response_size_bytes_bucket{handler="/api/v1/alertmanagers",le="1e+06"} 64
prometheus_http_response_size_bytes_bucket{handler="/api/v1/alertmanagers",le="1e+07"} 64
prometheus_http_response_size_bytes_bucket{handler="/api/v1/alertmanagers",le="1e+08"} 64
prometheus_http_response_size_bytes_bucket{handler="/api/v1/alertmanagers",le="1e+09"} 64
prometheus_http_response_size_bytes_bucket{handler="/api/v1/alertmanagers",le="+Inf"} 64
prometheus_http_response_size_bytes_sum{handler="/api/v1/alertmanagers"} 6016
prometheus_http_response_size_bytes_count{handler="/api/v1/alertmanagers"} 64
prometheus_http_response_size_bytes_bucket{handler="/api/v1/format_query",le="100"} 69
prometheus_http_response_size_bytes_bucket{handler="/api/v1/format_query",le="1000"} 199
prometheus_http_response_size_bytes_bucket{handler="/api/v1/format_query",le="10000"} 199
prometheus_http_response_size_bytes_bucket{handler="/api/v1/format_query",le="100000"} 199
prometheus_http_response_size_bytes_bucket{handler="/api/v1/format_query",le="1e+06"} 199
prometheus_http_response_size_bytes_bucket{handler="/api/v1/format_query",le="1e+07"} 199
prometheus_http_response_size_bytes_bucket{handler="/api/v1/format_query",le="1e+08"} 199
prometheus_http_response_size_bytes_bucket{handler="/api/v1/format_query",le="1e+09"} 199
prometheus_http_response_size_bytes_bucket{handler="/api/v1/format_query",le="+Inf"} 199
prometheus_http_response_size_bytes_sum{handler="/api/v1/format_query"} 24027
prometheus_http_response_size_bytes_count{handler="/api/v1/format_query"} 199
prometheus_http_response_size_bytes_bucket{handler="/api/v1/label/:name/values",le="100"} 694
prometheus_http_response_size_bytes_bucket{handler="/api/v1/label/:name/values",le="1000"} 1096
prometheus_http_response_size_bytes_bucket{handler="/api/v1/label/:name/values",le="10000"} 24953
prometheus_http_response_size_bytes_bucket{handler="/api/v1/label/:name/values",le="100000"} 25003
prometheus_http_response_size_bytes_bucket{handler="/api/v1/label/:name/values",le="1e+06"} 25003
prometheus_http_response_size_bytes_bucket{handler="/api/v1/label/:name/values",le="1e+07"} 25003
prometheus_http_response_size_bytes_bucket{handler="/api/v1/label/:name/values",le="1e+08"} 25003
prometheus_http_response_size_bytes_bucket{handler="/api/v1/label/:name/values",le="1e+09"} 25003
prometheus_http_response_size_bytes_bucket{handler="/api/v1/label/:name/values",le="+Inf"} 25003
prometheus_http_response_size_bytes_sum{handler="/api/v1/label/:name/values"} 9.0351001e+07
prometheus_http_response_size_bytes_count{handler="/api/v1/label/:name/values"} 25003
prometheus_http_response_size_bytes_bucket{handler="/api/v1/labels",le="100"} 12
prometheus_http_response_size_bytes_bucket{handler="/api/v1/labels",le="1000"} 5681
prometheus_http_response_size_bytes_bucket{handler="/api/v1/labels",le="10000"} 5681
prometheus_http_response_size_bytes_bucket{handler="/api/v1/labels",le="100000"} 5681
prometheus_http_response_size_bytes_bucket{handler="/api/v1/labels",le="1e+06"} 5681
prometheus_http_response_size_bytes_bucket{handler="/api/v1/labels",le="1e+07"} 5681
prometheus_http_response_size_bytes_bucket{handler="/api/v1/labels",le="1e+08"} 5681
prometheus_http_response_size_bytes_bucket{handler="/api/v1/labels",le="1e+09"} 5681
prometheus_http_response_size_bytes_bucket{handler="/api/v1/labels",le="+Inf"} 5681
prometheus_http_response_size_bytes_sum{handler="/api/v1/labels"} 3.029505e+06
prometheus_http_response_size_bytes_count{handler="/api/v1/labels"} 5681
prometheus_http_response_size_bytes_bucket{handler="/api/v1/metadata",le="100"} 152
prometheus_http_response_size_bytes_bucket{handler="/api/v1/metadata",le="1000"} 867
prometheus_http_response_size_bytes_bucket{handler="/api/v1/metadata",le="10000"} 869
prometheus_http_response_size_bytes_bucket{handler="/api/v1/metadata",le="100000"} 11339
prometheus_http_response_size_bytes_bucket{handler="/api/v1/metadata",le="1e+06"} 11339
prometheus_http_response_size_bytes_bucket{handler="/api/v1/metadata",le="1e+07"} 11339
prometheus_http_response_size_bytes_bucket{handler="/api/v1/metadata",le="1e+08"} 11339
prometheus_http_response_size_bytes_bucket{handler="/api/v1/metadata",le="1e+09"} 11339
prometheus_http_response_size_bytes_bucket{handler="/api/v1/metadata",le="+Inf"} 11339
prometheus_http_response_size_bytes_sum{handler="/api/v1/metadata"} 1.06197325e+08
prometheus_http_response_size_bytes_count{handler="/api/v1/metadata"} 11339
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query",le="100"} 16308
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query",le="1000"} 200752
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query",le="10000"} 213643
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query",le="100000"} 214689
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query",le="1e+06"} 214808
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query",le="1e+07"} 214830
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query",le="1e+08"} 214832
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query",le="1e+09"} 214832
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query",le="+Inf"} 214832
prometheus_http_response_size_bytes_sum{handler="/api/v1/query"} 2.50664025e+08
prometheus_http_response_size_bytes_count{handler="/api/v1/query"} 214832
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_exemplars",le="100"} 445
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_exemplars",le="1000"} 445
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_exemplars",le="10000"} 445
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_exemplars",le="100000"} 445
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_exemplars",le="1e+06"} 445
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_exemplars",le="1e+07"} 445
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_exemplars",le="1e+08"} 445
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_exemplars",le="1e+09"} 445
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_exemplars",le="+Inf"} 445
prometheus_http_response_size_bytes_sum{handler="/api/v1/query_exemplars"} 26255
prometheus_http_response_size_bytes_count{handler="/api/v1/query_exemplars"} 445
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_range",le="100"} 3847
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_range",le="1000"} 39559
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_range",le="10000"} 50616
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_range",le="100000"} 254288
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_range",le="1e+06"} 255019
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_range",le="1e+07"} 255053
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_range",le="1e+08"} 255053
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_range",le="1e+09"} 255053
prometheus_http_response_size_bytes_bucket{handler="/api/v1/query_range",le="+Inf"} 255053
prometheus_http_response_size_bytes_sum{handler="/api/v1/query_range"} 3.694337514e+09
prometheus_http_response_size_bytes_count{handler="/api/v1/query_range"} 255053
prometheus_http_response_size_bytes_bucket{handler="/api/v1/rules",le="100"} 3921
prometheus_http_response_size_bytes_bucket{handler="/api/v1/rules",le="1000"} 3921
prometheus_http_response_size_bytes_bucket{handler="/api/v1/rules",le="10000"} 3921
prometheus_http_response_size_bytes_bucket{handler="/api/v1/rules",le="100000"} 3921
prometheus_http_response_size_bytes_bucket{handler="/api/v1/rules",le="1e+06"} 3921
prometheus_http_response_size_bytes_bucket{handler="/api/v1/rules",le="1e+07"} 3921
prometheus_http_response_size_bytes_bucket{handler="/api/v1/rules",le="1e+08"} 3921
prometheus_http_response_size_bytes_bucket{handler="/api/v1/rules",le="1e+09"} 3921
prometheus_http_response_size_bytes_bucket{handler="/api/v1/rules",le="+Inf"} 3921
prometheus_http_response_size_bytes_sum{handler="/api/v1/rules"} 274383
prometheus_http_response_size_bytes_count{handler="/api/v1/rules"} 3921
prometheus_http_response_size_bytes_bucket{handler="/api/v1/scrape_pools",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/api/v1/scrape_pools",le="1000"} 174
prometheus_http_response_size_bytes_bucket{handler="/api/v1/scrape_pools",le="10000"} 174
prometheus_http_response_size_bytes_bucket{handler="/api/v1/scrape_pools",le="100000"} 174
prometheus_http_response_size_bytes_bucket{handler="/api/v1/scrape_pools",le="1e+06"} 174
prometheus_http_response_size_bytes_bucket{handler="/api/v1/scrape_pools",le="1e+07"} 174
prometheus_http_response_size_bytes_bucket{handler="/api/v1/scrape_pools",le="1e+08"} 174
prometheus_http_response_size_bytes_bucket{handler="/api/v1/scrape_pools",le="1e+09"} 174
prometheus_http_response_size_bytes_bucket{handler="/api/v1/scrape_pools",le="+Inf"} 174
prometheus_http_response_size_bytes_sum{handler="/api/v1/scrape_pools"} 20506
prometheus_http_response_size_bytes_count{handler="/api/v1/scrape_pools"} 174
prometheus_http_response_size_bytes_bucket{handler="/api/v1/series",le="100"} 1175
prometheus_http_response_size_bytes_bucket{handler="/api/v1/series",le="1000"} 4652
prometheus_http_response_size_bytes_bucket{handler="/api/v1/series",le="10000"} 6714
prometheus_http_response_size_bytes_bucket{handler="/api/v1/series",le="100000"} 7047
prometheus_http_response_size_bytes_bucket{handler="/api/v1/series",le="1e+06"} 7047
prometheus_http_response_size_bytes_bucket{handler="/api/v1/series",le="1e+07"} 7047
prometheus_http_response_size_bytes_bucket{handler="/api/v1/series",le="1e+08"} 7047
prometheus_http_response_size_bytes_bucket{handler="/api/v1/series",le="1e+09"} 7047
prometheus_http_response_size_bytes_bucket{handler="/api/v1/series",le="+Inf"} 7047
prometheus_http_response_size_bytes_sum{handler="/api/v1/series"} 1.6609065e+07
prometheus_http_response_size_bytes_count{handler="/api/v1/series"} 7047
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/buildinfo",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/buildinfo",le="1000"} 2902
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/buildinfo",le="10000"} 2902
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/buildinfo",le="100000"} 2902
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/buildinfo",le="1e+06"} 2902
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/buildinfo",le="1e+07"} 2902
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/buildinfo",le="1e+08"} 2902
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/buildinfo",le="1e+09"} 2902
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/buildinfo",le="+Inf"} 2902
prometheus_http_response_size_bytes_sum{handler="/api/v1/status/buildinfo"} 542674
prometheus_http_response_size_bytes_count{handler="/api/v1/status/buildinfo"} 2902
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/config",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/config",le="1000"} 187
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/config",le="10000"} 188
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/config",le="100000"} 188
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/config",le="1e+06"} 188
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/config",le="1e+07"} 188
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/config",le="1e+08"} 188
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/config",le="1e+09"} 188
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/config",le="+Inf"} 188
prometheus_http_response_size_bytes_sum{handler="/api/v1/status/config"} 60887
prometheus_http_response_size_bytes_count{handler="/api/v1/status/config"} 188
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/flags",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/flags",le="1000"} 169
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/flags",le="10000"} 169
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/flags",le="100000"} 169
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/flags",le="1e+06"} 169
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/flags",le="1e+07"} 169
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/flags",le="1e+08"} 169
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/flags",le="1e+09"} 169
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/flags",le="+Inf"} 169
prometheus_http_response_size_bytes_sum{handler="/api/v1/status/flags"} 130299
prometheus_http_response_size_bytes_count{handler="/api/v1/status/flags"} 169
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/runtimeinfo",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/runtimeinfo",le="1000"} 76
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/runtimeinfo",le="10000"} 76
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/runtimeinfo",le="100000"} 76
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/runtimeinfo",le="1e+06"} 76
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/runtimeinfo",le="1e+07"} 76
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/runtimeinfo",le="1e+08"} 76
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/runtimeinfo",le="1e+09"} 76
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/runtimeinfo",le="+Inf"} 76
prometheus_http_response_size_bytes_sum{handler="/api/v1/status/runtimeinfo"} 18084
prometheus_http_response_size_bytes_count{handler="/api/v1/status/runtimeinfo"} 76
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/tsdb",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/tsdb",le="1000"} 103
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/tsdb",le="10000"} 105
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/tsdb",le="100000"} 105
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/tsdb",le="1e+06"} 105
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/tsdb",le="1e+07"} 105
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/tsdb",le="1e+08"} 105
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/tsdb",le="1e+09"} 105
prometheus_http_response_size_bytes_bucket{handler="/api/v1/status/tsdb",le="+Inf"} 105
prometheus_http_response_size_bytes_sum{handler="/api/v1/status/tsdb"} 69113
prometheus_http_response_size_bytes_count{handler="/api/v1/status/tsdb"} 105
prometheus_http_response_size_bytes_bucket{handler="/api/v1/targets",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/api/v1/targets",le="1000"} 328
prometheus_http_response_size_bytes_bucket{handler="/api/v1/targets",le="10000"} 332
prometheus_http_response_size_bytes_bucket{handler="/api/v1/targets",le="100000"} 332
prometheus_http_response_size_bytes_bucket{handler="/api/v1/targets",le="1e+06"} 332
prometheus_http_response_size_bytes_bucket{handler="/api/v1/targets",le="1e+07"} 332
prometheus_http_response_size_bytes_bucket{handler="/api/v1/targets",le="1e+08"} 332
prometheus_http_response_size_bytes_bucket{handler="/api/v1/targets",le="1e+09"} 332
prometheus_http_response_size_bytes_bucket{handler="/api/v1/targets",le="+Inf"} 332
prometheus_http_response_size_bytes_sum{handler="/api/v1/targets"} 219964
prometheus_http_response_size_bytes_count{handler="/api/v1/targets"} 332
prometheus_http_response_size_bytes_bucket{handler="/config",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/config",le="1000"} 40
prometheus_http_response_size_bytes_bucket{handler="/config",le="10000"} 40
prometheus_http_response_size_bytes_bucket{handler="/config",le="100000"} 40
prometheus_http_response_size_bytes_bucket{handler="/config",le="1e+06"} 40
prometheus_http_response_size_bytes_bucket{handler="/config",le="1e+07"} 40
prometheus_http_response_size_bytes_bucket{handler="/config",le="1e+08"} 40
prometheus_http_response_size_bytes_bucket{handler="/config",le="1e+09"} 40
prometheus_http_response_size_bytes_bucket{handler="/config",le="+Inf"} 40
prometheus_http_response_size_bytes_sum{handler="/config"} 29360
prometheus_http_response_size_bytes_count{handler="/config"} 40
prometheus_http_response_size_bytes_bucket{handler="/consoles/*filepath",le="100"} 6
prometheus_http_response_size_bytes_bucket{handler="/consoles/*filepath",le="1000"} 6
prometheus_http_response_size_bytes_bucket{handler="/consoles/*filepath",le="10000"} 6
prometheus_http_response_size_bytes_bucket{handler="/consoles/*filepath",le="100000"} 6
prometheus_http_response_size_bytes_bucket{handler="/consoles/*filepath",le="1e+06"} 6
prometheus_http_response_size_bytes_bucket{handler="/consoles/*filepath",le="1e+07"} 6
prometheus_http_response_size_bytes_bucket{handler="/consoles/*filepath",le="1e+08"} 6
prometheus_http_response_size_bytes_bucket{handler="/consoles/*filepath",le="1e+09"} 6
prometheus_http_response_size_bytes_bucket{handler="/consoles/*filepath",le="+Inf"} 6
prometheus_http_response_size_bytes_sum{handler="/consoles/*filepath"} 303
prometheus_http_response_size_bytes_count{handler="/consoles/*filepath"} 6
prometheus_http_response_size_bytes_bucket{handler="/debug/*subpath",le="100"} 6
prometheus_http_response_size_bytes_bucket{handler="/debug/*subpath",le="1000"} 6
prometheus_http_response_size_bytes_bucket{handler="/debug/*subpath",le="10000"} 6
prometheus_http_response_size_bytes_bucket{handler="/debug/*subpath",le="100000"} 6
prometheus_http_response_size_bytes_bucket{handler="/debug/*subpath",le="1e+06"} 6
prometheus_http_response_size_bytes_bucket{handler="/debug/*subpath",le="1e+07"} 6
prometheus_http_response_size_bytes_bucket{handler="/debug/*subpath",le="1e+08"} 6
prometheus_http_response_size_bytes_bucket{handler="/debug/*subpath",le="1e+09"} 6
prometheus_http_response_size_bytes_bucket{handler="/debug/*subpath",le="+Inf"} 6
prometheus_http_response_size_bytes_sum{handler="/debug/*subpath"} 114
prometheus_http_response_size_bytes_count{handler="/debug/*subpath"} 6
prometheus_http_response_size_bytes_bucket{handler="/favicon.ico",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/favicon.ico",le="1000"} 0
prometheus_http_response_size_bytes_bucket{handler="/favicon.ico",le="10000"} 12
prometheus_http_response_size_bytes_bucket{handler="/favicon.ico",le="100000"} 2144
prometheus_http_response_size_bytes_bucket{handler="/favicon.ico",le="1e+06"} 2144
prometheus_http_response_size_bytes_bucket{handler="/favicon.ico",le="1e+07"} 2144
prometheus_http_response_size_bytes_bucket{handler="/favicon.ico",le="1e+08"} 2144
prometheus_http_response_size_bytes_bucket{handler="/favicon.ico",le="1e+09"} 2144
prometheus_http_response_size_bytes_bucket{handler="/favicon.ico",le="+Inf"} 2144
prometheus_http_response_size_bytes_sum{handler="/favicon.ico"} 3.2210956e+07
prometheus_http_response_size_bytes_count{handler="/favicon.ico"} 2144
prometheus_http_response_size_bytes_bucket{handler="/flags",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/flags",le="1000"} 172
prometheus_http_response_size_bytes_bucket{handler="/flags",le="10000"} 172
prometheus_http_response_size_bytes_bucket{handler="/flags",le="100000"} 172
prometheus_http_response_size_bytes_bucket{handler="/flags",le="1e+06"} 172
prometheus_http_response_size_bytes_bucket{handler="/flags",le="1e+07"} 172
prometheus_http_response_size_bytes_bucket{handler="/flags",le="1e+08"} 172
prometheus_http_response_size_bytes_bucket{handler="/flags",le="1e+09"} 172
prometheus_http_response_size_bytes_bucket{handler="/flags",le="+Inf"} 172
prometheus_http_response_size_bytes_sum{handler="/flags"} 126248
prometheus_http_response_size_bytes_count{handler="/flags"} 172
prometheus_http_response_size_bytes_bucket{handler="/graph",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/graph",le="1000"} 2100
prometheus_http_response_size_bytes_bucket{handler="/graph",le="10000"} 2100
prometheus_http_response_size_bytes_bucket{handler="/graph",le="100000"} 2100
prometheus_http_response_size_bytes_bucket{handler="/graph",le="1e+06"} 2100
prometheus_http_response_size_bytes_bucket{handler="/graph",le="1e+07"} 2100
prometheus_http_response_size_bytes_bucket{handler="/graph",le="1e+08"} 2100
prometheus_http_response_size_bytes_bucket{handler="/graph",le="1e+09"} 2100
prometheus_http_response_size_bytes_bucket{handler="/graph",le="+Inf"} 2100
prometheus_http_response_size_bytes_sum{handler="/graph"} 1.5414e+06
prometheus_http_response_size_bytes_count{handler="/graph"} 2100
prometheus_http_response_size_bytes_bucket{handler="/manifest.json",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/manifest.json",le="1000"} 1214
prometheus_http_response_size_bytes_bucket{handler="/manifest.json",le="10000"} 1214
prometheus_http_response_size_bytes_bucket{handler="/manifest.json",le="100000"} 1214
prometheus_http_response_size_bytes_bucket{handler="/manifest.json",le="1e+06"} 1214
prometheus_http_response_size_bytes_bucket{handler="/manifest.json",le="1e+07"} 1214
prometheus_http_response_size_bytes_bucket{handler="/manifest.json",le="1e+08"} 1214
prometheus_http_response_size_bytes_bucket{handler="/manifest.json",le="1e+09"} 1214
prometheus_http_response_size_bytes_bucket{handler="/manifest.json",le="+Inf"} 1214
prometheus_http_response_size_bytes_sum{handler="/manifest.json"} 386052
prometheus_http_response_size_bytes_count{handler="/manifest.json"} 1214
prometheus_http_response_size_bytes_bucket{handler="/metrics",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/metrics",le="1000"} 0
prometheus_http_response_size_bytes_bucket{handler="/metrics",le="10000"} 77
prometheus_http_response_size_bytes_bucket{handler="/metrics",le="100000"} 454310
prometheus_http_response_size_bytes_bucket{handler="/metrics",le="1e+06"} 454316
prometheus_http_response_size_bytes_bucket{handler="/metrics",le="1e+07"} 454316
prometheus_http_response_size_bytes_bucket{handler="/metrics",le="1e+08"} 454316
prometheus_http_response_size_bytes_bucket{handler="/metrics",le="1e+09"} 454316
prometheus_http_response_size_bytes_bucket{handler="/metrics",le="+Inf"} 454316
prometheus_http_response_size_bytes_sum{handler="/metrics"} 6.092600949e+09
prometheus_http_response_size_bytes_count{handler="/metrics"} 454316
prometheus_http_response_size_bytes_bucket{handler="/rules",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/rules",le="1000"} 24
prometheus_http_response_size_bytes_bucket{handler="/rules",le="10000"} 24
prometheus_http_response_size_bytes_bucket{handler="/rules",le="100000"} 24
prometheus_http_response_size_bytes_bucket{handler="/rules",le="1e+06"} 24
prometheus_http_response_size_bytes_bucket{handler="/rules",le="1e+07"} 24
prometheus_http_response_size_bytes_bucket{handler="/rules",le="1e+08"} 24
prometheus_http_response_size_bytes_bucket{handler="/rules",le="1e+09"} 24
prometheus_http_response_size_bytes_bucket{handler="/rules",le="+Inf"} 24
prometheus_http_response_size_bytes_sum{handler="/rules"} 17616
prometheus_http_response_size_bytes_count{handler="/rules"} 24
prometheus_http_response_size_bytes_bucket{handler="/service-discovery",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/service-discovery",le="1000"} 26
prometheus_http_response_size_bytes_bucket{handler="/service-discovery",le="10000"} 26
prometheus_http_response_size_bytes_bucket{handler="/service-discovery",le="100000"} 26
prometheus_http_response_size_bytes_bucket{handler="/service-discovery",le="1e+06"} 26
prometheus_http_response_size_bytes_bucket{handler="/service-discovery",le="1e+07"} 26
prometheus_http_response_size_bytes_bucket{handler="/service-discovery",le="1e+08"} 26
prometheus_http_response_size_bytes_bucket{handler="/service-discovery",le="1e+09"} 26
prometheus_http_response_size_bytes_bucket{handler="/service-discovery",le="+Inf"} 26
prometheus_http_response_size_bytes_sum{handler="/service-discovery"} 19084
prometheus_http_response_size_bytes_count{handler="/service-discovery"} 26
prometheus_http_response_size_bytes_bucket{handler="/static/*filepath",le="100"} 10
prometheus_http_response_size_bytes_bucket{handler="/static/*filepath",le="1000"} 10
prometheus_http_response_size_bytes_bucket{handler="/static/*filepath",le="10000"} 13
prometheus_http_response_size_bytes_bucket{handler="/static/*filepath",le="100000"} 363
prometheus_http_response_size_bytes_bucket{handler="/static/*filepath",le="1e+06"} 2137
prometheus_http_response_size_bytes_bucket{handler="/static/*filepath",le="1e+07"} 3959
prometheus_http_response_size_bytes_bucket{handler="/static/*filepath",le="1e+08"} 3959
prometheus_http_response_size_bytes_bucket{handler="/static/*filepath",le="1e+09"} 3959
prometheus_http_response_size_bytes_bucket{handler="/static/*filepath",le="+Inf"} 3959
prometheus_http_response_size_bytes_sum{handler="/static/*filepath"} 4.878233448e+09
prometheus_http_response_size_bytes_count{handler="/static/*filepath"} 3959
prometheus_http_response_size_bytes_bucket{handler="/status",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/status",le="1000"} 25
prometheus_http_response_size_bytes_bucket{handler="/status",le="10000"} 25
prometheus_http_response_size_bytes_bucket{handler="/status",le="100000"} 25
prometheus_http_response_size_bytes_bucket{handler="/status",le="1e+06"} 25
prometheus_http_response_size_bytes_bucket{handler="/status",le="1e+07"} 25
prometheus_http_response_size_bytes_bucket{handler="/status",le="1e+08"} 25
prometheus_http_response_size_bytes_bucket{handler="/status",le="1e+09"} 25
prometheus_http_response_size_bytes_bucket{handler="/status",le="+Inf"} 25
prometheus_http_response_size_bytes_sum{handler="/status"} 18350
prometheus_http_response_size_bytes_count{handler="/status"} 25
prometheus_http_response_size_bytes_bucket{handler="/targets",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/targets",le="1000"} 65
prometheus_http_response_size_bytes_bucket{handler="/targets",le="10000"} 65
prometheus_http_response_size_bytes_bucket{handler="/targets",le="100000"} 65
prometheus_http_response_size_bytes_bucket{handler="/targets",le="1e+06"} 65
prometheus_http_response_size_bytes_bucket{handler="/targets",le="1e+07"} 65
prometheus_http_response_size_bytes_bucket{handler="/targets",le="1e+08"} 65
prometheus_http_response_size_bytes_bucket{handler="/targets",le="1e+09"} 65
prometheus_http_response_size_bytes_bucket{handler="/targets",le="+Inf"} 65
prometheus_http_response_size_bytes_sum{handler="/targets"} 47710
prometheus_http_response_size_bytes_count{handler="/targets"} 65
prometheus_http_response_size_bytes_bucket{handler="/tsdb-status",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/tsdb-status",le="1000"} 77
prometheus_http_response_size_bytes_bucket{handler="/tsdb-status",le="10000"} 77
prometheus_http_response_size_bytes_bucket{handler="/tsdb-status",le="100000"} 77
prometheus_http_response_size_bytes_bucket{handler="/tsdb-status",le="1e+06"} 77
prometheus_http_response_size_bytes_bucket{handler="/tsdb-status",le="1e+07"} 77
prometheus_http_response_size_bytes_bucket{handler="/tsdb-status",le="1e+08"} 77
prometheus_http_response_size_bytes_bucket{handler="/tsdb-status",le="1e+09"} 77
prometheus_http_response_size_bytes_bucket{handler="/tsdb-status",le="+Inf"} 77
prometheus_http_response_size_bytes_sum{handler="/tsdb-status"} 56518
prometheus_http_response_size_bytes_count{handler="/tsdb-status"} 77
prometheus_http_response_size_bytes_bucket{handler="/version",le="100"} 0
prometheus_http_response_size_bytes_bucket{handler="/version",le="1000"} 8
prometheus_http_response_size_bytes_bucket{handler="/version",le="10000"} 8
prometheus_http_response_size_bytes_bucket{handler="/version",le="100000"} 8
prometheus_http_response_size_bytes_bucket{handler="/version",le="1e+06"} 8
prometheus_http_response_size_bytes_bucket{handler="/version",le="1e+07"} 8
prometheus_http_response_size_bytes_bucket{handler="/version",le="1e+08"} 8
prometheus_http_response_size_bytes_bucket{handler="/version",le="1e+09"} 8
prometheus_http_response_size_bytes_bucket{handler="/version",le="+Inf"} 8
prometheus_http_response_size_bytes_sum{handler="/version"} 1424
prometheus_http_response_size_bytes_count{handler="/version"} 8
# HELP prometheus_notifications_alertmanagers_discovered The number of alertmanagers discovered and active.
# TYPE prometheus_notifications_alertmanagers_discovered gauge
prometheus_notifications_alertmanagers_discovered 0
# HELP prometheus_notifications_dropped_total Total number of alerts dropped due to errors when sending to Alertmanager.
# TYPE prometheus_notifications_dropped_total counter
prometheus_notifications_dropped_total 0
# HELP prometheus_notifications_queue_capacity The capacity of the alert notifications queue.
# TYPE prometheus_notifications_queue_capacity gauge
prometheus_notifications_queue_capacity 10000
# HELP prometheus_notifications_queue_length The number of alert notifications in the queue.
# TYPE prometheus_notifications_queue_length gauge
prometheus_notifications_queue_length 0
# HELP prometheus_ready Whether Prometheus startup was fully completed and the server is ready for normal operation.
# TYPE prometheus_ready gauge
prometheus_ready 1
# HELP prometheus_remote_storage_exemplars_in_total Exemplars in to remote storage, compare to exemplars out for queue managers.
# TYPE prometheus_remote_storage_exemplars_in_total counter
prometheus_remote_storage_exemplars_in_total 0
# HELP prometheus_remote_storage_highest_timestamp_in_seconds Highest timestamp that has come into the remote storage via the Appender interface, in seconds since epoch.
# TYPE prometheus_remote_storage_highest_timestamp_in_seconds gauge
prometheus_remote_storage_highest_timestamp_in_seconds 1.691568935e+09
# HELP prometheus_remote_storage_histograms_in_total HistogramSamples in to remote storage, compare to histograms out for queue managers.
# TYPE prometheus_remote_storage_histograms_in_total counter
prometheus_remote_storage_histograms_in_total 0
# HELP prometheus_remote_storage_samples_in_total Samples in to remote storage, compare to samples out for queue managers.
# TYPE prometheus_remote_storage_samples_in_total counter
prometheus_remote_storage_samples_in_total 3.356575681e+09
# HELP prometheus_remote_storage_string_interner_zero_reference_releases_total The number of times release has been called for strings that are not interned.
# TYPE prometheus_remote_storage_string_interner_zero_reference_releases_total counter
prometheus_remote_storage_string_interner_zero_reference_releases_total 0
# HELP prometheus_rule_evaluation_duration_seconds The duration for a rule to execute.
# TYPE prometheus_rule_evaluation_duration_seconds summary
prometheus_rule_evaluation_duration_seconds{quantile="0.5"} NaN
prometheus_rule_evaluation_duration_seconds{quantile="0.9"} NaN
prometheus_rule_evaluation_duration_seconds{quantile="0.99"} NaN
prometheus_rule_evaluation_duration_seconds_sum 0
prometheus_rule_evaluation_duration_seconds_count 0
# HELP prometheus_rule_group_duration_seconds The duration of rule group evaluations.
# TYPE prometheus_rule_group_duration_seconds summary
prometheus_rule_group_duration_seconds{quantile="0.01"} NaN
prometheus_rule_group_duration_seconds{quantile="0.05"} NaN
prometheus_rule_group_duration_seconds{quantile="0.5"} NaN
prometheus_rule_group_duration_seconds{quantile="0.9"} NaN
prometheus_rule_group_duration_seconds{quantile="0.99"} NaN
prometheus_rule_group_duration_seconds_sum 0
prometheus_rule_group_duration_seconds_count 0
# HELP prometheus_sd_azure_failures_total Number of Azure service discovery refresh failures.
# TYPE prometheus_sd_azure_failures_total counter
prometheus_sd_azure_failures_total 0
# HELP prometheus_sd_consul_rpc_duration_seconds The duration of a Consul RPC call in seconds.
# TYPE prometheus_sd_consul_rpc_duration_seconds summary
prometheus_sd_consul_rpc_duration_seconds{call="service",endpoint="catalog",quantile="0.5"} NaN
prometheus_sd_consul_rpc_duration_seconds{call="service",endpoint="catalog",quantile="0.9"} NaN
prometheus_sd_consul_rpc_duration_seconds{call="service",endpoint="catalog",quantile="0.99"} NaN
prometheus_sd_consul_rpc_duration_seconds_sum{call="service",endpoint="catalog"} 0
prometheus_sd_consul_rpc_duration_seconds_count{call="service",endpoint="catalog"} 0
prometheus_sd_consul_rpc_duration_seconds{call="services",endpoint="catalog",quantile="0.5"} NaN
prometheus_sd_consul_rpc_duration_seconds{call="services",endpoint="catalog",quantile="0.9"} NaN
prometheus_sd_consul_rpc_duration_seconds{call="services",endpoint="catalog",quantile="0.99"} NaN
prometheus_sd_consul_rpc_duration_seconds_sum{call="services",endpoint="catalog"} 0
prometheus_sd_consul_rpc_duration_seconds_count{call="services",endpoint="catalog"} 0
# HELP prometheus_sd_consul_rpc_failures_total The number of Consul RPC call failures.
# TYPE prometheus_sd_consul_rpc_failures_total counter
prometheus_sd_consul_rpc_failures_total 0
# HELP prometheus_sd_discovered_targets Current number of discovered targets.
# TYPE prometheus_sd_discovered_targets gauge
prometheus_sd_discovered_targets{config="cadvisor",name="scrape"} 1
prometheus_sd_discovered_targets{config="demo",name="scrape"} 3
prometheus_sd_discovered_targets{config="docker-hub-exporter",name="scrape"} 1
prometheus_sd_discovered_targets{config="node",name="scrape"} 1
prometheus_sd_discovered_targets{config="prometheus",name="scrape"} 1
# HELP prometheus_sd_dns_lookup_failures_total The number of DNS-SD lookup failures.
# TYPE prometheus_sd_dns_lookup_failures_total counter
prometheus_sd_dns_lookup_failures_total 0
# HELP prometheus_sd_dns_lookups_total The number of DNS-SD lookups.
# TYPE prometheus_sd_dns_lookups_total counter
prometheus_sd_dns_lookups_total 0
# HELP prometheus_sd_failed_configs Current number of service discovery configurations that failed to load.
# TYPE prometheus_sd_failed_configs gauge
prometheus_sd_failed_configs{name="notify"} 0
prometheus_sd_failed_configs{name="scrape"} 0
# HELP prometheus_sd_file_read_errors_total The number of File-SD read errors.
# TYPE prometheus_sd_file_read_errors_total counter
prometheus_sd_file_read_errors_total 0
# HELP prometheus_sd_file_scan_duration_seconds The duration of the File-SD scan in seconds.
# TYPE prometheus_sd_file_scan_duration_seconds summary
prometheus_sd_file_scan_duration_seconds{quantile="0.5"} NaN
prometheus_sd_file_scan_duration_seconds{quantile="0.9"} NaN
prometheus_sd_file_scan_duration_seconds{quantile="0.99"} NaN
prometheus_sd_file_scan_duration_seconds_sum 0
prometheus_sd_file_scan_duration_seconds_count 0
# HELP prometheus_sd_file_watcher_errors_total The number of File-SD errors caused by filesystem watch failures.
# TYPE prometheus_sd_file_watcher_errors_total counter
prometheus_sd_file_watcher_errors_total 0
# HELP prometheus_sd_http_failures_total Number of HTTP service discovery refresh failures.
# TYPE prometheus_sd_http_failures_total counter
prometheus_sd_http_failures_total 0
# HELP prometheus_sd_kubernetes_events_total The number of Kubernetes events handled.
# TYPE prometheus_sd_kubernetes_events_total counter
prometheus_sd_kubernetes_events_total{event="add",role="endpoints"} 0
prometheus_sd_kubernetes_events_total{event="add",role="endpointslice"} 0
prometheus_sd_kubernetes_events_total{event="add",role="ingress"} 0
prometheus_sd_kubernetes_events_total{event="add",role="node"} 0
prometheus_sd_kubernetes_events_total{event="add",role="pod"} 0
prometheus_sd_kubernetes_events_total{event="add",role="service"} 0
prometheus_sd_kubernetes_events_total{event="delete",role="endpoints"} 0
prometheus_sd_kubernetes_events_total{event="delete",role="endpointslice"} 0
prometheus_sd_kubernetes_events_total{event="delete",role="ingress"} 0
prometheus_sd_kubernetes_events_total{event="delete",role="node"} 0
prometheus_sd_kubernetes_events_total{event="delete",role="pod"} 0
prometheus_sd_kubernetes_events_total{event="delete",role="service"} 0
prometheus_sd_kubernetes_events_total{event="update",role="endpoints"} 0
prometheus_sd_kubernetes_events_total{event="update",role="endpointslice"} 0
prometheus_sd_kubernetes_events_total{event="update",role="ingress"} 0
prometheus_sd_kubernetes_events_total{event="update",role="node"} 0
prometheus_sd_kubernetes_events_total{event="update",role="pod"} 0
prometheus_sd_kubernetes_events_total{event="update",role="service"} 0
# HELP prometheus_sd_kuma_fetch_duration_seconds The duration of a Kuma MADS fetch call.
# TYPE prometheus_sd_kuma_fetch_duration_seconds summary
prometheus_sd_kuma_fetch_duration_seconds{quantile="0.5"} NaN
prometheus_sd_kuma_fetch_duration_seconds{quantile="0.9"} NaN
prometheus_sd_kuma_fetch_duration_seconds{quantile="0.99"} NaN
prometheus_sd_kuma_fetch_duration_seconds_sum 0
prometheus_sd_kuma_fetch_duration_seconds_count 0
# HELP prometheus_sd_kuma_fetch_failures_total The number of Kuma MADS fetch call failures.
# TYPE prometheus_sd_kuma_fetch_failures_total counter
prometheus_sd_kuma_fetch_failures_total 0
# HELP prometheus_sd_kuma_fetch_skipped_updates_total The number of Kuma MADS fetch calls that result in no updates to the targets.
# TYPE prometheus_sd_kuma_fetch_skipped_updates_total counter
prometheus_sd_kuma_fetch_skipped_updates_total 0
# HELP prometheus_sd_linode_failures_total Number of Linode service discovery refresh failures.
# TYPE prometheus_sd_linode_failures_total counter
prometheus_sd_linode_failures_total 0
# HELP prometheus_sd_nomad_failures_total Number of nomad service discovery refresh failures.
# TYPE prometheus_sd_nomad_failures_total counter
prometheus_sd_nomad_failures_total 0
# HELP prometheus_sd_received_updates_total Total number of update events received from the SD providers.
# TYPE prometheus_sd_received_updates_total counter
prometheus_sd_received_updates_total{name="scrape"} 10
# HELP prometheus_sd_updates_total Total number of update events sent to the SD consumers.
# TYPE prometheus_sd_updates_total counter
prometheus_sd_updates_total{name="scrape"} 1
# HELP prometheus_target_interval_length_seconds Actual intervals between scrapes.
# TYPE prometheus_target_interval_length_seconds summary
prometheus_target_interval_length_seconds{interval="15s",quantile="0.01"} 14.998853361
prometheus_target_interval_length_seconds{interval="15s",quantile="0.05"} 14.999142166
prometheus_target_interval_length_seconds{interval="15s",quantile="0.5"} 15.000002695
prometheus_target_interval_length_seconds{interval="15s",quantile="0.9"} 15.000691404
prometheus_target_interval_length_seconds{interval="15s",quantile="0.99"} 15.00151422
prometheus_target_interval_length_seconds_sum{interval="15s"} 4.767101075379941e+07
prometheus_target_interval_length_seconds_count{interval="15s"} 3.178064e+06
# HELP prometheus_target_metadata_cache_bytes The number of bytes that are currently used for storing metric metadata in the cache
# TYPE prometheus_target_metadata_cache_bytes gauge
prometheus_target_metadata_cache_bytes{scrape_job="cadvisor"} 4206
prometheus_target_metadata_cache_bytes{scrape_job="demo"} 17760
prometheus_target_metadata_cache_bytes{scrape_job="docker-hub-exporter"} 2069
prometheus_target_metadata_cache_bytes{scrape_job="node"} 13138
prometheus_target_metadata_cache_bytes{scrape_job="prometheus"} 11109
# HELP prometheus_target_metadata_cache_entries Total number of metric metadata entries in the cache
# TYPE prometheus_target_metadata_cache_entries gauge
prometheus_target_metadata_cache_entries{scrape_job="cadvisor"} 85
prometheus_target_metadata_cache_entries{scrape_job="demo"} 240
prometheus_target_metadata_cache_entries{scrape_job="docker-hub-exporter"} 41
prometheus_target_metadata_cache_entries{scrape_job="node"} 278
prometheus_target_metadata_cache_entries{scrape_job="prometheus"} 181
# HELP prometheus_target_scrape_pool_exceeded_label_limits_total Total number of times scrape pools hit the label limits, during sync or config reload.
# TYPE prometheus_target_scrape_pool_exceeded_label_limits_total counter
prometheus_target_scrape_pool_exceeded_label_limits_total 0
# HELP prometheus_target_scrape_pool_exceeded_target_limit_total Total number of times scrape pools hit the target limit, during sync or config reload.
# TYPE prometheus_target_scrape_pool_exceeded_target_limit_total counter
prometheus_target_scrape_pool_exceeded_target_limit_total 0
# HELP prometheus_target_scrape_pool_reloads_failed_total Total number of failed scrape pool reloads.
# TYPE prometheus_target_scrape_pool_reloads_failed_total counter
prometheus_target_scrape_pool_reloads_failed_total 0
# HELP prometheus_target_scrape_pool_reloads_total Total number of scrape pool reloads.
# TYPE prometheus_target_scrape_pool_reloads_total counter
prometheus_target_scrape_pool_reloads_total 0
# HELP prometheus_target_scrape_pool_sync_total Total number of syncs that were executed on a scrape pool.
# TYPE prometheus_target_scrape_pool_sync_total counter
prometheus_target_scrape_pool_sync_total{scrape_job="cadvisor"} 1
prometheus_target_scrape_pool_sync_total{scrape_job="demo"} 1
prometheus_target_scrape_pool_sync_total{scrape_job="docker-hub-exporter"} 1
prometheus_target_scrape_pool_sync_total{scrape_job="node"} 1
prometheus_target_scrape_pool_sync_total{scrape_job="prometheus"} 1
# HELP prometheus_target_scrape_pool_target_limit Maximum number of targets allowed in this scrape pool.
# TYPE prometheus_target_scrape_pool_target_limit gauge
prometheus_target_scrape_pool_target_limit{scrape_job="cadvisor"} 0
prometheus_target_scrape_pool_target_limit{scrape_job="demo"} 0
prometheus_target_scrape_pool_target_limit{scrape_job="docker-hub-exporter"} 0
prometheus_target_scrape_pool_target_limit{scrape_job="node"} 0
prometheus_target_scrape_pool_target_limit{scrape_job="prometheus"} 0
# HELP prometheus_target_scrape_pool_targets Current number of targets in this scrape pool.
# TYPE prometheus_target_scrape_pool_targets gauge
prometheus_target_scrape_pool_targets{scrape_job="cadvisor"} 1
prometheus_target_scrape_pool_targets{scrape_job="demo"} 3
prometheus_target_scrape_pool_targets{scrape_job="docker-hub-exporter"} 1
prometheus_target_scrape_pool_targets{scrape_job="node"} 1
prometheus_target_scrape_pool_targets{scrape_job="prometheus"} 1
# HELP prometheus_target_scrape_pools_failed_total Total number of scrape pool creations that failed.
# TYPE prometheus_target_scrape_pools_failed_total counter
prometheus_target_scrape_pools_failed_total 0
# HELP prometheus_target_scrape_pools_total Total number of scrape pool creation attempts.
# TYPE prometheus_target_scrape_pools_total counter
prometheus_target_scrape_pools_total 5
# HELP prometheus_target_scrapes_cache_flush_forced_total How many times a scrape cache was flushed due to getting big while scrapes are failing.
# TYPE prometheus_target_scrapes_cache_flush_forced_total counter
prometheus_target_scrapes_cache_flush_forced_total 0
# HELP prometheus_target_scrapes_exceeded_body_size_limit_total Total number of scrapes that hit the body size limit
# TYPE prometheus_target_scrapes_exceeded_body_size_limit_total counter
prometheus_target_scrapes_exceeded_body_size_limit_total 0
# HELP prometheus_target_scrapes_exceeded_sample_limit_total Total number of scrapes that hit the sample limit and were rejected.
# TYPE prometheus_target_scrapes_exceeded_sample_limit_total counter
prometheus_target_scrapes_exceeded_sample_limit_total 0
# HELP prometheus_target_scrapes_exemplar_out_of_order_total Total number of exemplar rejected due to not being out of the expected order.
# TYPE prometheus_target_scrapes_exemplar_out_of_order_total counter
prometheus_target_scrapes_exemplar_out_of_order_total 0
# HELP prometheus_target_scrapes_sample_duplicate_timestamp_total Total number of samples rejected due to duplicate timestamps but different values.
# TYPE prometheus_target_scrapes_sample_duplicate_timestamp_total counter
prometheus_target_scrapes_sample_duplicate_timestamp_total 0
# HELP prometheus_target_scrapes_sample_out_of_bounds_total Total number of samples rejected due to timestamp falling outside of the time bounds.
# TYPE prometheus_target_scrapes_sample_out_of_bounds_total counter
prometheus_target_scrapes_sample_out_of_bounds_total 0
# HELP prometheus_target_scrapes_sample_out_of_order_total Total number of samples rejected due to not being out of the expected order.
# TYPE prometheus_target_scrapes_sample_out_of_order_total counter
prometheus_target_scrapes_sample_out_of_order_total 0
# HELP prometheus_target_sync_failed_total Total number of target sync failures.
# TYPE prometheus_target_sync_failed_total counter
prometheus_target_sync_failed_total{scrape_job="cadvisor"} 0
prometheus_target_sync_failed_total{scrape_job="demo"} 0
prometheus_target_sync_failed_total{scrape_job="docker-hub-exporter"} 0
prometheus_target_sync_failed_total{scrape_job="node"} 0
prometheus_target_sync_failed_total{scrape_job="prometheus"} 0
# HELP prometheus_target_sync_length_seconds Actual interval to sync the scrape pool.
# TYPE prometheus_target_sync_length_seconds summary
prometheus_target_sync_length_seconds{scrape_job="cadvisor",quantile="0.01"} NaN
prometheus_target_sync_length_seconds{scrape_job="cadvisor",quantile="0.05"} NaN
prometheus_target_sync_length_seconds{scrape_job="cadvisor",quantile="0.5"} NaN
prometheus_target_sync_length_seconds{scrape_job="cadvisor",quantile="0.9"} NaN
prometheus_target_sync_length_seconds{scrape_job="cadvisor",quantile="0.99"} NaN
prometheus_target_sync_length_seconds_sum{scrape_job="cadvisor"} 7.952e-05
prometheus_target_sync_length_seconds_count{scrape_job="cadvisor"} 1
prometheus_target_sync_length_seconds{scrape_job="demo",quantile="0.01"} NaN
prometheus_target_sync_length_seconds{scrape_job="demo",quantile="0.05"} NaN
prometheus_target_sync_length_seconds{scrape_job="demo",quantile="0.5"} NaN
prometheus_target_sync_length_seconds{scrape_job="demo",quantile="0.9"} NaN
prometheus_target_sync_length_seconds{scrape_job="demo",quantile="0.99"} NaN
prometheus_target_sync_length_seconds_sum{scrape_job="demo"} 9.8357e-05
prometheus_target_sync_length_seconds_count{scrape_job="demo"} 1
prometheus_target_sync_length_seconds{scrape_job="docker-hub-exporter",quantile="0.01"} NaN
prometheus_target_sync_length_seconds{scrape_job="docker-hub-exporter",quantile="0.05"} NaN
prometheus_target_sync_length_seconds{scrape_job="docker-hub-exporter",quantile="0.5"} NaN
prometheus_target_sync_length_seconds{scrape_job="docker-hub-exporter",quantile="0.9"} NaN
prometheus_target_sync_length_seconds{scrape_job="docker-hub-exporter",quantile="0.99"} NaN
prometheus_target_sync_length_seconds_sum{scrape_job="docker-hub-exporter"} 0.000158701
prometheus_target_sync_length_seconds_count{scrape_job="docker-hub-exporter"} 1
prometheus_target_sync_length_seconds{scrape_job="node",quantile="0.01"} NaN
prometheus_target_sync_length_seconds{scrape_job="node",quantile="0.05"} NaN
prometheus_target_sync_length_seconds{scrape_job="node",quantile="0.5"} NaN
prometheus_target_sync_length_seconds{scrape_job="node",quantile="0.9"} NaN
prometheus_target_sync_length_seconds{scrape_job="node",quantile="0.99"} NaN
prometheus_target_sync_length_seconds_sum{scrape_job="node"} 6.7394e-05
prometheus_target_sync_length_seconds_count{scrape_job="node"} 1
prometheus_target_sync_length_seconds{scrape_job="prometheus",quantile="0.01"} NaN
prometheus_target_sync_length_seconds{scrape_job="prometheus",quantile="0.05"} NaN
prometheus_target_sync_length_seconds{scrape_job="prometheus",quantile="0.5"} NaN
prometheus_target_sync_length_seconds{scrape_job="prometheus",quantile="0.9"} NaN
prometheus_target_sync_length_seconds{scrape_job="prometheus",quantile="0.99"} NaN
prometheus_target_sync_length_seconds_sum{scrape_job="prometheus"} 0.000140406
prometheus_target_sync_length_seconds_count{scrape_job="prometheus"} 1
# HELP prometheus_template_text_expansion_failures_total The total number of template text expansion failures.
# TYPE prometheus_template_text_expansion_failures_total counter
prometheus_template_text_expansion_failures_total 0
# HELP prometheus_template_text_expansions_total The total number of template text expansions.
# TYPE prometheus_template_text_expansions_total counter
prometheus_template_text_expansions_total 0
# HELP prometheus_treecache_watcher_goroutines The current number of watcher goroutines.
# TYPE prometheus_treecache_watcher_goroutines gauge
prometheus_treecache_watcher_goroutines 0
# HELP prometheus_treecache_zookeeper_failures_total The total number of ZooKeeper failures.
# TYPE prometheus_treecache_zookeeper_failures_total counter
prometheus_treecache_zookeeper_failures_total 0
# HELP prometheus_tsdb_blocks_loaded Number of currently loaded data blocks
# TYPE prometheus_tsdb_blocks_loaded gauge
prometheus_tsdb_blocks_loaded 26
# HELP prometheus_tsdb_checkpoint_creations_failed_total Total number of checkpoint creations that failed.
# TYPE prometheus_tsdb_checkpoint_creations_failed_total counter
prometheus_tsdb_checkpoint_creations_failed_total 0
# HELP prometheus_tsdb_checkpoint_creations_total Total number of checkpoint creations attempted.
# TYPE prometheus_tsdb_checkpoint_creations_total counter
prometheus_tsdb_checkpoint_creations_total 474
# HELP prometheus_tsdb_checkpoint_deletions_failed_total Total number of checkpoint deletions that failed.
# TYPE prometheus_tsdb_checkpoint_deletions_failed_total counter
prometheus_tsdb_checkpoint_deletions_failed_total 0
# HELP prometheus_tsdb_checkpoint_deletions_total Total number of checkpoint deletions attempted.
# TYPE prometheus_tsdb_checkpoint_deletions_total counter
prometheus_tsdb_checkpoint_deletions_total 474
# HELP prometheus_tsdb_clean_start -1: lockfile is disabled. 0: a lockfile from a previous execution was replaced. 1: lockfile creation was clean
# TYPE prometheus_tsdb_clean_start gauge
prometheus_tsdb_clean_start 1
# HELP prometheus_tsdb_compaction_chunk_range_seconds Final time range of chunks on their first compaction
# TYPE prometheus_tsdb_compaction_chunk_range_seconds histogram
prometheus_tsdb_compaction_chunk_range_seconds_bucket{le="100"} 3084
prometheus_tsdb_compaction_chunk_range_seconds_bucket{le="400"} 3084
prometheus_tsdb_compaction_chunk_range_seconds_bucket{le="1600"} 3084
prometheus_tsdb_compaction_chunk_range_seconds_bucket{le="6400"} 3084
prometheus_tsdb_compaction_chunk_range_seconds_bucket{le="25600"} 5036
prometheus_tsdb_compaction_chunk_range_seconds_bucket{le="102400"} 7657
prometheus_tsdb_compaction_chunk_range_seconds_bucket{le="409600"} 17962
prometheus_tsdb_compaction_chunk_range_seconds_bucket{le="1.6384e+06"} 27999
prometheus_tsdb_compaction_chunk_range_seconds_bucket{le="6.5536e+06"} 2.2085066e+07
prometheus_tsdb_compaction_chunk_range_seconds_bucket{le="2.62144e+07"} 2.3478928e+07
prometheus_tsdb_compaction_chunk_range_seconds_bucket{le="+Inf"} 2.3478928e+07
prometheus_tsdb_compaction_chunk_range_seconds_sum 4.993065535949e+13
prometheus_tsdb_compaction_chunk_range_seconds_count 2.3478928e+07
# HELP prometheus_tsdb_compaction_chunk_samples Final number of samples on their first compaction
# TYPE prometheus_tsdb_compaction_chunk_samples histogram
prometheus_tsdb_compaction_chunk_samples_bucket{le="4"} 6806
prometheus_tsdb_compaction_chunk_samples_bucket{le="6"} 8275
prometheus_tsdb_compaction_chunk_samples_bucket{le="9"} 9749
prometheus_tsdb_compaction_chunk_samples_bucket{le="13.5"} 11648
prometheus_tsdb_compaction_chunk_samples_bucket{le="20.25"} 15362
prometheus_tsdb_compaction_chunk_samples_bucket{le="30.375"} 19706
prometheus_tsdb_compaction_chunk_samples_bucket{le="45.5625"} 22398
prometheus_tsdb_compaction_chunk_samples_bucket{le="68.34375"} 25850
prometheus_tsdb_compaction_chunk_samples_bucket{le="102.515625"} 37038
prometheus_tsdb_compaction_chunk_samples_bucket{le="153.7734375"} 2.1909093e+07
prometheus_tsdb_compaction_chunk_samples_bucket{le="230.66015625"} 2.3442215e+07
prometheus_tsdb_compaction_chunk_samples_bucket{le="345.990234375"} 2.3478928e+07
prometheus_tsdb_compaction_chunk_samples_bucket{le="+Inf"} 2.3478928e+07
prometheus_tsdb_compaction_chunk_samples_sum 2.91077361e+09
prometheus_tsdb_compaction_chunk_samples_count 2.3478928e+07
# HELP prometheus_tsdb_compaction_chunk_size_bytes Final size of chunks on their first compaction
# TYPE prometheus_tsdb_compaction_chunk_size_bytes histogram
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="32"} 9605
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="48"} 5.306284e+06
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="72"} 8.030099e+06
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="108"} 1.0143528e+07
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="162"} 1.1324631e+07
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="243"} 1.2191395e+07
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="364.5"} 1.9477401e+07
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="546.75"} 2.2510685e+07
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="820.125"} 2.3041801e+07
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="1230.1875"} 2.3477375e+07
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="1845.28125"} 2.3478885e+07
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="2767.921875"} 2.3478928e+07
prometheus_tsdb_compaction_chunk_size_bytes_bucket{le="+Inf"} 2.3478928e+07
prometheus_tsdb_compaction_chunk_size_bytes_sum 5.09471941e+09
prometheus_tsdb_compaction_chunk_size_bytes_count 2.3478928e+07
# HELP prometheus_tsdb_compaction_duration_seconds Duration of compaction runs
# TYPE prometheus_tsdb_compaction_duration_seconds histogram
prometheus_tsdb_compaction_duration_seconds_bucket{le="1"} 1345
prometheus_tsdb_compaction_duration_seconds_bucket{le="2"} 1389
prometheus_tsdb_compaction_duration_seconds_bucket{le="4"} 1399
prometheus_tsdb_compaction_duration_seconds_bucket{le="8"} 1404
prometheus_tsdb_compaction_duration_seconds_bucket{le="16"} 1408
prometheus_tsdb_compaction_duration_seconds_bucket{le="32"} 1408
prometheus_tsdb_compaction_duration_seconds_bucket{le="64"} 1408
prometheus_tsdb_compaction_duration_seconds_bucket{le="128"} 1408
prometheus_tsdb_compaction_duration_seconds_bucket{le="256"} 1408
prometheus_tsdb_compaction_duration_seconds_bucket{le="512"} 1408
prometheus_tsdb_compaction_duration_seconds_bucket{le="1024"} 1408
prometheus_tsdb_compaction_duration_seconds_bucket{le="2048"} 1408
prometheus_tsdb_compaction_duration_seconds_bucket{le="4096"} 1408
prometheus_tsdb_compaction_duration_seconds_bucket{le="8192"} 1408
prometheus_tsdb_compaction_duration_seconds_bucket{le="+Inf"} 1408
prometheus_tsdb_compaction_duration_seconds_sum 581.4450447419997
prometheus_tsdb_compaction_duration_seconds_count 1408
# HELP prometheus_tsdb_compaction_populating_block Set to 1 when a block is currently being written to the disk.
# TYPE prometheus_tsdb_compaction_populating_block gauge
prometheus_tsdb_compaction_populating_block 0
# HELP prometheus_tsdb_compactions_failed_total Total number of compactions that failed for the partition.
# TYPE prometheus_tsdb_compactions_failed_total counter
prometheus_tsdb_compactions_failed_total 0
# HELP prometheus_tsdb_compactions_skipped_total Total number of skipped compactions due to disabled auto compaction.
# TYPE prometheus_tsdb_compactions_skipped_total counter
prometheus_tsdb_compactions_skipped_total 0
# HELP prometheus_tsdb_compactions_total Total number of compactions that were executed for the partition.
# TYPE prometheus_tsdb_compactions_total counter
prometheus_tsdb_compactions_total 1408
# HELP prometheus_tsdb_compactions_triggered_total Total number of triggered compactions for the partition.
# TYPE prometheus_tsdb_compactions_triggered_total counter
prometheus_tsdb_compactions_triggered_total 114448
# HELP prometheus_tsdb_data_replay_duration_seconds Time taken to replay the data on disk.
# TYPE prometheus_tsdb_data_replay_duration_seconds gauge
prometheus_tsdb_data_replay_duration_seconds 1.009768347
# HELP prometheus_tsdb_exemplar_exemplars_appended_total Total number of appended exemplars.
# TYPE prometheus_tsdb_exemplar_exemplars_appended_total counter
prometheus_tsdb_exemplar_exemplars_appended_total 0
# HELP prometheus_tsdb_exemplar_exemplars_in_storage Number of exemplars currently in circular storage.
# TYPE prometheus_tsdb_exemplar_exemplars_in_storage gauge
prometheus_tsdb_exemplar_exemplars_in_storage 0
# HELP prometheus_tsdb_exemplar_last_exemplars_timestamp_seconds The timestamp of the oldest exemplar stored in circular storage. Useful to check for what timerange the current exemplar buffer limit allows. This usually means the last timestampfor all exemplars for a typical setup. This is not true though if one of the series timestamp is in future compared to rest series.
# TYPE prometheus_tsdb_exemplar_last_exemplars_timestamp_seconds gauge
prometheus_tsdb_exemplar_last_exemplars_timestamp_seconds 0
# HELP prometheus_tsdb_exemplar_max_exemplars Total number of exemplars the exemplar storage can store, resizeable.
# TYPE prometheus_tsdb_exemplar_max_exemplars gauge
prometheus_tsdb_exemplar_max_exemplars 0
# HELP prometheus_tsdb_exemplar_out_of_order_exemplars_total Total number of out of order exemplar ingestion failed attempts.
# TYPE prometheus_tsdb_exemplar_out_of_order_exemplars_total counter
prometheus_tsdb_exemplar_out_of_order_exemplars_total 0
# HELP prometheus_tsdb_exemplar_series_with_exemplars_in_storage Number of series with exemplars currently in circular storage.
# TYPE prometheus_tsdb_exemplar_series_with_exemplars_in_storage gauge
prometheus_tsdb_exemplar_series_with_exemplars_in_storage 0
# HELP prometheus_tsdb_head_active_appenders Number of currently active appender transactions
# TYPE prometheus_tsdb_head_active_appenders gauge
prometheus_tsdb_head_active_appenders 0
# HELP prometheus_tsdb_head_chunks Total number of chunks in the head block.
# TYPE prometheus_tsdb_head_chunks gauge
prometheus_tsdb_head_chunks 32505
# HELP prometheus_tsdb_head_chunks_created_total Total number of chunks created in the head
# TYPE prometheus_tsdb_head_chunks_created_total counter
prometheus_tsdb_head_chunks_created_total 2.3511433e+07
# HELP prometheus_tsdb_head_chunks_removed_total Total number of chunks removed in the head
# TYPE prometheus_tsdb_head_chunks_removed_total counter
prometheus_tsdb_head_chunks_removed_total 2.3478928e+07
# HELP prometheus_tsdb_head_chunks_storage_size_bytes Size of the chunks_head directory.
# TYPE prometheus_tsdb_head_chunks_storage_size_bytes gauge
prometheus_tsdb_head_chunks_storage_size_bytes 1.0312949e+07
# HELP prometheus_tsdb_head_gc_duration_seconds Runtime of garbage collection in the head block.
# TYPE prometheus_tsdb_head_gc_duration_seconds summary
prometheus_tsdb_head_gc_duration_seconds_sum 9.467746949000002
prometheus_tsdb_head_gc_duration_seconds_count 946
# HELP prometheus_tsdb_head_max_time Maximum timestamp of the head block. The unit is decided by the library consumer.
# TYPE prometheus_tsdb_head_max_time gauge
prometheus_tsdb_head_max_time 1.691568935233e+12
# HELP prometheus_tsdb_head_max_time_seconds Maximum timestamp of the head block.
# TYPE prometheus_tsdb_head_max_time_seconds gauge
prometheus_tsdb_head_max_time_seconds 1.691568935e+09
# HELP prometheus_tsdb_head_min_time Minimum time bound of the head block. The unit is decided by the library consumer.
# TYPE prometheus_tsdb_head_min_time gauge
prometheus_tsdb_head_min_time 1.691560800116e+12
# HELP prometheus_tsdb_head_min_time_seconds Minimum time bound of the head block.
# TYPE prometheus_tsdb_head_min_time_seconds gauge
prometheus_tsdb_head_min_time_seconds 1.6915608e+09
# HELP prometheus_tsdb_head_out_of_order_samples_appended_total Total number of appended out of order samples.
# TYPE prometheus_tsdb_head_out_of_order_samples_appended_total counter
prometheus_tsdb_head_out_of_order_samples_appended_total 0
# HELP prometheus_tsdb_head_samples_appended_total Total number of appended samples.
# TYPE prometheus_tsdb_head_samples_appended_total counter
prometheus_tsdb_head_samples_appended_total{type="float"} 2.910749015e+09
prometheus_tsdb_head_samples_appended_total{type="histogram"} 0
# HELP prometheus_tsdb_head_series Total number of series in the head block.
# TYPE prometheus_tsdb_head_series gauge
prometheus_tsdb_head_series 7479
# HELP prometheus_tsdb_head_series_created_total Total number of series created in the head
# TYPE prometheus_tsdb_head_series_created_total counter
prometheus_tsdb_head_series_created_total 20509
# HELP prometheus_tsdb_head_series_not_found_total Total number of requests for series that were not found.
# TYPE prometheus_tsdb_head_series_not_found_total counter
prometheus_tsdb_head_series_not_found_total 0
# HELP prometheus_tsdb_head_series_removed_total Total number of series removed in the head
# TYPE prometheus_tsdb_head_series_removed_total counter
prometheus_tsdb_head_series_removed_total 13030
# HELP prometheus_tsdb_head_truncations_failed_total Total number of head truncations that failed.
# TYPE prometheus_tsdb_head_truncations_failed_total counter
prometheus_tsdb_head_truncations_failed_total 0
# HELP prometheus_tsdb_head_truncations_total Total number of head truncations attempted.
# TYPE prometheus_tsdb_head_truncations_total counter
prometheus_tsdb_head_truncations_total 946
# HELP prometheus_tsdb_isolation_high_watermark The highest TSDB append ID that has been given out.
# TYPE prometheus_tsdb_isolation_high_watermark gauge
prometheus_tsdb_isolation_high_watermark 3.178071e+06
# HELP prometheus_tsdb_isolation_low_watermark The lowest TSDB append ID that is still referenced.
# TYPE prometheus_tsdb_isolation_low_watermark gauge
prometheus_tsdb_isolation_low_watermark 3.178071e+06
# HELP prometheus_tsdb_lowest_timestamp Lowest timestamp value stored in the database. The unit is decided by the library consumer.
# TYPE prometheus_tsdb_lowest_timestamp gauge
prometheus_tsdb_lowest_timestamp 1.656871201332e+12
# HELP prometheus_tsdb_lowest_timestamp_seconds Lowest timestamp value stored in the database.
# TYPE prometheus_tsdb_lowest_timestamp_seconds gauge
prometheus_tsdb_lowest_timestamp_seconds 1.656871201e+09
# HELP prometheus_tsdb_mmap_chunk_corruptions_total Total number of memory-mapped chunk corruptions.
# TYPE prometheus_tsdb_mmap_chunk_corruptions_total counter
prometheus_tsdb_mmap_chunk_corruptions_total 0
# HELP prometheus_tsdb_out_of_bound_samples_total Total number of out of bound samples ingestion failed attempts with out of order support disabled.
# TYPE prometheus_tsdb_out_of_bound_samples_total counter
prometheus_tsdb_out_of_bound_samples_total{type="float"} 0
# HELP prometheus_tsdb_out_of_order_samples_total Total number of out of order samples ingestion failed attempts due to out of order being disabled.
# TYPE prometheus_tsdb_out_of_order_samples_total counter
prometheus_tsdb_out_of_order_samples_total{type="float"} 0
prometheus_tsdb_out_of_order_samples_total{type="histogram"} 0
# HELP prometheus_tsdb_reloads_failures_total Number of times the database failed to reloadBlocks block data from disk.
# TYPE prometheus_tsdb_reloads_failures_total counter
prometheus_tsdb_reloads_failures_total 0
# HELP prometheus_tsdb_reloads_total Number of times the database reloaded block data from disk.
# TYPE prometheus_tsdb_reloads_total counter
prometheus_tsdb_reloads_total 113966
# HELP prometheus_tsdb_retention_limit_bytes Max number of bytes to be retained in the tsdb blocks, configured 0 means disabled
# TYPE prometheus_tsdb_retention_limit_bytes gauge
prometheus_tsdb_retention_limit_bytes 0
# HELP prometheus_tsdb_size_retentions_total The number of times that blocks were deleted because the maximum number of bytes was exceeded.
# TYPE prometheus_tsdb_size_retentions_total counter
prometheus_tsdb_size_retentions_total 0
# HELP prometheus_tsdb_snapshot_replay_error_total Total number snapshot replays that failed.
# TYPE prometheus_tsdb_snapshot_replay_error_total counter
prometheus_tsdb_snapshot_replay_error_total 0
# HELP prometheus_tsdb_storage_blocks_bytes The number of bytes that are currently used for local storage by all blocks.
# TYPE prometheus_tsdb_storage_blocks_bytes gauge
prometheus_tsdb_storage_blocks_bytes 2.8325792087e+10
# HELP prometheus_tsdb_symbol_table_size_bytes Size of symbol table in memory for loaded blocks
# TYPE prometheus_tsdb_symbol_table_size_bytes gauge
prometheus_tsdb_symbol_table_size_bytes 8072
# HELP prometheus_tsdb_time_retentions_total The number of times that blocks were deleted because the maximum time limit was exceeded.
# TYPE prometheus_tsdb_time_retentions_total counter
prometheus_tsdb_time_retentions_total 4
# HELP prometheus_tsdb_tombstone_cleanup_seconds The time taken to recompact blocks to remove tombstones.
# TYPE prometheus_tsdb_tombstone_cleanup_seconds histogram
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="0.005"} 0
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="0.01"} 0
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="0.025"} 0
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="0.05"} 0
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="0.1"} 0
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="0.25"} 0
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="0.5"} 0
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="1"} 0
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="2.5"} 0
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="5"} 0
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="10"} 0
prometheus_tsdb_tombstone_cleanup_seconds_bucket{le="+Inf"} 0
prometheus_tsdb_tombstone_cleanup_seconds_sum 0
prometheus_tsdb_tombstone_cleanup_seconds_count 0
# HELP prometheus_tsdb_too_old_samples_total Total number of out of order samples ingestion failed attempts with out of support enabled, but sample outside of time window.
# TYPE prometheus_tsdb_too_old_samples_total counter
prometheus_tsdb_too_old_samples_total{type="float"} 0
# HELP prometheus_tsdb_vertical_compactions_total Total number of compactions done on overlapping blocks.
# TYPE prometheus_tsdb_vertical_compactions_total counter
prometheus_tsdb_vertical_compactions_total 0
# HELP prometheus_tsdb_wal_completed_pages_total Total number of completed pages.
# TYPE prometheus_tsdb_wal_completed_pages_total counter
prometheus_tsdb_wal_completed_pages_total 619540
# HELP prometheus_tsdb_wal_corruptions_total Total number of WAL corruptions.
# TYPE prometheus_tsdb_wal_corruptions_total counter
prometheus_tsdb_wal_corruptions_total 0
# HELP prometheus_tsdb_wal_fsync_duration_seconds Duration of write log fsync.
# TYPE prometheus_tsdb_wal_fsync_duration_seconds summary
prometheus_tsdb_wal_fsync_duration_seconds{quantile="0.5"} NaN
prometheus_tsdb_wal_fsync_duration_seconds{quantile="0.9"} NaN
prometheus_tsdb_wal_fsync_duration_seconds{quantile="0.99"} NaN
prometheus_tsdb_wal_fsync_duration_seconds_sum 3.7139673240000013
prometheus_tsdb_wal_fsync_duration_seconds_count 946
# HELP prometheus_tsdb_wal_page_flushes_total Total number of page flushes.
# TYPE prometheus_tsdb_wal_page_flushes_total counter
prometheus_tsdb_wal_page_flushes_total 3.797337e+06
# HELP prometheus_tsdb_wal_segment_current Write log segment index that TSDB is currently writing to.
# TYPE prometheus_tsdb_wal_segment_current gauge
prometheus_tsdb_wal_segment_current 11552
# HELP prometheus_tsdb_wal_storage_size_bytes Size of the write log directory.
# TYPE prometheus_tsdb_wal_storage_size_bytes gauge
prometheus_tsdb_wal_storage_size_bytes 5.7052862e+07
# HELP prometheus_tsdb_wal_truncate_duration_seconds Duration of WAL truncation.
# TYPE prometheus_tsdb_wal_truncate_duration_seconds summary
prometheus_tsdb_wal_truncate_duration_seconds_sum 216.84362857700015
prometheus_tsdb_wal_truncate_duration_seconds_count 474
# HELP prometheus_tsdb_wal_truncations_failed_total Total number of write log truncations that failed.
# TYPE prometheus_tsdb_wal_truncations_failed_total counter
prometheus_tsdb_wal_truncations_failed_total 0
# HELP prometheus_tsdb_wal_truncations_total Total number of write log truncations attempted.
# TYPE prometheus_tsdb_wal_truncations_total counter
prometheus_tsdb_wal_truncations_total 474
# HELP prometheus_tsdb_wal_writes_failed_total Total number of write log writes that failed.
# TYPE prometheus_tsdb_wal_writes_failed_total counter
prometheus_tsdb_wal_writes_failed_total 0
# HELP prometheus_web_federation_errors_total Total number of errors that occurred while sending federation responses.
# TYPE prometheus_web_federation_errors_total counter
prometheus_web_federation_errors_total 0
# HELP prometheus_web_federation_warnings_total Total number of warnings that occurred while sending federation responses.
# TYPE prometheus_web_federation_warnings_total counter
prometheus_web_federation_warnings_total 0
# HELP promhttp_metric_handler_requests_in_flight Current number of scrapes being served.
# TYPE promhttp_metric_handler_requests_in_flight gauge
promhttp_metric_handler_requests_in_flight 1
# HELP promhttp_metric_handler_requests_total Total number of scrapes by HTTP status code.
# TYPE promhttp_metric_handler_requests_total counter
promhttp_metric_handler_requests_total{code="200"} 454316
promhttp_metric_handler_requests_total{code="500"} 0
promhttp_metric_handler_requests_total{code="503"} 0
```

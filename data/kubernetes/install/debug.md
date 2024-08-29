## debug etcdctl
```bash
journalctl -u etcd.service 
journalctl -u etcd.service | grep '"error":"dial tcp 192.168'


systemctl status etcd.service

etcdctl endpoint --cluster health
etcdctl endpoint --cluster status

curl -L http://localhost:2379/metrics
# curl: (56) Recv failure: Connection reset by peer
```

## install
[docs](https://grafana.com/docs/grafana/latest/setup-grafana/installation/debian/)
```bash
sudo apt-get install -y apt-transport-https \
  && sudo apt-get install -y software-properties-common wget \
  && sudo wget -q -O /usr/share/keyrings/grafana.key https://apt.grafana.com/gpg.key \
  && echo "deb [signed-by=/usr/share/keyrings/grafana.key] https://apt.grafana.com stable main" \
  | sudo tee -a /etc/apt/sources.list.d/grafana.list \
  && sudo apt-get update \
  && sudo apt-get install grafana-enterprise
```

## docker
```bash
docker run -d -p 3000:3000 grafana/grafana-enterprise
```


## start server
```bash
sudo systemctl daemon-reload
sudo systemctl start grafana-server
sudo systemctl status grafana-server

sudo systemctl enable grafana-server.service


curl http://localhost:3000/login; echo 
```

## data source
1- go to http://10.89.10.121:3000/datasources
2- Add data source
3- InfluxDB
4- URL http://127.0.0.1:8086
5- Database telegraf
6- Save & test


## Monitor Websites

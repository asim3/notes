## InfluxDB
```bash
wget -q https://repos.influxdata.com/influxdb.key
echo '23a1c8836f0afc5ed24e0486339d7cc8f6790b83886c4c96995b88a061c5bb5d influxdb.key' | sha256sum -c && cat influxdb.key | gpg --dearmor | sudo tee /etc/apt/trusted.gpg.d/influxdb.gpg > /dev/null
echo 'deb [signed-by=/etc/apt/trusted.gpg.d/influxdb.gpg] https://repos.influxdata.com/debian stable main' | sudo tee /etc/apt/sources.list.d/influxdata.list

sudo apt-get update && sudo apt-get install telegraf influxdb
```


## show db
```bash
influxd

```


## data source (InfluxDB)
```bash
cat /etc/telegraf/telegraf.conf

sudo nano /etc/telegraf/telegraf.d/my_monitor.conf
'
[[inputs.http_response]]
urls = ["https://google.com", "https://qu.edu.sa"]
timeout = 30s
'
```


## restart telegraf
```bash
sudo systemctl restart telegraf
sudo systemctl status telegraf
```

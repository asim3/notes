## install Oracle extenstion

```bash
apt-get -y update \
    && apt-get -y install  curl libaio1 zip \
    && mkdir /opt/oracle \
    && curl --insecure 'https://download.oracle.com/otn_software/linux/instantclient/19600/instantclient-basic-linux.x64-19.6.0.0.0dbru.zip' --output /opt/oracle/instantclient-basic-linux.zip \
    && curl --insecure 'https://download.oracle.com/otn_software/linux/instantclient/19600/instantclient-sdk-linux.x64-19.6.0.0.0dbru.zip' --output /opt/oracle/instantclient-sdk-linux.zip \
    && unzip '/opt/oracle/instantclient-basic-linux.zip' -d /opt/oracle \
    && unzip '/opt/oracle/instantclient-sdk-linux.zip' -d /opt/oracle \
    && rm /opt/oracle/instantclient-*.zip \
    && mv /opt/oracle/instantclient_* /opt/oracle/instantclient \
    && echo /opt/oracle/instantclient/ > /etc/ld.so.conf.d/oracle-insantclient.conf \
    && ldconfig


apt-get install -y \
    default-libmysqlclient-dev \
    unixodbc-dev \
    unixodbc \
    libpq-dev
```

## fix import cx_Oracle

```bash
import sys
import oracledb

oracledb.version = "8.3.0"
oracledb.init_oracle_client(lib_dir=None)
sys.modules["cx_Oracle"] = oracledb
```

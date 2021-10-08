```bash
version=17

jdk_url=https://download.oracle.com/java/${version}/latest/jdk-${version}_linux-x64_bin.tar.gz


mkdir -p /tmp/java_jdk \
  && cd /tmp/java_jdk/ \
  && curl -Lo /tmp/java_jdk/jdk.tar.gz ${jdk_url} \
  && curl -Lo /tmp/java_jdk/jdk.tar.gz.sha256 ${jdk_url}.sha256 \
  && echo "  /tmp/java_jdk/jdk.tar.gz" >> /tmp/java_jdk/jdk.tar.gz.sha256 


cd /tmp/java_jdk/ \
  && sha256sum -c /tmp/java_jdk/jdk.tar.gz.sha256 \
  && tar -xzf /tmp/java_jdk/jdk.tar.gz \
  && sudo mkdir -p /usr/lib/java \
  && sudo tar --extract --file "/tmp/java_jdk/jdk.tar.gz" --directory "/usr/lib/java" --strip-components 1 \
  && sudo ln -s /usr/lib/java/bin/java /usr/bin/java


java --version
```

## Verify SSL
```bash
curl -vI https://del-7.asim3.com
# *   Trying 172.67.207.14:443...
# * TCP_NODELAY set
# * Connected to del-7.asim3.com (172.67.207.14) port 443 (#0)
# * ALPN, offering h2
# * ALPN, offering http/1.1
# * successfully set certificate verify locations:
# *   CAfile: /etc/ssl/certs/ca-certificates.crt
#   CApath: /etc/ssl/certs
# * TLSv1.3 (OUT), TLS handshake, Client hello (1):
# * TLSv1.3 (IN), TLS handshake, Server hello (2):
# * TLSv1.3 (IN), TLS handshake, Encrypted Extensions (8):
# * TLSv1.3 (IN), TLS handshake, Certificate (11):
# * TLSv1.3 (IN), TLS handshake, CERT verify (15):
# * TLSv1.3 (IN), TLS handshake, Finished (20):
# * TLSv1.3 (OUT), TLS change cipher, Change cipher spec (1):
# * TLSv1.3 (OUT), TLS handshake, Finished (20):
# * SSL connection using TLSv1.3 / TLS_AES_256_GCM_SHA384
# * ALPN, server accepted to use h2
# * Server certificate:
# *  subject: C=US; ST=California; L=San Francisco; O=Cloudflare, Inc.; CN=sni.cloudflaressl.com
# *  start date: Jul 14 00:00:00 2021 GMT
# *  expire date: Jul 13 23:59:59 2022 GMT
# *  subjectAltName: host "del-7.asim3.com" matched cert's "*.asim3.com"
# *  issuer: C=US; O=Cloudflare, Inc.; CN=Cloudflare Inc ECC CA-3
# *  SSL certificate verify ok.
```

# DNS Record
[DNS Check](https://mxtoolbox.com/DNSCheck.aspx)

[cloud flare](https://dash.cloudflare.com/login)


## NameServer records
NS records
```bash
ns01.domaincontrol.com
ns02.domaincontrol.com
ns03.domaincontrol.com
ns04.domaincontrol.com

aaa.ns.cloudflare.com
bbb.ns.cloudflare.com
```


## Website records
A records IPv4 - AAAA records IPv6
```bash
123.456.678.910      asim.com
123.456.678.911   aa.asim.com

@  # root domain
```


## Canonical name records
CName is An `alias` or `redirect`
```text
Name              Destination
www.asim.com      asim.com
ftp.asim.com      @
mail.asim.com     mail1.asim.com
email.asim.com    mail1.asim.com

*.asim.com        asim.com
```


## Mail exchange records
MX records
```text
Domain      Mail Server      Priority    TTL(caching)  Proxy status
asim.com    mail1.asim.com   10          auto          DNS only
asim.com    mail2.asim.com   20          auto          DNS only
asim.com    mail3.asim.com   50          default       DNS only
```


## Informational records
TXT records "for verification"
```bash
Name            Content
asim.com        "abc=123"
tls.asim.com    "TLS-site-verification-1234abc"
info.asim.com   "abc=123;xyz=ABC"
```


## Workflow
```text
1. Create a Cloudflare account
2. Add the domain to Cloudflare
3. Confirm that the DNS records are added
4. Change the website A record in your Cloudflare to the server IP
5. Change NS records at your domain registrar to point to Cloudflare
6. DNS changes can take time up to 48 hours
7. Reset client browser cache
```

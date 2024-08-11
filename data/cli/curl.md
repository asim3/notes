## CURL
```bash
curl google.com

# Follow redirects
curl -L google.com

# write to file instead of stdout
curl -o my_new_file_name.txt google.com

# O capital: write to a file with the original name
curl -O https://raw.githubusercontent.com/asim3/notes/master/data/master.txt

# Silent mode
curl -s -O https://raw.githubusercontent.com/asim3/notes/master/data/master.txt
curl -sO https://raw.githubusercontent.com/asim3/notes/master/data/master.txt

# run the file in command line
curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash

# Allow insecure server connections when using SSL
curl -k https://0.0.0.0:40499

# sending multiple headers
curl -H "Accept: application/json" -H "Content-Type: application/json" https://google.com

# CURL in readable JSON format
curl https://jsonplaceholder.typicode.com/users | json_pp

# embedded text
curl -s https://storage.googleapis.com/kubernetes-release/`echo release`/stable.txt

# get Header only
curl -sSL -D - alzod.com -o /dev/null
```


## curl POST
```bash
curl --request POST \
  --url 'http://google.com' \
  --header 'Authorization: Bearer GUiOiJ1c2VyoX8' \
  --header 'Content-Type: application/json' \
  --data '{"name": "asim"}'


# PUT
curl --request PUT \
  --url 'http://google.com' \
  --header 'Authorization: Bearer GUiOiJ1c2VyoX8' \
  --header 'Content-Type: application/json'


# DELETE
curl --request DELETE \
  --url 'http://google.com' \
  --header 'Authorization: Bearer GUiOiJ1c2VyoX8' \
  --header 'Content-Type: application/json'


# GET
curl --request GET \
  --url 'http://google.com' \
  --header 'Authorization: Bearer GUiOiJ1c2VyoX8' \
  --header 'Content-Type: application/json'
```


## Debug
```bash
# insecure connections (No SSL)
curl -k https://www.google.com

# Show document info only
curl -I https://www.google.com

# verify the remote server
curl https://www.google.com -I --cacert ./ca-certificates.crt


curl https://www.google.com -I --ssl-allow-beast              # Allow security flaw to improve interop
curl https://www.google.com -I --ssl-auto-client-cert         # Use auto client certificate (Schannel)
curl https://www.google.com -I --ssl-no-revoke                # Disable cert revocation checks (Schannel)
curl https://www.google.com -I --ssl-reqd                     # Require SSL/TLS
curl https://www.google.com -I --ssl-revoke-best-effort       # Ignore missing/offline cert CRL dist points

curl https://www.google.com -I -x # --proxy                   # [protocol://]host[:port] Use this proxy
curl https://www.google.com -I --proxy-anyauth                # Pick any proxy authentication method
curl https://www.google.com -I --proxy-basic                  # Use Basic authentication on the proxy
curl https://www.google.com -I --proxy-cacert                 # <file> CA certificate to verify peer against for proxy
curl https://www.google.com -I --proxy-capath                 # <dir> CA directory to verify peer against for proxy
curl https://www.google.com -I --proxy-cert                   # <cert[:passwd]> Set client certificate for proxy
curl https://www.google.com -I --proxy-cert-type              # <type> Client certificate type for HTTPS proxy
curl https://www.google.com -I --proxy-ciphers                # <list> SSL ciphers to use for proxy
curl https://www.google.com -I --proxy-crlfile                # <file> Set a CRL list for proxy
curl https://www.google.com -I --proxy-digest                 # Use Digest authentication on the proxy
curl https://www.google.com -I --proxy-header                 # <header/@file> Pass custom header(s) to proxy
curl https://www.google.com -I --proxy-insecure               # Do HTTPS proxy connections without verifying the proxy
curl https://www.google.com -I --proxy-key                    # <key>    Private key for HTTPS proxy
curl https://www.google.com -I --proxy-key-type               # <type> Private key file type for proxy
curl https://www.google.com -I --proxy-negotiate              # Use HTTP Negotiate (SPNEGO) authentication on the proxy
curl https://www.google.com -I --proxy-ntlm                   # Use NTLM authentication on the proxy
curl https://www.google.com -I --proxy-pass                   # <phrase> Pass phrase for the private key for HTTPS proxy
curl https://www.google.com -I --proxy-pinnedpubkey           # <hashes> FILE/HASHES public key to verify proxy with
curl https://www.google.com -I --proxy-service-name           # <name> SPNEGO proxy service name
curl https://www.google.com -I --proxy-ssl-allow-beast        # Allow security flaw for interop for HTTPS proxy
curl https://www.google.com -I --proxy-ssl-auto-client-cert   # Use auto client certificate for proxy (Schannel)
curl https://www.google.com -I --proxy-tls13-ciphers          # <ciphersuite list> TLS 1.3 proxy cipher suites
curl https://www.google.com -I --proxy-tlsauthtype            # <type> TLS authentication type for HTTPS proxy
curl https://www.google.com -I --proxy-tlspassword            # <string> TLS password for HTTPS proxy
curl https://www.google.com -I --proxy-tlsuser                # <name> TLS username for HTTPS proxy
curl https://www.google.com -I --proxy-tlsv1                  # Use TLSv1 for HTTPS proxy

curl https://www.google.com -I -U # --proxy-user              # <user:password> Proxy user and password
curl https://www.google.com -I --proxy1.0                     # <host[:port]> Use HTTP/1.0 proxy on given port

curl https://www.google.com -I -p # --proxytunnel             # Operate through an HTTP proxy tunnel (using CONNECT)
```


## default CA certificate store
Convert it from crt to PEM using the OpenSSL tool
```bash
openssl x509 -inform DES -in yourdownloaded.crt -out outcert.pem -text
```

> Add the root CA (the CA signing the server certificate) to `/etc/ssl/certs/ca-certificates.crt`

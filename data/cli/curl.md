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


## Testing POST requests
`https://httpbin.org/anything`       Returns most of the below.
`https://httpbin.org/ip`             Returns Origin IP.
`https://httpbin.org/headers`        Returns header dict.
`https://httpbin.org/get`            Returns GET data.
`https://httpbin.org/post`           Returns POST data.
`https://httpbin.org/put`            Returns PUT data.
`https://httpbin.org/delete`         Returns DELETE data
`https://httpbin.org/gzip`           Returns gzip-encoded data.
`https://httpbin.org/status/:code`   Returns given HTTP Status code.
```bash
curl -H "AAA: BBB" -H "CCC: DDD" -d "YYYY=123&zzzz=789" -X POST https://httpbin.org/post
# {
#   "args": {},
#   "data": "",
#   "files": {},
#   "form": {
#     "YYYY": "123",
#     "zzzz": "789"
#   },
#   "headers": {
#     "Aaa": "BBB",
#     "Accept": "*/*",
#     "Ccc": "DDD",
#     "Content-Length": "17",
#     "Content-Type": "application/x-www-form-urlencoded",
#     "Host": "httpbin.org",
#     "User-Agent": "curl/7.76.1",
#     "X-Amzn-Trace-Id": "Root=1-698c36de-7c3f716d6e98bead6351cc33"
#   },
#   "json": null,
#   "origin": "46.240.124.1, 85.194.96.49",
#   "url": "https://httpbin.org/post"
# }
```


## Debug
```bash
# insecure connections (No SSL)
curl -k https://www.google.com

# Show document info only
curl -I https://www.google.com

# verify the remote server
curl https://www.google.com -I --cacert ./ca-certificates.crt
```
> Add the root CA (the CA signing the server certificate) to `/etc/ssl/certs/ca-certificates.crt`

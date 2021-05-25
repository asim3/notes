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

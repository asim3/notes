## install on Ubuntu 22
```bash
# Add cloudflare gpg key
sudo mkdir -p --mode=0755 /usr/share/keyrings \
&& curl -fsSL https://pkg.cloudflare.com/cloudflare-main.gpg -o /tmp/cloudflare-main.gpg \
&& sudo cp /tmp/cloudflare-main.gpg /usr/share/keyrings/cloudflare-main.gpg


# Add this repo to your apt repositories
echo 'deb [signed-by=/usr/share/keyrings/cloudflare-main.gpg] https://pkg.cloudflare.com/cloudflared jammy main' \
| sudo tee /etc/apt/sources.list.d/cloudflared.list

# install cloudflared
sudo apt-get update
sudo apt-get install cloudflared
```


## Cloudflare Tunnel
[docs](https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/)

```bash
cloudflared tunnel login
# Please open the following URL and log in with your Cloudflare account:
# https://dash.cloudflare.com/argotunnel?aud=abc...
# Leave cloudflared running to download the cert automatically.
# .....
# You have successfully logged in.
# If you wish to copy your credentials to a server, they have been saved to:
# /home/ansible/.cloudflared/cert.pem


cloudflared tunnel create test-by-asim-1
# Tunnel credentials written to /home/ansible/.cloudflared/48698ba5-699f-4ed4-979e-f8609a8eeb29.json. cloudflared chose this file based on where your origin certificate was found. Keep this file secret. To revoke these credentials, delete the tunnel.
# Created tunnel test-by-asim-1 with id 48698ba5-699f-4ed4-979e-f8609a8eeb29


cloudflared tunnel list
# You can obtain more detailed information for each tunnel with `cloudflared tunnel info <name/uuid>`
# ID                                   NAME           CREATED              CONNECTIONS 
# 48698ba5-699f-4ed4-979e-f8609a8eeb29 test-by-asim-1 2023-07-07T16:06:28Z             


ls -l /home/ansible/.cloudflared/
# total 8
# -rw--w---- 1 ansible ansible  161 Jul  7 19:06 48698ba5-699f-4ed4-979e-f8609a8eeb29.json
# -rw------- 1 ansible ansible 1946 Jul  7 19:03 cert.pem


cat <<EOF > ~/.cloudflared/config.yml
tunnel: 48698ba5-699f-4ed4-979e-f8609a8eeb29
credentials-file: /home/ansible/.cloudflared/48698ba5-699f-4ed4-979e-f8609a8eeb29.json
warp-routing:
  enabled: true
EOF


# Start routing traffic
cloudflared tunnel route ip add 10.0.0.0/8 test-by-asim-1

# Run the tunnel
cloudflared tunnel run test-by-asim-1


cloudflared tunnel info test-by-asim-1
# NAME:     test-by-asim-1
# ID:       48698ba5-699f-4ed4-979e-f8609a8eeb29
# CREATED:  2023-07-07 16:06:28.576188 +0000 UTC

# CONNECTOR ID                         CREATED              ARCHITECTURE VERSION  ORIGIN IP      EDGE         
# d2057afb-1ac2-4a66-8bb0-7f6ef1e39c95 2023-07-07T16:51:04Z linux_amd64  2023.6.1 162.19.205.101 2xFRA, 2xVIE 


cloudflared tunnel route ip show
# NETWORK    VIRTUAL NET ID                       COMMENT TUNNEL ID                            TUNNEL NAME    CREATED              DELETED 
# 10.0.0.0/8 1a89b5ab-7947-400b-bc6b-fafc389cf992         48698ba5-699f-4ed4-979e-f8609a8eeb29 test-by-asim-1 2023-07-07T16:50:15Z -       
```


## Tunnel as a service
```bash
cat <<EOF | sudo tee -a /usr/local/etc/cloudflared/config.yml
tunnel: 48698ba5-699f-4ed4-979e-f8609a8eeb29
credentials-file: /home/ansible/.cloudflared/48698ba5-699f-4ed4-979e-f8609a8eeb29.json
warp-routing:
  enabled: true
EOF


sudo cloudflared service install
sudo systemctl start cloudflared
sudo systemctl status cloudflared
sudo systemctl restart cloudflared
```


## Cloudflare Workers
[docs](https://developers.cloudflare.com/workers/)
Build serverless applications and deploy instantly across the globe
for exceptional performance, reliability, and scale.
```bash

```


## Cloudflare Pages
[docs](https://developers.cloudflare.com/pages/)
Deploy dynamic front-end applications
```bash

```


## Cloudflare R2
[docs](https://developers.cloudflare.com/r2/)
Cloudflare R2 Storage allows developers to store large amounts of
unstructured data without the costly egress bandwidth fees associated
with typical cloud storage services.
```bash

```


## Access policies
[docs]()
```bash

```

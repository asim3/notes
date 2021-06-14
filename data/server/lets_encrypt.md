# LetsEncrypt

ACME (Automatic Certificate Management Environment)

## validate your DNS
1. SSH into the server
2. Remove old certbot `sudo apt-get remove certbot`
3. Install Certbot `sudo snap install --classic certbot`
4. `sudo certbot certonly --webroot`
5. copy the certificates from `/etc/letsencrypt/live/marcel.guru/fullchain.pem`

6. `sudo certbot renew --dry-run`

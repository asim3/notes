# SSL

## certs
```bash
heroku certs -a delete-7
# Name                Display Name  Common Name(s)     Expires               Trusted  Type  Domains
# ──────────────────  ────────────  ─────────────────  ────────────────────  ───────  ────  ───────
# baryonyx-56449      test cert 3   cloudflare         2031-07-13 12:21 UTC  False    SNI   0
# velociraptor-72802                direct.tw0900.com  2021-10-13 11:28 UTC  True     ACM
```


## domains 
```bash
heroku domains -a delete-7
# === delete-7 Heroku Domain
# delete-7.herokuapp.com

# === delete-7 Custom Domains
#  Domain Name         DNS Record Type DNS Target                           SNI Endpoint       
#  ─────────────────── ─────────────── ──────────────────────────────────── ────────────────── 
#  ataa.asim3.com      CNAME           clear-horn.herokudns.com             undefined          
#  del-7.asim3.com     CNAME           fathomlessc0vxgy.herokudns.com       undefined          
#  delete-7.asim3.com  CNAME           cardiovasc2n9k3eh8c6z7.herokudns.com undefined          
#  delete-7.tw0900.com CNAME           introductog9qhi.herokudns.com        undefined          
#  delete-9.tw0900.com CNAME           mathematicb8a9i.herokudns.com        undefined          
#  direct.tw0900.com   CNAME           tropical-wok28w.herokudns.com        velociraptor-72802 
#  sss.tw0900.com      CNAME           fluffy-wil2h.herokudns.com           undefined          
```


## link
```bash
heroku domains:update del-7.asim3.com --cert baryonyx-56449 -a delete-7
# Updating del-7.asim3.com to use baryonyx-56449 certificate... done
```

## list ingress rules
```bash
kubectl get ingress
```


## deploy
```bash
kubectl apply -f domain-ingress-rule.yaml
kubectl apply -f sub-domain-ingress-rule.yaml
kubectl apply -f sub-folder-ingress-rule.yaml

kubectl get      ingress
kubectl describe ingress
```


## test
```bash
curl -s http://whoami.example.com:31301/
# <head><title>
#   400 The plain HTTP request was sent to HTTPS port
# </title></head>

curl -s http://whoami.example.com:8000/blue

curl -s http://whoami.example.com:8000/blue
# <title>   503 Service Temporarily Unavailable   </title>

curl -s 192.168.99.100:8000/blue
# <title>   404 Not Found   </title>

curl -s 192.168.99.100:31301
# <head><title>
#   400 The plain HTTP request was sent to HTTPS port
# </title></head>

curl -s 192.168.99.100:8000
# <!DOCTYPE html>
# <html>
# <title>   Welcome to nginx!   </title>
```

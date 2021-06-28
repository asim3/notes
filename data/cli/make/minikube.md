## PyPI
`nano makefile`
```makefile
SHELL=/bin/bash


install-minikube:
	minikube delete
	minikube start
	- minikube addons enable ingress || sleep 12
	minikube addons enable ingress


add-minikube-hosts:
	echo "$$(minikube ip)  django.kube-helm.local" | sudo tee -a /etc/hosts 
	echo "$$(minikube ip)  whoami.kube-helm.local" | sudo tee -a /etc/hosts 
	echo "$$(minikube ip)  mariadb.kube-helm.local" | sudo tee -a /etc/hosts 
	echo "$$(minikube ip)  phpmyadmin.kube-helm.local" | sudo tee -a /etc/hosts 
	echo "$$(minikube ip)  wordpress.kube-helm.local" | sudo tee -a /etc/hosts 
	echo "$$(minikube ip)  osclass.kube-helm.local" | sudo tee -a /etc/hosts 


verify-ingress-addon:
	for i in {2..300}; do  \
		echo $$i; \
		sleep 2; \
		is_ready=$$(kubectl get -n ingress-nginx deployment/ingress-nginx-controller -o jsonpath='{.status.readyReplicas}' || echo $$i ); \
		if [ "$$is_ready" == "1" ]; then break; fi; \
		if [ "$$i" == "300" ]; then exit 111; fi; \
	done;
```

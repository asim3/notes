# Terraform

[docs](https://www.terraform.io/intro/index.html)
[providers](https://registry.terraform.io/browse/providers)


## install
```bash
mkdir -p /tmp/terraform_tmp \
    && cd /tmp/terraform_tmp \
    && curl -SL -o ./terraform_tmp.zip https://releases.hashicorp.com/terraform/1.0.9/terraform_1.0.9_linux_amd64.zip \
    && unzip ./terraform_tmp.zip \
    && sudo mv ./terraform /usr/local/bin/terraform \
    && sudo chmod +x /usr/local/bin/terraform

terraform version
```


## configuration
`nano main.tf`
```ini
terraform {
  required_providers {
    kubernetes = {
      source = "hashicorp/kubernetes"
      version = "2.5.0"
    }
  }
}


# provider configuration
provider "kubernetes" {
  config_path    = "~/.kube/config"
  config_context = "minikube"
}


resource "kubernetes_namespace" "my_tf_example" {
  metadata {
    name = "my-first-namespace"
  }
}
```


## commands
```bash
terraform init


terraform validate
# Success! The configuration is valid.

terraform plan
# kubernetes_namespace.my_tf_example will be created


terraform apply
# Apply complete! Resources: 1 added, 0 changed, 0 destroyed.


terraform show


terraform destroy
# kubernetes_namespace.my_tf_example will be destroyed
```

## kubernetes
`nano configuration.tf`
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
```


## kubernetes
`nano namespace.tf`
```ini
resource "kubernetes_namespace" "my_1_example" {
  metadata {
    name = "my-1-namespace"
  }
}


resource "kubernetes_namespace" "my_2_example" {
  metadata {
    name = "my-2-namespace"
  }
}
```

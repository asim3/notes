## kubernetes
`nano providers.tf`
```ini
terraform {
  required_providers {
    kubernetes = {
      source = "hashicorp/kubernetes"
      version = "2.5.0"
    }
    helm = {
      source = "hashicorp/helm"
      version = "2.3.0"
    }
  }
}


# provider configuration
provider "kubernetes" {
  config_path = "~/.kube/config"
  config_context = "minikube"
}


provider "helm" {
  kubernetes {
    config_path = "~/.kube/config"
    config_context = "minikube"
  }
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


## Helm
`nano argo.tf`
```ini
resource "helm_release" "my-argo" {
  name = "my-argo-cd"
  namespace = "argo"
  create_namespace = true
  repository = "https://argoproj.github.io/argo-helm"
  chart = "argo-cd"
  version = "3.25.2"
  timeout = 700

  values = [
    "${file("values/argo.yaml")}"
  ]
}
```


`nano values/argo.yaml`
```yaml
dex:
  enabled: false
```

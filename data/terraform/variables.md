# Variables
`nano variables.tf`
```tf
variable "my_namespace" { 
    description = "My New Namespace"  
    type = string  
    default = "my-variable-namespace"
}
```


`nano namespace.tf`
```ini
resource "kubernetes_namespace" "my_3_example" {
  metadata {
    name = var.my_namespace
  }
}
```


## apply
```bash
terraform apply

# OR

terraform apply -var my_namespace=my-cli-namespace
```

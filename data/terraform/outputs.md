## outputs
`nano outputs.tf`
```tf
output "my_1_output" {
  description = "my description 1 name"
  value = kubernetes_namespace.my_1_example.id
}


output "my_2_output" {
  description = "my description 2 name"
  value = kubernetes_namespace.my_2_example.metadata.0.uid
}
```


## apply
```bash
terraform apply
# Apply complete! Resources: 0 added, 0 changed, 0 destroyed.

# Outputs:

# my_1_output = "my-1-namespace"
# my_2_output = "9470e410-f479-4002-ba5c-8e8c7ba12eb5"
```

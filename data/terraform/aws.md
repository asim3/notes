## setup aws
```bash
aws configure 
# Access Key ID:
# Secret Access Key:
```


## configuration
`nano main.tf`
```ini
terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.27"
    }
  }

  required_version = ">= 0.14.9"
}



# Configure the AWS Provider
provider "aws" {
  profile = "default"
  region = "us-west-2"
}



# EC2 new ID: aws_instance.app_server
resource "aws_instance" "app_server" {
  ami           = "ami-830c94e3"
  instance_type = "t2.micro"

  tags = {
    Name = "ExampleAppServerInstance"
  }
}
```


## commands
```bash
terraform init

terraform plan
# Error: no valid credential sources for Terraform AWS Provider found.

terraform apply

terraform destroy
```

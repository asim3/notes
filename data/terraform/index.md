# Terraform

[docs](https://www.terraform.io/intro/index.html)


## install
```bash
curl -SL -o /tmp/terraform_tmp.zip https://releases.hashicorp.com/terraform/1.0.7/terraform_1.0.7_linux_amd64.zip \
    && unzip /tmp/terraform_tmp.zip \
    && sudo mv /tmp/terraform /usr/local/bin/terraform \
    && sudo chmod +x /usr/local/bin/terraform

terraform version
```

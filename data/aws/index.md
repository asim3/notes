## install
```txt
mkdir /tmp/aws_cli \
  && curl -o /tmp/aws_cli/awscliv2.zip https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip \
  && cd /tmp/aws_cli/ \
  && unzip ./awscliv2.zip \
  && sudo ./aws/install

aws --version
```


## setup aws
```bash
aws configure 
# Access Key ID:
# Secret Access Key:
```


## Buckets
```txt
aws s3 ls
aws s3 ls s3://mybucket/
aws s3 mb s3://make_private_bucket
aws s3api create-bucket --bucket my_public_bucket --acl public-read
```


## copy S3
```txt
aws s3 cp [from] [to] --recursive
aws s3 sync [from] [to] --delete
```


```txt
aws s3 cp s3://download_from_bucket/ ./download_from_bucket/ --recursive
aws s3 cp ./copy_to_bucket.txt s3://mybucket/f.txt --acl public-read
aws s3 cp ./copy_to_bucket/ s3://copy_to_bucket/ --acl public-read --recursive
aws s3 cp s3://copy_to_bucket/ ./download_from_bucket/ --acl public-read --recursive --exclude "*.mp4" --exclude "*.zip"
aws s3 cp . s3://copy_to_bucket/ --acl public-read --recursive --exclude "*" --include "*.jpg"
aws s3 sync ./upload_to_bucket/ s3://mybucket --delete --acl public-read
aws s3 sync s3://mybucket ./download_from_bucket/ --delete
```


## remove S3
```txt
aws s3 rm s3://my_bucket/remove_file.txt
aws s3 rm s3://mybucket/remove_directories_and_contents --recursive
aws s3 rm s3://mybucket/remove_directories_and_contents --recursive --exclude "*.jpg"

aws s3 rb s3://remove_bucket_and_contents --force
aws s3api delete-bucket --bucket delete_mybucket
```


## Permissions
```txt
aws s3api put-object-acl --bucket mybucket --key "root/directorie/file.txt" --acl private
aws s3api put-object-acl --bucket mybucket --key "root/directorie/file.txt" --acl public-read
aws s3api put-object-acl --bucket mybucket --key "root/directorie/file.txt" --acl public-read-write
```


## limited URL lifetime 
> To  create  a  pre-signed  URL  with the default one hour lifetime that links to an object in an S3 bucketshell
```txt
aws s3 presign s3://mybucket/ --expires-in 604800
```


## CORS configuration
```txt
<CORSConfiguration>
  <CORSRule>
    <AllowedOrigin>*</AllowedOrigin>
    <AllowedMethod>GET</AllowedMethod>
  </CORSRule>
</CORSConfiguration>
```

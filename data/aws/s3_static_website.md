# Static Website
[guide](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html#block-public-access-static-site)

> Amazon S3 website endpoints do not support HTTPS or access points

[Setting access permissions](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteAccessPermissionsReqd.html)

[cloudfront https](https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-https-requests-s3)

[custom domain](https://docs.aws.amazon.com/AmazonS3/latest/userguide/website-hosting-custom-domain-walkthrough.html)


## New Bucket
- create a bucket `asim3.com`
- Object Ownership: `ACLs disabled`
- Block Public Access: Clear `Block all public access`
- Static website hosting: `Enable`
- Index document: `my_new_page_3.html`


## Add a bucket policy
- Choose `Permissions`
- Under `Bucket Policy`, choose `Edit`
- paste it in the `Bucket policy editor`
```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::asim3.com/*"
            ]
        }
    ]
}
```



## endpoints
- http://`bucket-name`.s3-website.`Region`.amazonaws.com/`object-name`
- http://`asim3.com`.s3-website.eu-central-1.amazonaws.com
- http://`asim3.com`.s3-website.eu-central-1.amazonaws.com/my_new_page_3.html

other:
- http://`asim3.com`.s3.eu-central-1.amazonaws.com/my_new_page_3.html



## DNS CNAME
- add a DNS CNAME record that points to `asim3.com`.s3-website.`Region`.amazonaws.com
- asim3.com > CNAME to > asim3.com.s3-website.eu-central-1.amazonaws.com


# !!!
## Object access control lists
```xml
<Grant>
  <Grantee xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:type="Group">
    <URI>http://acs.amazonaws.com/groups/global/AllUsers</URI>
  </Grantee>
  <Permission>READ</Permission>
</Grant>
```

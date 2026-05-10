# project
```bash
# Project NAME  : My Organization
# Project ID    : my-organization
# PROJECT NUMBER: 
gcloud projects describe my-organization --format="value(projectNumber)"
```


# service account
```bash
# List SA
gcloud iam service-accounts list --project=my-organization

# Grant New Role:
gcloud projects add-iam-policy-binding my-organization --member="serviceAccount:my-service-account@my-organization.iam.gserviceaccount.com" --role="roles/run.developer"

# Name      : My Service Account
# Unique ID : 123456789
# Email     : my-service-account@my-organization.iam.gserviceaccount.com
```


## permissions
```
# Artifact Registry Writer

# Workload Identity User

```


##  (WIF)
```bash
# POOL_ID
gcloud iam workload-identity-pools list --location=global --project=my-organization
```
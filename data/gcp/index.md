# Google Cloud Platform (GCP)

[Install the Google Cloud CLI](https://docs.cloud.google.com/sdk/docs/install-sdk)

> **Note:** If you don't plan to keep the resources that you create in this procedure, create a project instead of selecting an existing project. After you finish these steps, you can delete the project, removing all resources associated with the project.


## setup gcloud CLI
```bash
gcloud --version

gcloud -h

# Initialize or reinitialize gcloud
gcloud init
```


## configuration
```bash
gcloud config get-value project

gcloud config set project [YOUR_PROJECT_ID]

gcloud config list
```


## install components
```bash
gcloud components -h

gcloud components update
# Beginning update. This process may take several minutes.
# All components are up to date.

gcloud components list

gcloud components install [COMPONENT_ID]

gcloud components remove  [COMPONENT_ID]
```

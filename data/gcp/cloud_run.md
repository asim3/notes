## run
Manage your Cloud Run applications.
```bash
gcloud run --help

gcloud run deploy <service-name> --image <image_name>

gcloud run deploy --help
```


### services
View and manage your Cloud Run services.
```bash
gcloud run services list
#    SERVICE        REGION       URL                                        LAST DEPLOYED AT
# +  myapp-service  me-central1  https://myapp-service.me-central1.run.app  2026-03-29T14:49
# +  nginx-service  me-central1  https://nginx-service.me-central1.run.app  2026-03-29T14:39
```


## deploy
```bash
gcloud run deploy other-service \
  --image=docker.io/asim3/nginx-template:latest \
  --port=80 \
  --allow-unauthenticated \
  --region=me-central1


gcloud run deploy myapp-service --image=docker.io/asim3/nginx-template:latest --port=80 --allow-unauthenticated --region=me-central1
```


## delete
```bash
gcloud run services delete myapp-service --region=me-central1
gcloud run services delete nginx-service --region=me-central1
```


### revisions
View and manage your Cloud Run revisions.
```bash
gcloud run revisions list --region=me-central1
#    REVISION                 ACTIVE  SERVICE        DEPLOYED               
# +  myapp-service-00002-zkl  yes     myapp-service  2026-03-29 14:48:58 UTC
# +  myapp-service-00001-rn4          myapp-service  2026-03-29 14:48:16 UTC
# +  nginx-service-00001-ghz  yes     nginx-service  2026-03-29 14:39:32 UTC
```


### jobs
View and manage your Cloud Run jobs.
```bash
gcloud run jobs -h
```


### regions
View available Cloud Run (fully managed) regions.
```bash
gcloud run regions list
# NAME
# us-west1
# us-west2
# us-west3
# us-west4
```


### multi-region-services
Manage your Cloud Run multi-region services.
```bash
gcloud run multi-region-services list
# Listed 0 items.
```


### domain-mappings
View and manage your Cloud Run for Anthos domain mappings.
```bash
gcloud run domain-mappings list
# ERROR: (gcloud.run.domain-mappings.list) This command group is in beta for fully managed Cloud Run; use `gcloud beta run domain-mappings`.
```

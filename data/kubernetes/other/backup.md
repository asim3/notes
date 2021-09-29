# Backup and Migrate
[github](https://github.com/vmware-tanzu/velero)
[docs](https://velero.io/docs/v1.6/)


## Install velero CLI
```bash
velero_version=v1.6.3
velero_link="https://github.com/vmware-tanzu/velero/releases/download/${velero_version}/velero-${velero_version}-linux-amd64.tar.gz"


mkdir -p /tmp/velero \
    && curl -Lo /tmp/velero/velero.tar.gz ${velero_link} \
    && cd /tmp/velero/ \
    && tar -xvf ./velero.tar.gz \
    && sudo mv ./velero-${velero_version}-linux-amd64/velero /usr/local/bin/velero


velero --help

velero version
# An error occurred: Get "https://192.168.99.173:8443/api": dial tcp 192.168.99.173:8443: i/o timeout
```


## helm
[charts](https://github.com/vmware-tanzu/helm-charts/blob/main/charts/velero/README.md)
```bash
helm repo add vmware-tanzu https://vmware-tanzu.github.io/helm-charts

helm search repo vmware-tanzu
# NAME               	CHART VERSION	APP VERSION	DESCRIPTION            
# vmware-tanzu/velero	2.23.10      	1.6.3      	A Helm chart for velero


helm show values vmware-tanzu/velero
```


## configuration
```yaml
image:
  tag: v1.6.3


configuration:
  provider: aws


  # Parameters for the `default` BackupStorageLocation. See
  # https://velero.io/docs/v1.6/api-types/backupstoragelocation/
  backupStorageLocation:
    # name is the name of the backup storage location where backups should be stored. If a name is not provided,
    # a backup storage location will be created with the name "default". Optional.
    name:
    # provider is the name for the backup storage location provider. If omitted
    # `configuration.provider` will be used instead.
    provider:
    # bucket is the name of the bucket to store backups in. Required.
    bucket:
    # caCert defines a base64 encoded CA bundle to use when verifying TLS connections to the provider. Optional.
    caCert:
    # prefix is the directory under which all Velero data should be stored within the bucket. Optional.
    prefix:
    # default indicates this location is the default backup storage location. Optional.
    default:
    # Additional provider-specific configuration. See link above
    # for details of required/optional fields for your provider.
    config: {}
    #  region:
    #  s3ForcePathStyle:
    #  s3Url:
    #  kmsKeyId:
    #  resourceGroup:
    #  The ID of the subscription containing the storage account, if different from the cluster’s subscription. (Azure only)
    #  subscriptionId:
    #  storageAccount:
    #  publicUrl:
    #  Name of the GCP service account to use for this backup storage location. Specify the
    #  service account here if you want to use workload identity instead of providing the key file.(GCP only)
    #  serviceAccount:

  # Parameters for the `default` VolumeSnapshotLocation. See
  # https://velero.io/docs/v1.6/api-types/volumesnapshotlocation/
  volumeSnapshotLocation:
    # name is the name of the volume snapshot location where snapshots are being taken. Required.
    name:
    # provider is the name for the volume snapshot provider. If omitted
    # `configuration.provider` will be used instead.
    provider:
    # Additional provider-specific configuration. See link above
    # for details of required/optional fields for your provider.
    config: {}
  #    region:
  #    apiTimeout:
  #    resourceGroup:
  #    The ID of the subscription where volume snapshots should be stored, if different from the cluster’s subscription. If specified, also requires `configuration.volumeSnapshotLocation.config.resourceGroup`to be set. (Azure only)
  #    subscriptionId:
  #    incremental:
  #    snapshotLocation:
  #    project:

  # These are server-level settings passed as CLI flags to the `velero server` command. Velero
  # uses default values if they're not passed in, so they only need to be explicitly specified
  # here if using a non-default value. The `velero server` default values are shown in the
  # comments below.
  # --------------------
  # `velero server` default: 1m
  backupSyncPeriod:
  # `velero server` default: 1h
  resticTimeout:
  # `velero server` default: namespaces,persistentvolumes,persistentvolumeclaims,secrets,configmaps,serviceaccounts,limitranges,pods
  restoreResourcePriorities:
  # `velero server` default: false
  restoreOnlyMode:
  # `velero server` default: 20.0
  clientQPS:
  # `velero server` default: 30
  clientBurst:
  # `velero server` default: empty
  disableControllers:
  #

  # additional key/value pairs to be used as environment variables such as "AWS_CLUSTER_NAME: 'yourcluster.domain.tld'"
  extraEnvVars: {}

  # Comma separated list of velero feature flags. default: empty
  features:

  # Set log-level for Velero pod. Default: info. Other options: debug, warning, error, fatal, panic.
  logLevel:

  # Set log-format for Velero pod. Default: text. Other option: json.
  logFormat:

  # Set true for backup all pod volumes without having to apply annotation on the pod when used restic Default: false. Other option: false.
  defaultVolumesToRestic:




# Info about the secret to be used by the Velero deployment, which
# should contain credentials for the cloud provider IAM account you've
# set up for Velero.
credentials:
  # Whether a secret should be used as the source of IAM account
  # credentials. Set to false if, for example, using kube2iam or
  # kiam to provide IAM credentials for the Velero pod.
  useSecret: true
  # Name of the secret to create if `useSecret` is true and `existingSecret` is empty
  name:
  # Name of a pre-existing secret (if any) in the Velero namespace
  # that should be used to get IAM account credentials. Optional.
  existingSecret:
  # Data to be stored in the Velero secret, if `useSecret` is true and `existingSecret` is empty.
  # As of the current Velero release, Velero only uses one secret key/value at a time.
  # The key must be named `cloud`, and the value corresponds to the entire content of your IAM credentials file.
  # Note that the format will be different for different providers, please check their documentation.
  # Here is a list of documentation for plugins maintained by the Velero team:
  # [AWS] https://github.com/vmware-tanzu/velero-plugin-for-aws/blob/main/README.md
  # [GCP] https://github.com/vmware-tanzu/velero-plugin-for-gcp/blob/main/README.md
  # [Azure] https://github.com/vmware-tanzu/velero-plugin-for-microsoft-azure/blob/main/README.md
  secretContents: {}
  #  cloud: |
  #    [default]
  #    aws_access_key_id=<REDACTED>
  #    aws_secret_access_key=<REDACTED>
  # additional key/value pairs to be used as environment variables such as "DIGITALOCEAN_TOKEN: <your-key>". Values will be stored in the secret.
  extraEnvVars: {}
  # Name of a pre-existing secret (if any) in the Velero namespace
  # that will be used to load environment variables into velero and restic.
  # Secret should be in format - https://kubernetes.io/docs/concepts/configuration/secret/#use-case-as-container-environment-variables
  extraSecretRef: ""




# Backup schedules to create.
# Eg:
# schedules:
#   mybackup:
#     disabled: false
#     labels:
#       myenv: foo
#     annotations:
#       myenv: foo
#     schedule: "0 0 * * *"
#     useOwnerReferencesInBackup: true
#     template:
#       ttl: "240h"
#       includedNamespaces:
#       - foo
schedules: {}
```



## configuration
`nano my_s3_credentials.ini`
```ini
[default]
aws_access_key_id=my_aws_access_key_id
aws_secret_access_key=my_aws_secret_access_key
```

## add to kube
```bash
velero install \
   --provider aws \
   --bucket my_s3_bucket_name \
   --secret-file ./my_s3_credentials.ini \
   --backup-location-config \
   --region=minio,s3ForcePathStyle=true,s3Url=http://<ip>:9000
```


## daily backup
```bash
velero schedule create my_daily_backup --schedule "0 7 * * *"
```


## restore
```bash
velero restore create --from-backup my_daily_backup-143213274284
```



## access Mode
```bash
kubectl patch backupstoragelocation my_s3_bucket_name \
    --namespace velero \
    --type merge \
    --patch '{"spec":{"accessMode":"ReadOnly"}}'


kubectl patch backupstoragelocation my_s3_bucket_name \
   --namespace velero \
   --type merge \
   --patch '{"spec":{"accessMode":"ReadWrite"}}'
```

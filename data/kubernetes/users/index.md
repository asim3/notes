# users management
[Authentication](https://kubernetes.io/docs/reference/access-authn-authz/authentication/)
[Creating sample user](https://github.com/kubernetes/dashboard/blob/master/docs/user/access-control/creating-sample-user.md)


## Authenticate
Any user that presents a valid certificate signed by the cluster's 
certificate authority (CA) is considered authenticated. Kubernetes 
determines the username from the common name field in the 'subject' 
of the cert (e.g., "/CN=asim").


## Authorize
The role based access control (RBAC) sub-system determine whether 
the user is authorized to perform a specific operation on a resource.


## service
service accounts are users managed by the Kubernetes API. They are bound 
to specific namespaces, and created automatically by the API server or 
manually through API calls. Service accounts are tied to a set of 
credentials stored as `Secrets`, which are mounted into pods allowing 
in-cluster processes to talk to the Kubernetes API.


[JWT.io](https://jwt.io/)


## how it works
```bash
#!/bin/bash

secret_key='my-secret-key-shared-among-my-servers'

# remove spaces
JWT_HEADER='{"alg":"HS256","typ":"JWT"}'
JWT_PAYLOAD='{"id":"123","name":"Asim Bader"}'

BASE64_HEADER="$(echo -n "${JWT_HEADER}" | base64 | tr -d '=' | tr '/+' '_-' | tr -d '\n')"
BASE64_PAYLOAD="$(echo -n "${JWT_PAYLOAD}" | base64 | tr -d '=' | tr '/+' '_-' | tr -d '\n')"

JWT_HASH=$(echo -n "${BASE64_HEADER}.${BASE64_PAYLOAD}" \
 | openssl dgst -binary -sha256 -hmac "${secret_key}" \
 | base64 | tr -d '=' | tr '/+' '_-' | tr -d '\n')


JWT="${BASE64_HEADER}.${BASE64_PAYLOAD}.${JWT_HASH}"

JWT_IO="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMyIsIm5hbWUiOiJBc2ltIEJhZGVyIn0.pHLWWSQ9tuu1RRvdCLw8tZpFQzCOEMjog9T80bdasSA"

echo "JWT : ${JWT}"

[ "${JWT}" = "${JWT_IO}" ] && echo "Matching the jwt.io results" || echo "not matching!!!"
# Matching the jwt.io results
```

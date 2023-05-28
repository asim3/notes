## install
```bash
sudo docker container run -p 8000:8080 jenkins/jenkins:lts
```

# OR

## install
[Jenkins Docker image](https://github.com/jenkinsci/docker/blob/master/README.md)
```yaml
mkdir -p /tmp/test-jenkins && cd /tmp/test-jenkins && cat <<EOF > docker-compose.yaml
version: '3.8'
services:
  jenkins:
    container_name: my_jenkins_container
    image: jenkins/jenkins:lts-jdk11
    user: root
    restart: unless-stopped
    ports:
      - 8000:8080
    volumes:
      - ./jenkins_home:/var/jenkins_home
volumes:
  jenkins_home:
EOF
```


## run
```bash
cd /tmp/test-jenkins && sudo docker compose up

## Admin Password
sudo cat /tmp/test-jenkins/jenkins_home/secrets/initialAdminPassword
```

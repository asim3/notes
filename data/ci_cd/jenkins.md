# Jenkins
[docs](https://www.jenkins.io/doc/book/)


## install
`docker-compose.yaml`
```yaml
version: '3.8'
services:
  jenkins:
    container_name: jenkins
    image: jenkins/jenkins:lts
    privileged: true
    user: root
    ports:
    - 8080:8080
    - 50000:50000
    volumes:
    - ./jenkins_configuration:/var/jenkins_home
    - /var/run/docker.sock:/var/run/docker.sock
  agent:
    container_name: agent
    image: jenkins/ssh-agent:jdk11
    privileged: true
    user: root
    expose:
      - 22
    environment:
      - JENKINS_AGENT_SSH_PUBKEY=ssh-rsa AAAAB3...ILc== asim@a.com
```


## Admin Password
```bash
docker exec jenkins-blueocean cat /var/jenkins_home/secrets/initialAdminPassword
```

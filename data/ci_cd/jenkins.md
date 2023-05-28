# Jenkins
[docs](https://www.jenkins.io/doc/book/)


## install
```bash
sudo docker container run -p 8000:8080 jenkins/jenkins:lts
```


## install
```yaml
mkdir -p /tmp/test-jenkins && cd /tmp/test-jenkins && cat <<EOF > docker-compose.yaml
version: '3.8'
services:
  jenkins:
    container_name: my_jenkins_container
    image: jenkins/jenkins:lts
    privileged: true
    user: root
    ports:
    - 8000:8080
    - 50000:50000
    volumes:
    - ./jenkins_configuration:/var/jenkins_home
    - /var/run/docker.sock:/var/run/docker.sock
  agent:
    container_name: my_j_agent_container
    image: jenkins/ssh-agent:jdk11
    privileged: true
    user: root
    expose:
      - 22
    environment:
      - JENKINS_AGENT_SSH_PUBKEY=ssh-rsa AAAAB3...ILc== asim@a.com
EOF
```


## run
```bash
cd /tmp/test-jenkins && sudo docker compose up

## Admin Password
sudo cat /tmp/test-jenkins/jenkins_configuration/secrets/initialAdminPassword
```


## new job
```txt
Dashboard 
  > New Item 
    > Freestyle project 
      Name: bbbbbbbbbb
      > OK 
        > Build Steps:
          Execute shell:
          echo "by asim" 
          > Save
            > Build Now
              > #1
                > Console Output
                  Started by user Asimmmmmmm
                  Running as SYSTEM
                  Building in workspace /var/jenkins_home/workspace/bbbbbbbbbb
                  [bbbbbbbbbb] $ /bin/sh -xe /tmp/jenkins9734828736314403136.sh
                  + echo by asim
                  by asim
                  Finished: SUCCESS
```


## Jenkins Env
```bash
echo "by asim   $BUILD_ID   $BUILD_URL"
#     by asim   3           http://192.168.100.14:8000/job/bbbbbbbbbb/3/

echo "by asim   $BUILD_ID   $BUILD_URL"
#     by asim   4           http://192.168.100.14:8000/job/bbbbbbbbbb/4/
```

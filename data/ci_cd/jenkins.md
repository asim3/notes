# Jenkins
[docs](https://www.jenkins.io/doc/book/)


## install
```bash
sudo docker container run -p 8000:8080 jenkins/jenkins:lts
```


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
    ports:
      - 8000:8080
    volumes:
      - ./jenkins_home:/var/jenkins_home
  agent:
    container_name: my_j_agent_container
    image: jenkins/ssh-agent:jdk11
    user: root
    expose:
      - 22
    environment:
      - JENKINS_AGENT_SSH_PUBKEY=ssh-rsa AAAAB3...ILc== asim@a.com
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
echo "by asim   $BUILD_ID   $BUILD_URL" > my-logs-${BUILD_ID}.log
#     by asim   3           http://192.168.100.14:8000/job/bbbbbbbbbb/3/

echo "by asim   $BUILD_ID   $BUILD_URL"
#     by asim   4           http://192.168.100.14:8000/job/bbbbbbbbbb/4/
```


## work space dir
```bash
sudo ls -l /tmp/test-jenkins/jenkins_home/workspace/
# total 0
# drwxr-xr-x. 2 root root 6 May 27 16:19 bbbbbbbbbb
# drwxr-xr-x. 2 root root 6 May 27 16:10 my-2-freestyle_project


sudo ls -l /tmp/test-jenkins/jenkins_home/workspace/bbbbbbbbbb/
# total 4
# -rw-r--r--. 1 root root 59 May 28 11:44 my-logs-3.log
```

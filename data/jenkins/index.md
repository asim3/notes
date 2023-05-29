# Jenkins
[docs](https://www.jenkins.io/doc/book/)


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


## new job using Source Code
```txt
Dashboard 
  > New Item 
    > Freestyle project 
      Name: test-asim-notes
      > OK
        > Source Code Management: Git: 
          Repository URL        : https://github.com/asim3/notes.git
          Branches to build     : main
          Build Triggers        : Poll SCM
          Schedule              : H/5 * * * *
          Build Steps:          : make update
          > Save
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

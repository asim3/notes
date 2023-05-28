## add Docker Plugin
```txt
Dashboard
  > Manage Jenkins
    > Manage Plugins
      > Available plugins
        > Search: Docker
          > Download now and install after restart
```


## add new node
```txt
Dashboard
  > Manage Jenkins
    > Manage Nodes and Clouds
      > Configure Clouds
        > Add a new cloud: Docker
```


## add new node (Old)
```txt
Dashboard
  > Manage Jenkins
    > Manage Nodes and Clouds
      > New Node
        Node name: gggggggg
        Type     : Permanent Agent
        > Create

============================================================
ssh my-server@gggggggg 
curl -sO http://192.168.100.14:8000/jnlpJars/agent.jar
java -jar agent.jar -jnlpUrl http://192.168.100.14:8000/manage/computer/gggggggg/jenkins-agent.jnlp -secret abcd -workDir "/home/my-server/"
```

## evaluate
```bash
eval "echo Hello, World"
# Hello, World

cmd1="cmd2"; 
cmd2="echo Asim"; 

eval "$"cmd2
# Asim

eval "\$c"md2
# Asim

eval "\$$cmd1"
# Asim
```


```bash
ssh-agent
# SSH_AUTH_SOCK=/tmp/ssh-aaa/agent.400; export SSH_AUTH_SOCK;
# SSH_AGENT_PID=401; export SSH_AGENT_PID;
# echo Agent pid 401;

eval $(ssh-agent)
# Agent pid 401

eval `ssh-agent`
# Agent pid 401
```

## evaluate
```bash
my_var=125

eval my_eval='$my_var'

echo $my_eval 
# 125
```


```bash
c="echo"; 
a1="Hello, "; 
a2="World!"; 

eval $c $a1 $a2
```

```bash
cmd1="cmd2"; 
cmd2="echo Hi!"; 

# the backslash escapes the dollar sign
eval \${$cmd1}
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

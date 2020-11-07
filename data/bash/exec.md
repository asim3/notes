[docs](https://www.computerhope.com/unix/bash/exec.htm)

## exec redirect
exec may also be used without any command, to redirect all output
of the current shell to a file.    
Redirections are a special case, and exec does not destroy the 
current shell process.

```bash
# print process number
echo $$; 
# 7600

bash
exec > my_file.txt
whoami
echo $$; 
exit

cat my_file.txt
# asim
# 7759
```



## exec command
When you exec a command, it replaces bash entirely — no new process 
is forked, no new PID is created, and all memory controlled by bash 
is destroyed and overwritten.


## start new process
```bash
# print process number
echo $$; # 6000

# start new process
bash
echo $$; # 6444
exit 0;
```


## execute then exit
```bash
exec ls;
exec    echo $$ >> my_file.txt
exec -c echo $$ >> my_file.txt
```


```bash
echo $$
# 6333
bash
exec echo $$
# 7777
# will execute the command then exits
echo $$
# 6333
```

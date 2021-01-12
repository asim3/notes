## process
```bash
ls  /proc
cat /proc/cpuinfo 
cat /proc/uptime

# display a tree of processes
pstree
```


## show processes
show all processes running in memory
```bash
ps aux
# a: Show processes for all users
# u: Display the user who is using the process
# x: Show all processes. (Without this, ps won’t show GUI processes)

ps aux | grep python
```


## Killing processes
```bash
kill <PID>
kill 98095

killall firefox
# kill a process that has been running for more than 30 minutes
killall -o 30m <process-name>
# kill a process that has been running for less than 30 minutes
killall -y 30m <process-name>

# p-grep: search for all processes that contain
pgrep fox
# kill processes based on partial matches
pkill firefox
```
